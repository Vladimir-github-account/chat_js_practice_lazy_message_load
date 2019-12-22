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
        'TEXT MESSAGE 1 CHAT 1',
        new User(user.name, user.surname,
            'https://image.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg'),
        new Date()),
    new Message('text',
        null,
        'MESSAGE 2 CHAT 1',
        new User('Mike', 'Vazovsky',
            'https://www.meme-arsenal.com/memes/f2065ea6046aa763d886e07c6093079e.jpg'),
        new Date()),
      ], [
        new User(user.name, user.surname,
            'https://image.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg'),
        new User('Mike', 'Vazovsky',
            'https://www.meme-arsenal.com/memes/f2065ea6046aa763d886e07c6093079e.jpg')],
      true),
  new Chat([
    new Message('text',
        null,
        'MESSAGE 1 CHAT 2',
        new User('SECOND', 'USER',
            'https://www.meme-arsenal.com/memes/f2065ea6046aa763d886e07c6093079e.jpg'),
        new Date()),
    new Message('text',
        null,
        'MESSAGE 2 CHAT 2',
        new User(user.name, user.surname,
            'https://image.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg'),
        new Date()),
    new Message('text',
        null,
        'MESSAGE 3 CHAT 2',
        new User(user.name, user.surname,
            'https://image.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg'),
        new Date()),
  ], [
    new User(user.name, user.surname,
        'https://image.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg'),
    new User('SECOND', 'USER',
        'https://www.meme-arsenal.com/memes/f2065ea6046aa763d886e07c6093079e.jpg'),
  ], true),
];
const messenger = new Messenger(user, chats).render();

document.body.appendChild(messenger);