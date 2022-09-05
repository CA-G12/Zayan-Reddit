const express = require('express');
const compression = require('compression');
const { join } = require('path');

const router = require('./router');

const app = express();
app.set('port', process.env.PORT || 8000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(express.static(join(__dirname, '..', 'front-end', 'public')));
app.use(router);
app.use((err, req, res, next) => {
  const { status, errMsg } = err;
  if (status) {
    console.log(status, errMsg);
    res.status(err.status).json({ error: errMsg });
  } else {
    res.json('500 INTERNAL SERVER ERROR');
  }
});
module.exports = app;
