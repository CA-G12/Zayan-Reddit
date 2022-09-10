const { join } = require('path');

const viewProfilePage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'front-end', 'public', 'profile.html'));
};

module.exports = viewProfilePage;
