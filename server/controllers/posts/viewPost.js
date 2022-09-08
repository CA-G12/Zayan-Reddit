const { join } = require('path');

const viewPost = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'front-end', 'public', 'postPage.html'));
};

module.exports = viewPost;
