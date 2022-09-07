/* eslint-disable no-undef */
const signUpBtn = document.querySelector('.signUp');
const signInBtn = document.querySelector('.signIn');
const createPost = document.querySelector('.addPost');
const user = document.querySelector('.user');
const username = document.querySelector('.username');
const searchBtn = document.querySelector('.searchButton');
const searchTerm = document.querySelector('.searchTerm');
// const comments = document.querySelector('.comments');
const logoutBtn = document.querySelector('.logout');
const headerAvatar = document.querySelector('.headerAvatar');
const logo = document.querySelector('.logo');
const createPostAvatar = document.querySelector('#createPostAvatar');

let userAvatar;
fetch('/main')
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    if (res.istoken) {
      createPost.style.display = 'block';
      user.style.display = 'block';
      username.textContent = res.username;
      userAvatar = res.avatar;
      headerAvatar.src = userAvatar;
      if (createPostAvatar) {
        createPostAvatar.src = userAvatar;
      }
      signInBtn.style.display = 'none';
      signUpBtn.style.display = 'none';
    }
  })
  .catch(console.error);
signInBtn.addEventListener('click', () => window.location.assign('/signin.html'));
signUpBtn.addEventListener('click', () => window.location.assign('/signup.html'));
searchBtn.addEventListener('click', () => handleSearch(searchTerm.value.trim()));
// comments.addEventListener('click', () => viewPostPage());
logoutBtn.addEventListener('click', () => logout());
createPost.addEventListener('click', () => window.location.assign('createPost.html'));
logo.addEventListener('click', () => window.location.assign('/'));
