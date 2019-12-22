'use strict';

export default class User {
  /**
   *
   * @param {string} name
   * @param {string} surname
   * @param {string} avatar
   */
  constructor(name, surname, avatar) {
    this._name = name;
    this._surname = surname;
    this._avatar = avatar;
  }

  get name () {
    return this._name;
  }

  set name (value) {
    this._type = value;
  }

  get surname () {
    return this._surname;
  }

  set surname (value) {
    this._type = value;
  }

  get avatar() {
    return this._avatar;
  }

  set avatar(value) {
    this._type = value;
  }
}