const { signup, signin, logout } = require('./Authentication');
const { addPost, viewPost , createPostPage} = require('./posts');

module.exports = {
  signup, signin, logout, addPost, viewPost, createPostPage
};
