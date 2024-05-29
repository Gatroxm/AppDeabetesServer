const express = require('express');
const app = express();
const { getImages } = require('../controller/images.controller');

app.get('/:tipo/:img', getImages);

module.exports = app;
