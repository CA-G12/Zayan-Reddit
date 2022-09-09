const connection = require('../../config/connection');

const addCommentQuery = ({ content, userId, postId }) => connection.query('insert into comments(content, userId, postId) values ($1, $2, $3) returning *', [content, userId, postId])
  .then((allComments) => allComments.rows[0]);

module.exports = addCommentQuery;
