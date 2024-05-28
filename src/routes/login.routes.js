const express = require('express');
const { logIng } = require('../controller/login.controller');
const app = express();

app.post('/', logIng);

module.exports = app;