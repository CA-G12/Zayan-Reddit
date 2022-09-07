const { CustomizedServerErrors } = require('../../utils');

const viewPost = (req, res, next) => {
  console.log('req.postData', req.postData);
};

module.exports = viewPost;
