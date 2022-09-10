const connection = require('../../config/connection');

const getUserProfileDataQuery = (id) => connection.query('SELECT users.avatar, users.username, (SELECT COUNT(*) FROM posts WHERE posts.userId = $1) AS postsNum FROM users where users.id = $1', [id]).then((data) => data.rows[0]);

module.exports = getUserProfileDataQuery;
