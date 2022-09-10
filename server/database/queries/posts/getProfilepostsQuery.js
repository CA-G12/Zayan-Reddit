const connection = require('../../config/connection');

const getProfilepostsQuery = (userId) => connection.query('SELECT username, avatar, posts.id,userId,content,image,timeAdded FROM posts inner join users on posts.userId=users.id where userId = $1 order by posts.id DESC', [userId])
  .then((userPosts) => userPosts.rows);
module.exports = getProfilepostsQuery;
