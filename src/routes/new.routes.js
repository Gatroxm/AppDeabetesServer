const express = require('express');
const { getNews, getNewById, postNew, deleteNew, putNewById } = require('../controller/new.controller');
const app = express();

// Rutas

// Obtener noticias
app.get('', getNews);

// Obtener una noticia por id
app.get('/:id', getNewById);

// Crear Noticia
app.post('', postNew);

// Editar noticia
app.put('/:id', putNewById);

// Eliminar noticia
app.delete('/:id', deleteNew);

module.exports = app;