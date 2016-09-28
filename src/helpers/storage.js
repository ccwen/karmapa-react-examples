export default class storage {

  static key = 'react-sample/';

  static set(prop, value) {
    localStorage.setItem(`${this.key}${prop}`, JSON.stringify(value));
  }

  static get(prop) {
    return JSON.parse(localStorage.getItem(`${this.key}${prop}`));
  }
}
