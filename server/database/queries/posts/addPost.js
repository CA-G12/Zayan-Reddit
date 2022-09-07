const connection = require('../../config/connection');

const addPostQuery = ({ content, image, userId }) => connection.query('insert into posts(content, image, userId) values ($1, $2, $3) returning *', [content, image, userId])
  .then((allposts) => allposts.rows[0])
  .then((postData) => postData);
module.exports = addPostQuery;
