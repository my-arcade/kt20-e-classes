import {Command, flags} from '@oclif/command'
import * as process from 'process'
import * as chalk from 'chalk'
import axios from 'axios'
import Parser from '../parser'
import Generator from '../generator'
axios.defaults.withCredentials = true

export default class Types extends Command {
  static description = 'generate ts types from openAPI specification'

  static flags = {
    help: flags.help({char: 'h'}),
    url: flags.string({char: 'u', description: 'url path to match at beginning'}),
    path: flags.string({char: 'p', description: 'path to name folder'}),
    name: flags.string({char: 'n', description: 'name of files'}),
    override: flags.boolean({char: 'o', description: 'override all files'}),
    random: flags.boolean({char: 'r', description: 'disables prompt for api name'}),

    types: flags.boolean({char: 't'}),
    api: flags.boolean({char: 'a'}),
    model: flags.boolean({char: 'm'}),
    tests: flags.boolean({char: 'z'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {flags} = this.parse(Types)
    const url = flags.url
    const name = flags.name
    const path = flags.path || ''

    if (!name) {
      this.error(chalk.red('Name not specified, please add one with -n.'))
    }

    if (!url) {
      this.error(chalk.red('Url not specified, please add one with -u.'))
    }
    this.log(`${chalk.blue('[Info]')} Parsing ${url}`)
    const parser = new Parser(this.log)
    await parser.getFromRemote()
    const paths = parser.filter(url)
    this.log(`${chalk.blue('[Info]')} Found ${paths.length} types.`)
    if (paths.length > 0) {
      this.log(`${chalk.blue('[Info]')} Generating...`)
      const generator = new Generator(this.log, path)
      const definitions = generator.recoverSchemas(paths)
      const serverTypes = await generator.writeTypes(definitions, parser, flags)
      flags.api && await generator.writeApi(paths, parser, flags, serverTypes)
      flags.model && await generator.writeModel(flags, parser)
      flags.tests && await generator.writeTest(flags)
    } else {
      this.log(`${chalk.green('[Success]')} Nothing to do, stopping`)
    }
  }
}
