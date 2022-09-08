const avatar = document.querySelector('.avatar');
const addedBy = document.querySelector('.postUsername');
const timeAdded = document.querySelector('.timeAdded');
const content = document.querySelector('.content');
const image = document.querySelector('.image');
const addCommentBtn = document.querySelector('.addCommentBtn');
const CommentInput = document.querySelector('#CommentInput');

const postId = window.location.href.split('/')[4];
console.log(postId);
// eslint-disable-next-line no-use-before-define
fetch(`/post/${postId}/data`).then((res) => res.json()).then((postData) => handleSinglePostDataDOM(postData)).catch(console.log);

const handleSinglePostDataDOM = (postDataObj) => {
  console.log(postDataObj);
  console.log(addedBy);
  avatar.src = postDataObj.avatar;
  addedBy.textContent = postDataObj.username;
  avatar.setAttribute('userId', postDataObj.userid);
  addedBy.setAttribute('userId', postDataObj.userid);
  addedBy.addEventListener('click', () => console.log(addedBy.getAttribute('userId')));
  avatar.addEventListener('click', () => console.log(avatar.getAttribute('userId')));
  console.log(avatar.getAttribute('userId'));
  timeAdded.textContent = postDataObj.timeadded;
  content.textContent = postDataObj.content;
  if (postDataObj.image) {
    image.src = postDataObj.image;
  } else {
    image.remove();
  }
};
fetch('/isLogged')
  .then((res) => res.json())
  .then((res) => {
    console.log('res in isLogged commments');
    if (!res.istoken) {
      console.log('no token and in comment');
      addCommentBtn.style.display = 'none';
      CommentInput.style.display = 'none';
    }
  })
  .catch(console.error);
addCommentBtn.addEventListener('click', () => {
  if (!CommentInput.value) {
    Swal.fire({
      title: 'Attention!',
      text: 'There is no comment to add, please add your comment in field',
      icon: 'warning',
      confirmButtonText: 'OK',
    });
  }
});
