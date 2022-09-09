const { signup, signin, logout } = require('./Authentication');
const {
  addPost, viewPost, createPostPage, getPostData, getAllPosts,
} = require('./posts');
const { addComment, getPostComments } = require('./comments');

module.exports = {
  signup,
  signin,
  logout,
  addPost,
  viewPost,
  createPostPage,
  getPostData,
  getAllPosts,
  addComment,
  getPostComments,
};
