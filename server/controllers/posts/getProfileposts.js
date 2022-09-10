const { getProfilepostsQuery } = require('../../database/queries');

const getProfileposts = (req, res) => {
  console.log('in getProfileposts controller');
  console.log(req.params.id);
  getProfilepostsQuery(req.params.id).then((userPosts) => res.json(userPosts)).catch(console.log);
};
module.exports = getProfileposts;
