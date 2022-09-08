/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
fetch('/posts').then((res) => res.json()).then((posts) => posts.reverse().forEach((postData) => renderPost(postData))).catch(console.error);

const renderPost = (postDataObj) => {
  console.log('Handle viewing post page here');
  const post = document.createElement('div');
  post.className = 'post';
  const userData = document.createElement('div');
  userData.className = 'userData';
  const userAvatar = document.createElement('img');
  userAvatar.className = 'avatar';
  userAvatar.src = postDataObj.avatar;
  userData.appendChild(userAvatar);
  const userData2 = document.createElement('div');
  userData2.className = 'userData2';
  const name = document.createElement('h4');
  name.className = 'name';
  name.textContent = postDataObj.username;
  const postTimeAdded = document.createElement('h5');
  postTimeAdded.className = 'timeAdded';
  postTimeAdded.textContent = postDataObj.timeadded;
  userData2.appendChild(name);
  userData2.appendChild(postTimeAdded);
  userData.appendChild(userData2);
  post.appendChild(userData);
  const postContent = document.createElement('content');
  postContent.className = 'content';
  postContent.textContent = postDataObj.content;
  post.appendChild(postContent);
  if (postDataObj.image) {
    const postImage = document.createElement('img');
    postImage.className = 'image';
    postImage.src = postDataObj.image;
    post.appendChild(postImage);
  }
  const comments = document.createElement('button');
  comments.className = 'comments';
  const commentIcon = document.createElement('i');
  commentIcon.className = 'fa-regular fa-comment fa-1x';
  const commentsLabel = document.createElement('h4');
  commentsLabel.className = 'commentsLabel';
  commentsLabel.textContent = 'Comments';
  comments.appendChild(commentIcon);
  comments.appendChild(commentsLabel);
  post.appendChild(comments);
  postsSection.appendChild(post);
};
