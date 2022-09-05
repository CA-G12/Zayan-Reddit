/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#confirmed-password');
const username = document.querySelector('#username');
const signUpBtn = document.querySelector('.signUpBtn');
const signInBtn = document.querySelector('.signInBtn');

const signFormsValidation = () => {
  let emailVal; let passwordVal; let password2Val; let
    usernameVal;
  if (email) {
    emailVal = { value: email.value.trim(), valid: false };
    if (emailVal.value === '') {
      handleError(email, 'You must fill this filed by your email');
    } else if (!validateEmail(emailVal.value)) {
      handleError(email, 'Please enter a valid email address');
    } else {
      succeed(email);
      emailVal.valid = true;
    }
  }
  if (password) {
    passwordVal = { value: password.value.trim(), valid: false };
    if (passwordVal.value === '') {
      handleError(password, 'You must fill this field by your password!');
    } else if (!validatePassword(passwordVal.value)) {
      handleError(
        password,
        'Must contain at least a digit,an uppercase,a lowercase letter,and 6 charctars',
      );
    } else {
      succeed(password);
      passwordVal.valid = true;
    }
  }
  if (username) {
    usernameVal = { value: username.value.trim(), valid: false };
    if (usernameVal.value === '') {
      handleError(username, 'You must fill this filed by your username');
    } else {
      succeed(username);
      usernameVal.valid = true;
    }
  }
  if (password2) {
    password2Val = { value: password2.value.trim(), valid: false };
    if (password2Val.value === '') {
      handleError(password2, 'You must confirm your password in this field!');
    } else if (passwordVal.value !== password2Val.value) {
      handleError(password2, "Passwords don't match");
    } else {
      succeed(password2);
      password2Val.valid = true;
    }
  }
  if (
    (email && emailVal.valid === false)
    || (username && usernameVal.valid === false)
    || (password && passwordVal.valid === false)
    || (password2 && password2Val.valid === false)
  ) {
    return false;
  }
  return true;
};

const handleError = (input, msg) => {
  const requirment = input.parentElement;
  const h6 = requirment.querySelector('h6');
  requirment.className = 'requirment error';
  h6.textContent = msg;
};

const succeed = (input) => {
  const requirment = input.parentElement;
  requirment.className = 'requirment success';
};
const validateEmail = (emailValue) => /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  emailValue,
);
const validatePassword = (passwordValue) => /^(?=.*\d)(?=.*[a-z]).{6,20}$/.test(passwordValue);
