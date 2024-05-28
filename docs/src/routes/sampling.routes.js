var express = require('express');
const { getSampling, getSamplingById, postSampling, putSampling, searchSampling } = require('../controller/sampling.conytroller');
var app = express();

//Ruta para ver todas las muestras
app.get('/byUser/:userId', getSampling);

//Mostrar una sola muestra
app.get('/:id', getSamplingById);

// Ruta para agregar una nueva muestra
app.post('/', postSampling);

//ruta para editar una miuestra por el Id
app.put('/:id', putSampling);

//Ruta para busqueda
app.get('/search', searchSampling);

module.exports = app;