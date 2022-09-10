const { signup, signin, logout } = require('./Authentication');
const {
  addPost, viewPost, createPostPage, getPostData, getAllPosts, getProfilePosts, viewProfilePage,
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
  getProfilePosts,
  viewProfilePage,
};
