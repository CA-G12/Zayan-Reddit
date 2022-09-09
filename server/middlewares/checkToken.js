const { verifyJWT } = require('../utils');

const checkToken = (req, res, next) => {
  if (!req.cookies.token) {
    console.log('no token');
    res.json({ istoken: false });
  } else {
    const { token } = req.cookies;
    verifyJWT(token)
      .then((decoded) => {
        req.token = decoded;
        next();
      })
      .catch((err) => next(err));
  }
};
module.exports = checkToken;
