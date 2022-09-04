const signUpBtn = document.querySelector('.signUp');
const signInBtn = document.querySelector('.signIn');
const searchBtn = document.querySelector('.searchButton');
const searchTerm = document.querySelector('.searchTerm');
const comments = document.querySelector('.comments');


signInBtn.addEventListener('click', () => window.location.assign('/signin.html'));
signUpBtn.addEventListener('click', () => window.location.assign('/signup.html'));
searchBtn.addEventListener('click', () => handleSearch(searchTerm.value.trim()));
comments.addEventListener('click', () => viewPostPage());