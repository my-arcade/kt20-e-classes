// eslint-disable-next-line unicorn/filename-case
import * as chalk from "chalk";
import axios from "axios";

export default class Parser {
  constructor(log) {
    this.email = "charles@kt20eclass.com";
    this.password = "1234";
    this.baseUrl = "http://localhost:8080/v2/api-docs?group=All+APIs";
    this.loginUrl = "http://localhost:8080/v3/login";
    this.log = log;
  }

  async getFromRemote() {
    this.log(`${chalk.blue("[Info]")} Attempting log in...`);
    const {
      data: { accessToken: token }
    } = await axios.post(this.loginUrl, {
      email: this.email,
      password: this.password
    });

    this.log(`${chalk.blue("[Info]")} Login successful`);
    this.log(`${chalk.blue("[Info]")} Requesting remote api docs...`);
    const {
      data: { paths, definitions }
    } = await axios.get(this.baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    this.log(`${chalk.blue("[Info]")} Started parsing...`);
    this.paths = Object.getOwnPropertyNames(paths).map(key => ({
      path: key,
      methods: this._getMethods(paths, key)
    }));
    this.definitions = definitions;
    this.log(`${chalk.blue("[Info]")} Parsing successful`);
  }

  getDefinitions() {
    return this.definitions;
  }

  filter(urlRegex: string) {
    return this.paths.filter(path => path.path.indexOf(urlRegex) === 0);
  }

  _getMethods(paths: string, key: string) {
    return Object.getOwnPropertyNames(paths[key]).map(method => ({
      ...paths[key][method],
      method
    }));
  }
}
