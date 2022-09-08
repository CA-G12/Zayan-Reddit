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
const createPostSectionHome = document.querySelector('.createPostSectionHome');
const imageIcon = document.querySelector('.fa-image');
const homeInput = document.querySelector('.homeInput');
const postsSection = document.querySelector('.postsSection');

let userAvatar;
fetch('/isLogged')
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    if (res.istoken) {
      createPost.style.display = 'block';
      user.style.display = 'block';
      username.textContent = res.username;
      userAvatar = res.avatar;
      headerAvatar.src = userAvatar;
      if (createPostSectionHome) {
        createPostSectionHome.style.display = 'flex';
        postsSection.style.marginTop = 0;
      }
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
createPost.addEventListener('click', () => { window.location.href = '/createPost'; });
logo.addEventListener('click', () => window.location.assign('/'));
if (imageIcon) {
  imageIcon.addEventListener('click', () => { window.location.href = '/createPost'; });
}
if (homeInput) {
  homeInput.addEventListener('focus', () => { window.location.href = '/createPost'; });
}
