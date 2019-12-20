'use strict';

export default class Chat {

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