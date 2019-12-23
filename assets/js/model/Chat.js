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
    this._isCurrent = false;
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

  get isCurrent() {
    return this._isCurrent;
  }

  set isCurrent(value) {
    this._isCurrent = value;
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

  onChatListListItemClickHandler(chatListListItem) {
    debugger
    console.log(arguments);
    console.log(this);
    chatListListItem.classList.add('currentChat');
    this.isCurrent = true;
    const wrapper = document.getElementsByClassName(
        'chatListAndCurrentChatListMessagesWrapper')[0];
    /* document.querySelector('chatListAndCurrentChatListMessagesWrapper').
     replaceChild(this.render(),
     document.querySelector(
     'ul.chatListAndCurrentChatListMessagesWrapper'),
     );*/
    /*chatArray.forEach((chat) => {
     chatList.appendChild(new Chat(chat.messages).render());
     },
     );*/
  }

  renderChatListListItem(id) {
    const chatListListItem = document.createElement('div');
    chatListListItem.classList.add('chatListListItem');
    chatListListItem.setAttribute('id', `chatListListItem${id}`);
    if (this.isDialog) {
      chatListListItem.appendChild(
          this.renderChatListListItemUserAvatarContainer(
              this.participants[1].avatar));
      chatListListItem.appendChild(
          this.renderChatListListItemDataContainer(this.participants[1].name,
              this.participants[1].surname, this.messages[0]));
    } else {

    }

    chatListListItem.addEventListener('click',
        () => {
          if (!this.isCurrent) {
            const previousCurrentChat = document.querySelector('.currentChat');
            if (previousCurrentChat) {
              previousCurrentChat.classList.remove('currentChat');
            }
            chatListListItem.classList.add('currentChat');
            this.isCurrent = true;

            document.querySelector(
                '.chatListAndCurrentChatListMessagesWrapper').
                replaceChild(this.render(),
                    document.querySelector('ul.currentChatListMessages'),
                );
          }
        });

    return chatListListItem;
  }

  /*----------------------------RENDER MESSAGE LIST---------------------------*/

  render() {
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'chat');
    ul.classList.add('currentChatListMessages');
    this.messages.forEach((message /*index*/) => {
          ul.prepend(new Message(message.type, message.content, message.textMessage,
              message.author, message.date /*index*/).render());
        },
    );

    return ul;
  }
}