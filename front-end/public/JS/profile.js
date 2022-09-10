const profileAvatar = document.querySelector('#profileAvatar');
const profileUsername = document.querySelector('.profileUsername');
const profilePostsNum = document.querySelector('.profilePostsNum');

const userId = window.location.href.split('/')[4];
fetch(`/profileData/${userId}`)
  .then((res) => res.json())
  .then((data) => {
    profileAvatar.src = data.avatar;
    profileUsername.textContent = data.username;
    profilePostsNum.textContent = `${data.postsnum} ${data.postsnum <= 1 ? 'post' : 'posts'}`;
  })
  .catch(console.log);

fetch(`/posts/profile/${userId}`)
  .then((res) => res.json())
  .then((posts) => {
    posts.forEach((postData) => renderPost(postData));
  }).catch(console.error);
