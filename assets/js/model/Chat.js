'use strict';

import Message from './Message.js';

export default class Chat {

  constructor(messages) {
    this._messages = messages;
    // this._participants = [];
  }

  get messages() {
    return this._messages;
  }

  loadMessages() {
    this.messages.push();
  }

  render() {
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'chat');

    this.messages.forEach((message /*index*/) => {
          ul.prepend(new Message(message.type, message.content, message.textMessage,
              message.author, message.date /*index*/).render());
        },
    );

    return ul;
  }
}