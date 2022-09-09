const { checkEmailExistance, addUserQuery } = require('./users');
const { addPostQuery, getPostDataQuery, getAllPostsDataQuery } = require('./posts');
const { addCommentQuery, getPostCommentsQuery } = require('./comments');

module.exports = {
  checkEmailExistance,
  addUserQuery,
  addPostQuery,
  getPostDataQuery,
  getAllPostsDataQuery,
  addCommentQuery,
  getPostCommentsQuery,
};
