'use strict';
/*CONTROLS*/
const nameInput = document.querySelector('form.signUpForm>input[type="text"].name');
const surnameInput = document.querySelector('form.signUpForm>input[type="text"].surname');
const passwordInput = document.querySelector('form.signUpForm>input[type="password"].password');
const signUpButton = document.querySelector('form.signUpForm > div.signUpButton');
/*END*/

signUpButton.onclick = registerUser;

function registerUser() {
  const user = {
    name: nameInput.value,
    surname: surnameInput.value,
    password: passwordInput.value,
  };
  nameInput.value = surnameInput.value = passwordInput.value = "";
  localStorage.setItem('AuthorizationUser', JSON.stringify(user));
  const url = `${location.origin}/`;
  location.replace(url);
}