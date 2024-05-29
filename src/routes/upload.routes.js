const express = require('express');
const { uploadImage } = require('../controller/uploadImages.controller');
const app = express();


app.put('/:tipo/:id', uploadImage);

module.exports = app;