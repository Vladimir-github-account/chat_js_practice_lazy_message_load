'use strict';

export default class Messenger {
  constructor (user) {
    this._user = JSON.parse(localStorage.getItem('AuthorizationUser')); // имитация запроса на получение пользователя и чатов пользователя по логину
    this._chatArray = [{},{}];
  }
}