'use strict';

export default class Message {
  /**
   *
   * @param {string} type
   * @param {object} content
   * @param {string} textMessage
   * @param {User} author
   * @param {Date} date
   */
  constructor (type, content, textMessage, author, date) {
    this._type = type;
    this._content = content;
    this._textMessage = textMessage;
    this._author = author;
    this._date = date;
  }

  get type () {
    return this._type;
  }

  set type (extension) {
    this._type = extension;
  }

  get content () {
    return this._content;
  }

  set content (value) {
    this._type = value;
  }

  get textMessage () {
    return this._textMessage;
  }

  set textMessage (value) {
    this._type = value;
  }

  get author () {
    return this._author;
  }

  set author (value) {
    this._type = value;
  }

  get date () {
    return this._date;
  }

  set date (value) {
    this._type = value;
  }

  render () {

  }
}