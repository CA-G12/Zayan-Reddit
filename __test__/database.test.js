const { test, expect } = require('@jest/globals');
const connection = require('../server/database/config/connection');

test('initial test', () => {
  expect(1).toBe(1);
});

test('Testing database connection', () => {
  expect(connection.options.connectionString).toBe('postgres://reddit_user:1234@localhost:5432/reddit_test');
});
