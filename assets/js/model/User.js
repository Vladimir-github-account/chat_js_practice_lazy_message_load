'use strict';

export default class User {
  /**
   *
   * @param {string} name
   * @param {string} surname
   */
  constructor (name, surname) {
    this._name = name;
    this._surname = surname;
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
}