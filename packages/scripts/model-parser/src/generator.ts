/* eslint-disable indent */
/* eslint-disable unicorn/no-process-exit */
/* eslint-disable no-process-exit */
import Parser from './parser'
import * as fs from 'fs'
import cli from 'cli-ux'
import * as chalk from 'chalk'
import * as process from 'process'
import * as path from 'path'
import Config from './config'
import * as ejs from 'ejs'
import { dirname } from 'path'

export default class Generator {
  constructor(log, path) {
    this.log = log
    this.config = (new Config()).getConfig()
    this.path = `./src/${path}`
  }

  recoverSchemas(types) {
    const defs = []
    for (const type of types) {
      for (const method of type.methods) {
        const responseDefinition = method.responses['200'].schema
        const payload = method.parameters.filter(param => param.in === 'body')[0]
        if (responseDefinition) {
          defs.push(responseDefinition)
        }
        if (payload) {
          defs.push(payload.schema)
        }
      }
    }
    return defs
  }

  async provisionFile(path, fileName, flags) {
    const exists = fs.existsSync(`${path}/${fileName}`)

    if (exists) {
      const shouldContinue = flags.override || await cli.confirm(`${chalk.yellow('[Warning]')} File ${fileName} exist, override? [Y/n]`)
      if (!shouldContinue) {
        process.exit(2)
      }
    } else {
      this.log(`${chalk.blue('[Info]')} File ${fileName} does not exist, generating...`)
    }
    fs.writeFileSync(`${path}/${fileName}`, '')
  }

  async writeTypes(recoverSchemas, parser: Parser, flags) {
    flags.types || this.log(`${chalk.yellow('[Warning]')} No flag type! Generating for internal use!`)
    const name = flags.name
    const definitions = parser.getDefinitions()
    const schemas = [...recoverSchemas]

    const typesPath = `${this.path}/${name}.types.ts`
    flags.types && await this.provisionFile(this.path, `${name}.types.ts`, flags)

    const refs = []
    for (const schema of schemas) {
      if (schema.type === 'array') {
        if (schema.items.$ref !== undefined) {
          refs.push(schema.items.$ref)
        }
      // eslint-disable-next-line no-negated-condition
      } else if (schema.$ref !== undefined) {
        refs.push(schema.$ref)
      } else {
        throw new Error('Unrecognized schema')
      }
    }
    const serverTypes = refs
      .map(ref => ref.substring(14))
      .filter((value, index, self) => self.indexOf(value) === index)
      .map(ref => ref.indexOf('«') === -1 ? ref : ref.split(/[«»]/)[1])

    let str = ''
    for (const type of serverTypes) {
      if (this.config.globals.indexOf(type) !== -1) {
        flags.types && this.log(`${chalk.blue('[Info]')} Global type ${type}, skipping!`)
        continue
      }
      str += (this.generateType(type, definitions) + '\n')
      flags.types && this.log(`${chalk.blue('[Info]')} Server type ${type} generated!`)
    }
    flags.types && fs.writeFileSync(typesPath, str)
    flags.types && this.log(`${chalk.green('[Success]')} Finished generating types!`)

    return serverTypes.filter(t => this.config.globals.indexOf(t) === -1)
  }

  getTypeName(type: string) {
    const isGeneric = type.indexOf('«') !== -1
    let base = type
      .replace('»', '>')
      .replace('«', '<')
      .replace('Payload', '')
      .replace('DTO', '')
      .replace('Dto', '')

    if (isGeneric) {
      base = base.replace('DTO', 'Response').replace('Dto', 'Response')
    }

    let archType = null
    if (type.toLowerCase().indexOf('dto') !== -1) {
      archType = 'Response'
    // eslint-disable-next-line no-negated-condition
    } else if (type.toLocaleLowerCase().indexOf('payload') !== -1) {
      archType = 'Request'
    } else {
      throw new Error(`Arch-type not recognized in type: ${type}`)
    }

    return `${base}${isGeneric ? '' : archType}`
  }

  generateType(type: string, definitions) {
    return `type ${this.getTypeName(type)} = {\n${this.evalProperties(definitions[type])}\n}\n`
  }

  evalProperties(definition) {
    let properties = []
    if (definition.type === 'object') {
      for(const key of Object.getOwnPropertyNames(definition.properties)) {
        const property = definition.properties[key]
        properties.push(`  ${key}: ${this.getTypeOfProperty(property)};`)
      }

      return properties.join('\n')
    }

    throw new Error(`Definition type not recognized: ${definition.type}`)
  }

  getTypeOfProperty(property) {
    if (property.type === undefined) {
      // eslint-disable-next-line no-negated-condition
      if (property.schema !== undefined) {
        // eslint-disable-next-line no-negated-condition
        if (property.schema.$ref !== undefined) {
          return this.getTypeName(property.schema.$ref.substring(14))
        }
        return this.getTypeOfProperty(property.schema)
     }
       return 'void'
   }

    switch (property.type) {
      case 'integer':
        return 'number'
      case 'string':
        return 'string'
      case 'array':
        // eslint-disable-next-line no-case-declarations
        let type = 'any'
        if (property.items.type !== undefined) {
          type = this.getTypeOfProperty(property.items)
        } else if (property.items.$ref !== undefined) {
          type = this.getTypeName(property.items.$ref.substring(14))
        }
        return `Array<${type}>`
      default:
        return property.type
    }
  }

