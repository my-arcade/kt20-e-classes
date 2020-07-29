import * as fs from 'fs'

export default class Config {
  constructor() {
    this.path = './'
    this.config = {
      globals: [],
      generics: [],
    }
    if (fs.existsSync(`${this.path}/parse.config.json`)) {
      this.config = JSON.parse(fs.readFileSync(`${this.path}/parse.config.json`, 'utf8'))
    }
  }

  getConfig() {
    return this.config
  }
}
