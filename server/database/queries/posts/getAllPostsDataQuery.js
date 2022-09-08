const connection = require('../../config/connection');

const getPostDataQuery = () => connection.query('SELECT username, avatar, posts.id,userId,content,image,timeAdded FROM posts inner join users on posts.userId=users.id');

module.exports = getPostDataQuery;
