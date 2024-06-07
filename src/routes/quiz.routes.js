const express = require('express');
const { getQuizes, getQuizById, postQuiz, putQuiz, deleteQuiz } = require('../controller/quiz.controller');
const app = express();

/**
 * Ruta para obtener Todos los examenes por ustario
 */
app.get('/by-user/:id', getQuizes);


/**
 * Ruta para obtener un examen en espesifico por Id
 */

app.get('/:id', getQuizById);


/**
 * Ruta para agregar un examen por usuario
 */

app.post('', postQuiz);

/**
 * Ruta para edutar un Examen
 */

app.put('/:id', putQuiz);


/**
 * Ruta para eliminar un Examen
 */

app.delete('/:id', deleteQuiz);

module.exports = app;