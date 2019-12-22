'use strict';

import Message from './Message.js';

export default class Chat {
  /**
   *
   * @param {array} messages
   * @param {array} participants
   * @param {boolean} isDialog
   */
  constructor(messages, participants, isDialog) {
    this._messages = messages;
    this._participants = participants;
    this._isDialog = isDialog;
  }

  get messages() {
    return this._messages;
  }

  get participants() {
    return this._participants;
  }

  get isDialog() {
    return this._isDialog;
  }

  loadMessages() {
    this.messages.push();
  }

  /*RENDER USER AVATAR CONTAINER IN CHAT LIST*/
  renderChatListListItemUserAvatarContainer(avatar) {
    const userAvatarContainer = document.createElement('div');
    userAvatarContainer.classList.add('userAvatarContainer');
    userAvatarContainer.appendChild(
        this.renderChatListListItemUserAvatar(avatar));
    return userAvatarContainer;
  }

  /*RENDER USER AVATAR IN USER AVATAR CONTAINER*/

  renderChatListListItemUserAvatar(avatar) {

    const userAvatar = new Image();
    userAvatar.src = avatar;
    return userAvatar;
  }

  renderChatListListItemDataContainer(name, surname, lastMessage) {
    const chatListListItemDataContainer = document.createElement('div');
    chatListListItemDataContainer.classList.add(
        'chatListListItemDataContainer');
    chatListListItemDataContainer.appendChild(
        this.renderChatListListItemUserName(name, surname));
    chatListListItemDataContainer.appendChild(
        this.renderChatListListItemLastMessageSpan(lastMessage));
    return chatListListItemDataContainer;
  }

  renderChatListListItemUserName(name, surname) {
    const chatListListItemUserName = document.createElement('h2');
    chatListListItemUserName.classList.add('chatListListItemUserName');
    chatListListItemUserName.innerText = name + ' ' + surname;
    return chatListListItemUserName;
  }

  renderChatListListItemLastMessageSpan(lastMessage) {
    const chatListListItemLastMessageSpan = document.createElement('span');
    chatListListItemLastMessageSpan.classList.add(
        'chatListListItemLastMessageSpan');
    chatListListItemLastMessageSpan.innerText = lastMessage.author.name + ': ' +
        lastMessage.textMessage;
    return chatListListItemLastMessageSpan;
  }

  renderChatListListItem() {
    const chatListListItem = document.createElement('div');
    chatListListItem.classList.add('chatListListItem');
    if (this.isDialog) {
      chatListListItem.appendChild(
          this.renderChatListListItemUserAvatarContainer(
              this.participants[1].avatar));
      chatListListItem.appendChild(
          this.renderChatListListItemDataContainer(this.participants[1].name,
              this.participants[1].surname, this.messages[0]));
    } else {

    }

    return chatListListItem;
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