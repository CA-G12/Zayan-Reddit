const { signInValidation } = require('../../validation');
const { checkEmailExistance } = require('../../database/queries');
const { CustomizedServerErrors, comparePasswords, signJWT } = require('../../utils');

const signin = (req, res, next) => {
  const { email, password } = req.body;
  let id; let
    username; let avatar;
  signInValidation({ email, password })
    .then(() => checkEmailExistance(email))
    .then((result) => {
      if (!result.rows.length) { throw new CustomizedServerErrors(401, 'This email isn\'t registered'); }
      return result.rows[0];
    }).then((userDataObj) => {
      id = userDataObj.id;
      username = userDataObj.username;
      avatar = userDataObj.avatar;
      return comparePasswords(password, userDataObj.password);
    })
    .then((result) => {
      if (!result) {
        throw new CustomizedServerErrors(401, 'Wrong Email or password ');
      }
    })
    .then(() => signJWT({ id, username, avatar }))
    .then((token) => res.cookie('token', token).json(token))
    .catch((err) => {
      if (err.details) {
        console.log(err.details);
        next(new CustomizedServerErrors(401, `Validation error : ${err.details[0].message}`));
      }
      next(err);
    });
};
module.exports = signin;
