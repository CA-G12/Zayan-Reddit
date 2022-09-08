const avatar = document.querySelector('.avatar');
const addedBy = document.querySelector('.postUsername');
const timeAdded = document.querySelector('.timeAdded');
const content = document.querySelector('.content');
const image = document.querySelector('.image');

const postId = window.location.href.split('/')[4];
console.log(postId);
// eslint-disable-next-line no-use-before-define
fetch(`/post/${postId}/data`).then((res) => res.json()).then((postData) => handlePostDataDOM(postData)).catch(console.log);

const handlePostDataDOM = (postDataObj) => {
  console.log(postDataObj);
  console.log(addedBy);
  // const {username, avatar, timeadded, content, image, userid, id:postId} = postDataObj;
  avatar.src = postDataObj.avatar;
  addedBy.textContent = postDataObj.username;
  timeAdded.textContent = postDataObj.timeadded;
  content.textContent = postDataObj.content;
  if (postDataObj.image) {
    image.src = postDataObj.image;
  } else {
    image.remove();
  }
};
