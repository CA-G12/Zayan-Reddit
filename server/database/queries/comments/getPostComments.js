const connection = require('../../config/connection');

const getPostCommentsQuery = (postId) => connection.query('select userId, username, avatar, content, timeAdded from comments inner join users on users.id = comments.userId where postId = $1 order by comments.id', [postId])
  .then((postCommentsData) => postCommentsData.rows);

module.exports = getPostCommentsQuery;
