const { verifyJWT } = require('../utils');

const checkToken = (req, res, next) => {
  console.log('in checkToken');
  console.log(req.cookies.token);
  if (!req.cookies.token) {
    console.log('no token');
    res.redirect('/');
    // res.json({ istoken: false });
  } else {
    const { token } = req.cookies;
    verifyJWT(token)
      .then((decoded) => {
        req.token = decoded;
        next();
        // res.json({ istoken: true, username: req.token.username, avatar: req.token.avatar });
      })
      .catch((err) => next(err));
  }
};
module.exports = checkToken;
