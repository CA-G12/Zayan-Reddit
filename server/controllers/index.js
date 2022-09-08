const { signup, signin, logout } = require('./Authentication');
const {
  addPost, viewPost, createPostPage, getPostData, getAllPosts,
} = require('./posts');

module.exports = {
  signup, signin, logout, addPost, viewPost, createPostPage, getPostData, getAllPosts,
};
