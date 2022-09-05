const connection = require('../../config/connection');

const checkEmailExistance = (email) => connection.query('select * from users where email =$1', [email]);
module.exports = checkEmailExistance;
