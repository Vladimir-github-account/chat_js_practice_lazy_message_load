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
    // console.log('constructor' + arguments[arguments.length-1]);
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

  renderMessageTextParagraph(textMessage) {
    const p = document.createElement('p');
    p.innerText = textMessage;
    return p;
  }

  renderMessageImage(content) {
    const image = new Image();
    image.src = content.src;
    return image;
  }

  renderDateSpan(date) {
    const span = document.createElement('span');
    span.innerText = date.toLocaleString();
    return span;
  }

  renderAuthorSpan(author) {
    const span = document.createElement('span');
    span.innerText = author.name + ' ' + author.surname;
    return span;
  }

  render () {
    // console.log('render' + arguments.length);
    const li = document.createElement('li');
    //li.setAttribute('id', `${arguments}`);
    li.appendChild(this.renderMessageTextParagraph(this.textMessage));
    switch (this.type) {
      case 'image':
        li.appendChild(this.renderMessageImage(this.content));
        break;
    }
    li.appendChild(this.renderDateSpan(this.date));
    li.appendChild(this.renderAuthorSpan(this.author));
    return li;
  }
}