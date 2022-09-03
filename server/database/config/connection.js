require('env2')('.env');
const { Pool } = require('pg');

const {
  NODE_ENV, DATABASE_URL, DEVELOPMENT_DATABASE_URL, TESTING_DATABASE_URL,
} = process.env;

let connectionString = '';
let ssl = false;

switch (NODE_ENV) {
  case 'production': connectionString = DATABASE_URL;
    ssl = { rejectUnauthorized: false };
    break;
  case 'development': connectionString = DEVELOPMENT_DATABASE_URL;
    break;
  case 'testing': connectionString = TESTING_DATABASE_URL;
    break;
  default: throw new Error('Invalid database url');
}
console.log(connectionString);
const connection = new Pool({
  connectionString, ssl,
});
console.log(connection.connectionString);
module.exports = connection;
