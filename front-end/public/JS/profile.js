const profileAvatar = document.querySelector('#profileAvatar');
const profileUsername = document.querySelector('.profileUsername');
const profilePostsNum = document.querySelector('.profilePostsNum');

const userId = window.location.href.split('/')[5];
console.log(profileAvatar, profileUsername);

fetch(`/posts/profile/${userId}`)
  .then((res) => res.json())
  .then((posts) => {
    profileAvatar.src = posts[0].avatar;
    profileUsername.textContent = posts[0].username;
    profilePostsNum.textContent = `${posts.length} posts`;
    posts.forEach((postData) => renderPost(postData));
  }).catch(console.error);
