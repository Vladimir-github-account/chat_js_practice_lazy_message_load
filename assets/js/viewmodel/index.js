'use strict';

import {
  Messenger,
  Chat,
  Message,
  User,
} from '../model/index.js';
import {wrapper} from './controls.js';



const chat = new Chat([
  new Message('text',
      null,
      'Rabotaet',
      new User('name', 'surname'),
      new Date())]).render();
chat.setAttribute('id', 'chat_id');
wrapper.appendChild(chat);
