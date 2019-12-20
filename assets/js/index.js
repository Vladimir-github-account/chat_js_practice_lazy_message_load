'use strict';

class Messenger {
  constructor (user) {
    this._user = user;
  }
}

class Chat {

  constructor (messages) {
    this._messages = messages;
    // this._participants = [];
  }

  get messages () {
    return this._messages;
  }

  loadMessages (){
    this.messages.push();
  }
  renderMessageTextParagraph(textMessage){
    const p = document.createElement('p');
    p.innerText = textMessage;
    return p;
  }

  renderMessageImage(content){
    const image = new Image();
    image.src = content.src;
    return image;
  }

  renderDateSpan(date){
    const span = document.createElement('span');
    span.innerText = date.toLocaleString();
    return span;
  }

  renderAuthorSpan(author){
    const span = document.createElement('span');
    span.innerText = author.name + ' ' +  author.surname;
    return span;
  }

  render () {
    const ul = document.createElement('ul');
    ul.setAttribute('id', 'messagesList');
    this.messages.forEach((elem, index) => {
      const li = document.createElement('li');
      li.setAttribute('id', `${index}`);
      li.appendChild(this.renderMessageTextParagraph(elem.textMessage));
      switch (elem.type) {
        case 'image':
          li.appendChild(this.renderMessageImage(elem.content));
          break;
      }
      li.appendChild(this.renderDateSpan(elem.date));
      li.appendChild(this.renderAuthorSpan(elem.author));
      ul.appendChild(li);
    });

    return ul;
  }
}

class Message {
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

class User {
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
const wrapper = document.querySelector('.wrapper');
const chat = new Chat([
  new Message('text',
              null,
               'Rabotaet' ,
              new User('name', 'surname'),
              new Date())]).render();
chat.setAttribute('id', 'chat_id');
wrapper.appendChild(chat);
