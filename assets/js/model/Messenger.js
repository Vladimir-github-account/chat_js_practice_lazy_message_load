'use strict';

import Chat from './Chat.js';

export default class Messenger {
  constructor(user, chatArray) {
    this._user = user; // имитация запроса на получение пользователя и чатов пользователя по логину
    this._chatArray = chatArray;
    this._currentChat = null;
  }

  get user() {
    return this._user;
  }

  get chatArray() {
    return this._chatArray;
  }

  get currentChat() {
    return this._currentChat;
  }

  /*#################################RENDER#############################*/
  renderChatList(chatArray/*чем это лучше чем просто взять массив через this?*/) {
    const chatList = document.createElement('ul');
    chatList.classList.add('chatList');
    chatArray.forEach((chat) => {
          chatList.appendChild(new Chat(chat.messages).render());
        },
    );
    return chatList;
  }

  renderNoCurrentChatSpan() {
    const noCurrentChatSpan = document.createElement('span');
    noCurrentChatSpan.classList.add('noCurrentChatSpan');
    noCurrentChatSpan.innerText = 'Please select a chat to start messaging';
    return noCurrentChatSpan;
  }

  renderCurrentChatListMessages(currentChat) {
    const currentChatList = document.createElement('ul');
    currentChatList.classList.add('currentChatListMessages');
    if (currentChat) {

    } else {
      currentChatList.appendChild(this.renderNoCurrentChatSpan());
    }
    return currentChatList;
  }

  renderChatListAndSearchFormWrapper(chatArray) {
    const chatListAndSearchFormWrapper = document.createElement('div');
    chatListAndSearchFormWrapper.classList.add('chatListAndSearchFormWrapper');
    chatListAndSearchFormWrapper.appendChild(this.renderChatList(chatArray));
    return chatListAndSearchFormWrapper;
  }

  renderChatListAndCurrentChatListMessagesWrapper(chatArray, currentChat) {
    const chatListAndCurrentChatListMessagesWrapper = document.createElement(
        'div');
    chatListAndCurrentChatListMessagesWrapper.classList.add(
        'chatListAndCurrentChatListMessagesWrapper');
    chatListAndCurrentChatListMessagesWrapper.appendChild(
        this.renderChatListAndSearchFormWrapper(chatArray));
    chatListAndCurrentChatListMessagesWrapper.appendChild(
        this.renderCurrentChatListMessages(currentChat));
    return chatListAndCurrentChatListMessagesWrapper;
  }

  renderMessengerHeader() {
    const messengerHeader = document.createElement('header');
    messengerHeader.classList.add('messengerHeader');
    return messengerHeader;
  }

  render() {
    const messenger = document.createElement('div');
    messenger.setAttribute('id', 'messenger');
    messenger.appendChild(this.renderMessengerHeader());
    messenger.appendChild(
        this.renderChatListAndCurrentChatListMessagesWrapper(this.chatArray,
            this.currentChat));

    return messenger;
  }
}