'use strict';
/*CONTROLS*/
const nameInput = document.querySelector('form.logInForm>input[type="text"].name');
const surnameInput = document.querySelector('form.logInForm>input[type="text"].surname');
const passwordInput = document.querySelector('form.logInForm>input[type="password"].password');
const logInButton = document.querySelector('form.logInForm > div.logInButton');
/*END*/
import {
  AUTHORIZATION_USER_KEY,
} from '../index.js';


logInButton.onclick = logIn;

window.onload = checkAuthorizationData; // if we load page from viewmodel script it's an unnecessary check

function checkAuthorizationData() {
  const userLogInData = JSON.parse(localStorage.getItem(AUTHORIZATION_USER_KEY));
  console.log(userLogInData);
  if (userLogInData){
    nameInput.value = userLogInData.name;
    surnameInput.value = userLogInData.surname;
    passwordInput.value = userLogInData.password;
  }
}

function logIn() {
  const user = {
    name: nameInput.value,
    surname: surnameInput.value,
    password: passwordInput.value,
  };
  nameInput.value = surnameInput.value = passwordInput.value = "";
  localStorage.setItem('AuthorizationUser', JSON.stringify(user));
  localStorage.setItem('isAuthorized', 'yes');
  const url = `${location.origin}/`;
  location.replace(url);
}