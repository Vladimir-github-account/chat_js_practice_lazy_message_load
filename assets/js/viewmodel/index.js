'use strict';

import {
  Messenger,
  Chat,
  Message,
  User,
  AUTHORIZATION_USER_KEY,
} from '../model/index.js';
// import {wrapper} from './controls.js';

const AuthorizationUser = localStorage.getItem(AUTHORIZATION_USER_KEY);
let user;
if (AuthorizationUser) {
  user = JSON.parse(AuthorizationUser);
} else {
  const url = `${location.origin}/pages/log-in.html`;
  location.replace(url);
}

const chats = [
  new Chat([
    new Message('text',
        null,
        'MESSAGE 1 CHAT 1',
        user,
        new Date()),
    new Message('text',
        null,
        'MESSAGE 2 CHAT 1',
        user,
        new Date()),
  ]),
  new Chat([
    new Message('text',
        null,
        'MESSAGE 1 CHAT 2',
        user,
        new Date()),
    new Message('text',
        null,
        'MESSAGE 2 CHAT 2',
        user,
        new Date()),
    new Message('text',
        null,
        'MESSAGE 3 CHAT 2',
        user,
        new Date()),
  ]),
];
const messenger = new Messenger(user, chats).render();

document.body.appendChild(messenger);