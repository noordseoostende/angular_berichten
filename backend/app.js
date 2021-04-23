const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Eerste middleware');
  next();
});

app.use((req, res, next) => {
  res.send('Ongewone contrast!');
});

module.exports = app;
