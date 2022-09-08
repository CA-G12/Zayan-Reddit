const { getAllPostsDataQuery } = require('../../database/queries');

const getAllPosts = (req, res) => {
  console.log('in get all posts controller');
  getAllPostsDataQuery().then((posts) => res.json(posts.rows)).catch(console.log);
};
module.exports = getAllPosts;
