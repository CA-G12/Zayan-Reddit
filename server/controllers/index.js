const { signup, signin, logout } = require('./Authentication');
const { addPost } = require('./posts');

module.exports = {
  signup, signin, logout, addPost,
};
