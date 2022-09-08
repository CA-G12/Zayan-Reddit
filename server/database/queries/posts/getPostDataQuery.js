const connection = require('../../config/connection');

const getPostDataQuery = (id) => connection.query('SELECT username, avatar, posts.id,userId,content,image,timeAdded FROM posts inner join users on posts.userId=users.id WHERE posts.id =$1', [id])
  .then((allposts) => allposts.rows[0])
  .then((postData) => postData);

module.exports = getPostDataQuery;
