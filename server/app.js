const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { join } = require('path');

const router = require('./router');

const app = express();
app.set('port', process.env.PORT || 8000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(cookieParser());
app.use(express.static(join(__dirname, '..', 'front-end', 'public')));
app.use(router);

app.use((req, res) => {
  console.log('in 404 err');
  res.sendFile(join(__dirname, '..', 'front-end', 'public', '404.html'));
});

app.use((err, req, res, next) => {
  const { status, errMsg } = err;
  if (status) {
    console.log(status, errMsg);
    res.status(err.status).json({ error: errMsg });
  } else {
    console.log('in server error');
    res.sendFile(join(__dirname, '..', 'front-end', 'public', '500.html'));
  }
});
module.exports = app;
