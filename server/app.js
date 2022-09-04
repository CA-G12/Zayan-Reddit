const express = require('express');
const compression = require('compression');
const { join } = require('path');

const app = express();
app.set('port', process.env.PORT || 8000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(express.static(join(__dirname, '..', 'front-end', 'public')));

module.exports = app;
