const { response } = require("express");
var Sampling = require('../models/sampling.model');

const getSampling = (req, res = response) => {
    try {
        const userId = req.params.userId;
        Sampling.find({ user: userId }, 'id muestra fecha hora descripcon jornada')
            .sort({_id:-1})
            .exec()
            .then(samplingDb => {
                res.status(200).json({
                    ok: true,
                    data: samplingDb
                });
            })
            .catch(err => {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar las Muestras',
                    errors: err
                });
            });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            errors: error
        });
    }
}

const getSamplingById = (req, res = response) =>{
    try {
        // Obtiene el ID de la muestra de los parámetros de la ruta
        const { id } = req.params;

        // Realiza la consulta a la base de datos utilizando el ID proporcionado
        Sampling.findById(id)
            .then(sampling => {
                // Si se encuentra la muestra, la devuelve en formato JSON
                if (sampling) {
                    res.status(200).json({
                        ok: true,
                        data: sampling
                    });
                } else {
                    // Si no se encuentra la muestra, devuelve un mensaje de error en formato JSON
                    res.status(404).json({
                        ok: false,
                        mensaje: 'Muestra no encontrada'
                    });
                }
            })
            .catch(err => {
                // Si ocurre un error, devuelve un mensaje de error en formato JSON
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar la muestra',
                    errors: err
                });
            });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            errors: error
        });
    }
}

const postSampling = (req, res = response) => {
    try {
        // Extrae los datos del cuerpo de la solicitud
        const { id, muestra, fecha, hora, descripcon, jornada, user } = req.body;
        console.log({ id, muestra, fecha, hora, descripcon, jornada, user })
        // Crea una nueva instancia de Sampling utilizando el modelo
        const newSampling = new Sampling({
            id,
            muestra,
            fecha,
            hora,
            descripcon,
            jornada,
            user
        });

        // Guarda la nueva muestra en la base de datos
        newSampling.save()
            .then(savedSampling => {
                // Si se guarda correctamente, devuelve la muestra guardada en formato JSON
                res.status(201).json({
                    ok: true,
                    mensaje: 'Muestra agregada correctamente',
                    data: savedSampling
                });
            })
            .catch(err => {
                // Si ocurre un error, devuelve un mensaje de error en formato JSON
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al agregar la muestra',
                    errors: err
                });
            });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            errors: error
        });
    }
}

const putSampling = (req, res = response) => {
    try {
        // Obtiene el ID de la muestra a actualizar de los parámetros de la ruta
        const { id } = req.params;
        // Obtiene los datos actualizados de la muestra del cuerpo de la solicitud
        const { muestra, fecha, hora, descripcon, jornada, user } = req.body;

        // Encuentra la muestra por su ID y actualiza sus datos
        Sampling.findByIdAndUpdate(id, {
            muestra,
            fecha,
            hora,
            descripcon,
            jornada,
            user
        }, { new: true }) // { new: true } devuelve el documento actualizado en lugar del documento original
            .then(updatedSampling => {
                // Si se actualiza correctamente, devuelve la muestra actualizada en formato JSON
                res.status(200).json({
                    ok: true,
                    mensaje: 'Muestra actualizada correctamente',
                    data: updatedSampling
                });
            })
            .catch(err => {
                // Si ocurre un error, devuelve un mensaje de error en formato JSON
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al actualizar la muestra',
                    errors: err
                });
            });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            errors: error
        });
    }
}

const searchSampling = (req, res = response) =>{
    try {
        // Obtiene el término de búsqueda del parámetro de consulta 'q'
        const searchTerm = req.query.q;

        // Realiza la consulta a la base de datos utilizando una expresión regular
        Sampling.find({
            $or: [
                { muestra: { $regex: searchTerm, $options: 'i' } }, // Busca coincidencias en el campo 'muestra' (insensible a mayúsculas y minúsculas)
                { descripcon: { $regex: searchTerm, $options: 'i' } }, // Busca coincidencias en el campo 'descripcon' (insensible a mayúsculas y minúsculas)
                { jornada: { $regex: searchTerm, $options: 'i' } } // Busca coincidencias en el campo 'jornada' (insensible a mayúsculas y minúsculas)
            ]
        })
            .then(results => {
                // Devuelve los resultados encontrados en formato JSON
                res.status(200).json({
                    ok: true,
                    data: results
                });
            })
            .catch(err => {
                // Si ocurre un error, devuelve un mensaje de error en formato JSON
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al realizar la búsqueda',
                    errors: err
                });
            });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            errors: error
        });
    }
}

module.exports = {
    getSampling,
    getSamplingById,
    postSampling,
    putSampling,
    searchSampling
}