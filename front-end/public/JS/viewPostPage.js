/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-destructuring */
const avatar = document.querySelector('.avatar');
const addedBy = document.querySelector('.postUsername');
const timeAdded = document.querySelector('.timeAdded');
const content = document.querySelector('.content');
const image = document.querySelector('.image');
const addCommentBtn = document.querySelector('.addCommentBtn');
const CommentInput = document.querySelector('#CommentInput');
const commentsSection = document.querySelector('.commentsSection');

const postId = window.location.href.split('/')[4];
console.log(postId);
fetch(`/post/${postId}/data`).then((res) => res.json()).then((postData) => handleSinglePostDataDOM(postData)).catch(console.log);

const handleSinglePostDataDOM = (postDataObj) => {
  console.log(postDataObj);
  console.log(addedBy);
  avatar.src = postDataObj.avatar;
  addedBy.textContent = postDataObj.username;
  avatar.setAttribute('userId', postDataObj.userid);
  addedBy.setAttribute('userId', postDataObj.userid);
  addedBy.addEventListener('click', () => {window.location.href = `/profile/${addedBy.getAttribute('userid')}/view`});
  avatar.addEventListener('click', () => {window.location.href = `/profile/${avatar.getAttribute('userid')}/view`});
  console.log(avatar.getAttribute('userId'));
  timeAdded.textContent = new Date(postDataObj.timeadded).toString().split('GMT')[0];
  content.textContent = postDataObj.content;
  if (postDataObj.image) {
    image.src = postDataObj.image;
  } else {
    image.remove();
  }
  fetch(`/post/${postId}/comments`)
    .then((res) => res.json())
    .then((commentsArray) => {
      commentsArray.forEach((comment) => renderComment({
        commentContent: comment.content,
        commentTimeAdded: comment.timeadded,
        commentAvatar: comment.avatar,
        commentUsername: comment.username,
        commentUserId: comment.userid,
      }));
    })
    .catch(console.log);
  fetch('/isLogged')
    .then((res) => res.json())
    .then((res) => {
      console.log('res in isLogged commments');
      if (!res.istoken) {
        console.log('no token and in comment');
        addCommentBtn.style.display = 'none';
        CommentInput.style.display = 'none';
      } else {
      // eslint-disable-next-line no-shadow
        const { avatar, username } = res;
        addCommentBtn.addEventListener('click', () => {
          if (!CommentInput.value) {
          // eslint-disable-next-line no-undef
            Swal.fire({
              title: 'Attention!',
              text: 'There is no comment to add, please add your comment in field',
              icon: 'warning',
              confirmButtonText: 'OK',
            });
          } else {
            fetch('/addComment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                content: CommentInput.value,
                userId: res.id,
                postId,
              }),
            }).then((response) => response.json())
              .then((commentData) => renderComment({
                commentId: commentData.id,
                commentContent: commentData.content,
                commentTimeAdded: commentData.timeadded,
                commentAvatar: avatar,
                commentUsername: username,
                commentUserId: commentData.userid,
              }));
            CommentInput.value = '';
          }
        });
      }
    })
    .catch(console.error);
};
const renderComment = (commentDataObj) => {
  console.log('in render comment', commentDataObj);
  const comment = document.createElement('div');
  comment.className = 'comment';
  const commentedBy = document.createElement('div');
  commentedBy.className = 'commentedBy';
  const commentUserInfo = document.createElement('div');
  commentUserInfo.className = 'commentUserInfo';
  const commentAvatar = document.createElement('img');
  commentAvatar.className = 'commentAvatar';
  commentAvatar.src = commentDataObj.commentAvatar;
  const commentUsername = document.createElement('h4');
  commentUsername.className = 'commentUsername';
  commentUsername.textContent = commentDataObj.commentUsername;
  const commentTime = document.createElement('h5');
  commentTime.className = 'commentTime';
  commentTime.textContent = (new Date(commentDataObj.commentTimeAdded)).toString().split('GMT')[0];
  const commentContent = document.createElement('p');
  commentContent.className = 'commentContent';
  commentContent.textContent = commentDataObj.commentContent;
  commentUserInfo.appendChild(commentAvatar);
  commentUserInfo.appendChild(commentUsername);
  commentedBy.appendChild(commentUserInfo);
  commentUserInfo.setAttribute('userId', commentDataObj.commentUserId);
  commentUserInfo.addEventListener('click', () => {window.location.href = `/profile/${commentUserInfo.getAttribute('userid')}/view`});
  commentedBy.appendChild(commentTime);
  comment.appendChild(commentedBy);
  comment.appendChild(commentContent);
  const theFirstChild = commentsSection.firstChild;
  commentsSection.insertBefore(comment, theFirstChild);
};
