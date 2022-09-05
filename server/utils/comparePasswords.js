/* eslint-disable implicit-arrow-linebreak */
const bcrypt = require('bcrypt');

const comparePasswords = (enteredPass, storedHashedPass) =>
  bcrypt.compare(enteredPass, storedHashedPass);
module.exports = comparePasswords;
