const signUpBtn = document.querySelector('.signUp');
const signInBtn = document.querySelector('.signIn');
const addPost = document.querySelector('.addPost');
const user = document.querySelector('.user');
const searchBtn = document.querySelector('.searchButton');
const searchTerm = document.querySelector('.searchTerm');
const comments = document.querySelector('.comments');

fetch('/main')
  .then((res) => res.json())
  .then((res) => {
    console.log(res.istoken);
    if(res.istoken){
        addPost.style.display = 'block';
        user.style.display = 'block';
        signInBtn.style.display = 'none';
        signUpBtn.style.display = 'none';
    }}
    )
  .catch(console.error);

signInBtn.addEventListener('click', () => window.location.assign('/signin.html'));
signUpBtn.addEventListener('click', () => window.location.assign('/signup.html'));
searchBtn.addEventListener('click', () => handleSearch(searchTerm.value.trim()));
comments.addEventListener('click', () => viewPostPage());
