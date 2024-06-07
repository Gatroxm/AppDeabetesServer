const { response } = require("express");

const Quiz = require('../models/quiz.model');

/**
 * Controladores de Examenes
 */

// Obtener examenes por Usuario
const getQuizes = (req, res = response) => {

    const { id } = req.params;
    try {
        Quiz.find({ user: id }, '_id name value date').sort({ _id: -1 })
            .exec()
            .then(quizDb => {
                res.status(200).json({
                    ok: true,
                    data: quizDb
                });
            })
            .catch(err => {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar los Examenes',
                    errors: err
                });
            });
    } catch (err) {
        res.status(500).json({
            ok: false,
            mensaje: 'Error al cargar los examenes',
            errors: err
        });
    }

}

// Obtener una muestra por ID
const getQuizById = (req, res = response) => {

    const { id } = req.params;

    try {
        Quiz.findById(id)
            .then(quiz => {
                if (quiz) {
                    res.status(200).json({
                        ok: true,
                        data: quiz
                    });
                } else {
                    res.status(404).json({
                        ok: false,
                        mensaje: 'Examen no encontrado'
                    });
                }
            })
            .catch(err => {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar la muestra',
                    errors: err
                });
            });
    } catch (err) {
        res.status(500).json({
            ok: false,
            mensaje: 'Error al buscar el examen',
            errors: err
        });
    }

}

// Agregar una muestra por ID de Usuario
const postQuiz = (req, res = response) => {

    try {
        const {
            name,
            value,
            user,
        } = req.body;

        const newQuiz = new Quiz({
            name,
            value,
            user,
        })
        newQuiz.save()
            .then(savedQuiz => {
                // Si se guarda correctamente, devuelve el examen guardado en formato JSON
                res.status(201).json({
                    ok: true,
                    mensaje: 'Examen agregado correctamente',
                    data: savedQuiz
                });
            })
            .catch(err => {
                // Si ocurre un error, devuelve un mensaje de error en formato JSON
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al agregar el examen',
                    errors: err
                });
            });
    } catch (err) {
        res.status(500).json({
            ok: false,
            errors: err
        });
    }

}

// Editar una muestra por ID
const putQuiz = (req, res = response) => {

    try {

        const { id } = req.params;

        const { name, value, date, user } = req.body;

        Quiz.findByIdAndUpdate(id, {
            name,
            value,
            date,
            user
        }, { new: true })
            .then(updatedQuiz => {
                // Si se actualiza correctamente, devuelve el examen axtualizado en formato JSON
                res.status(200).json({
                    ok: true,
                    mensaje: 'Examen actualizado correctamente',
                    data: updatedQuiz
                });
            })
            .catch(err => {
                // Si ocurre un error, devuelve un mensaje de error en formato JSON
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al actualizar el examen',
                    errors: err
                });
            });

    } catch (err) {
        res.status(500).json({
            ok: false,
            errors: err
        });
    }

}

// Eliminar un Examen por ID
const deleteQuiz = (req, res = response) => {
    const { id } = req.params;

    try {
        Quiz.findByIdAndDelete(id).then(quizDeleted => {
            if (!quizDeleted) {
                return res.status(404).json({
                    ok: false,
                    mensaje: 'Examen no encontrado',
                    errors: { message: 'No existe un examen con ese ID' }
                });
            }
            res.status(200).json({
                ok: true,
                mensaje: 'Examen eliminado',
                data: quizDeleted
            });
        })
            .catch(err => {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar el examen',
                    errors: err
                });
            })
    } catch (err) {
        res.status(500).json({
            ok: false,
            mensaje: 'Error al eliminar el examen',
            errors: err
        });
    }
};

module.exports = {
    getQuizes,
    getQuizById,
    postQuiz,
    putQuiz,
    deleteQuiz
}