  async writeApi(paths, parser, flags, serverTypes) {
    const importNames = serverTypes.map(this.getTypeName).join(', ')
    const name = flags.name
    const apiPath = `${this.path}/${name}.api.ts`
    await this.provisionFile(this.path, `${name}.api.ts`, flags)
    const template = fs.readFileSync(path.join(__dirname, '/templates/api.template.ejs'), 'utf8')
    const globalImports = ''
    const {functions, exportNames} = await this.extractApiFunctions(paths, flags)
    fs.writeFileSync(
      apiPath,
      ejs.render(template, {importNames, name, globalImports, functions, exportNames}),
      'utf8'
    )
    this.log(`${chalk.green('[Success]')} Finished generating api!`)
  }

  async extractApiFunctions(paths, flags) {
    const ast = []
    for (const path of paths) {
      for (const method of path.methods) {
        // eslint-disable-next-line no-await-in-loop
        const name = flags.random ? method.operationId : await cli.prompt(`${chalk.bgGreen('[Input]')} Name for ${path.path} - ${method.method.toUpperCase()}`)
        ast.push({path, method, name})
      }
    }

    const template = fs.readFileSync(path.join(__dirname, '/templates/axios.template.ejs'), 'utf8')
    const functions = []
    for (const {name, path, method} of ast) {
      const simple = path.path.indexOf('{') === -1
      const url = `${simple ? '\'' : '`'}${path.path.replace('{', '${')}${simple ? '\'' : '`'}`

      const params = []
      for (const param of method.parameters.filter(p => p.in !== 'body')) {
        if (param.in === 'query') {
          this.log(`${chalk.yellow('[Warning]')} skipping query parameter ${param.name}; might be important...`)
          continue
        }
        params.push(`${param.name}: ${this.getTypeOfProperty(param)}`)
      }

      // handle payload
      const body = method.parameters.filter(p => p.in === 'body')[0]
      let extra = ''
      if (body) {
        params.push(`${body.name}: ${this.getTypeOfProperty(body)}`)
        extra = `, ${body.name}`
      }

      const promiseType = this.getTypeOfProperty(method.responses['200'])
      functions.push(ejs.render(template, {
        name,
        method: method.method,
        params: params.join(', '),
        path: path.path,
        type: promiseType,
        url,
        extra,
      }))
      this.log(`${chalk.green('[Success]')} Generated function ${name}!`)
    }

    return ({
      functions: functions.join('\n'),
      exportNames: `${ast.map(tree => tree.name).map(name => `  ${name}`).join(',\n')}`,
    })
  }

  async writeModel(flags, parser: Parser) {
    const name = flags.name
    const modelPath = `${this.path}/${name}.model.ts`
    const baseServerType = await cli.prompt(`${chalk.bgBlue('[Info]')} Enter server type after which model should be generated`)
    if (parser.getDefinitions()[baseServerType] === undefined) {
      throw new Error('Base server type does not exist. Try again!')
    }
    await this.provisionFile(this.path, `${name}.model.ts`, flags)
    const template = fs.readFileSync(path.join(__dirname, '/templates/model.template.ejs'), 'utf8')


    const properties = await this.generateModelProperties(parser.getDefinitions()[baseServerType], flags)

    fs.writeFileSync(
      modelPath,
      ejs.render(template, {name, properties}),
      'utf8'
    )
    this.log(`${chalk.green('[Success]')} Finished generating model!`)
  }

  async generateModelProperties(definition, flags) {
    const properties = []
    for (const key of Object.getOwnPropertyNames(definition.properties)) {
      const property = definition.properties[key]
      // eslint-disable-next-line no-await-in-loop
      const include = flags.override || await cli.confirm(`${chalk.bgBlue('[Info]')} Include ${key} in model: [Y/n]`)
      if (include) {
        properties.push(`    ${key}: ${this.getModelPropertyType(property)}`)
      }
    }

    return properties.join(',\n')
  }

  getModelPropertyType(property) {
    if (property.$ref !== undefined) {
      throw new Error('getModelPropertyType for $ref not implemented!')
    }
    switch (property.type) {
      case 'string':
        return 'types.string'
      case 'integer':
        return 'types.number'
      case 'array':
        return `types.array(${this.getModelPropertyType(property.items)})`
      default:
        throw new Error(`getModelPropertyType reached default case. Not implemented! ${property.type}`)
    }
  }

  async writeTest(flags) {
    const name = flags.name
    const testPath = `${this.path}/tests/${name}Model.test.ts`
    if (!fs.existsSync(`${this.path}/tests`)) {
      fs.mkdirSync(`${this.path}/tests`)
    }
    await this.provisionFile(`${this.path}/tests`, `${name}Model.test.ts`, flags)
    console.log(__dirname)
    const template = fs.readFileSync(path.join(__dirname, '/templates/test.template.ejs'), 'utf8')

    fs.writeFileSync(
      testPath,
      ejs.render(template, {name}),
      'utf8'
    )
    this.log(`${chalk.green('[Success]')} Finished generating model tests!`)
  }
}
