const { signUpValidation } = require('../../validation');
const { checkEmailExistance, addUserQuery } = require('../../database/queries');
const { hashPassword, signJWT, CustomizedServerErrors } = require('../../utils');

const signup = (req, res, next) => {
  const { email, username, password } = req.body;
  signUpValidation({ email, username, password })
    .then(() => checkEmailExistance(email))
    .then((result) => {
      if (result.rows.length) { throw new CustomizedServerErrors(401, 'Email Already Exists!'); }
    }).then(() => hashPassword(password))
    .then((hashedPassword) => addUserQuery({ email, username, hashedPassword }))
    .then((userData) => signJWT({ id: userData.id, username, avatar: userData.avatar }))
    .then((token) => res.cookie('token', token).json(token))
    .catch((err) => {
      if (err.details) {
        // console.log(err.details[0].message);
        next(new CustomizedServerErrors(401, `Validation error : ${err.details[0].message}`));
      }
      next(err);
    });
};

module.exports = signup;
