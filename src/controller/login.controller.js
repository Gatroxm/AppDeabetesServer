const { response } = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { SEED } = require('../config/config');
const Usuario = require('../models/user.model');

const logIng = (req, res  = response) => {
    try {
        const body = req.body;
        Usuario.findOne({ email: body.email })
            .then(usuarioDB => {
                if (!usuarioDB) {
                    return res.status(400).json({
                        ok: false,
                        mensaje: 'El usuario con el coreo: ' + body.email + ' no existe',
                        errors: { mensage: 'No existe un usuario con ese Correo' }
                    });
                }
                if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
                    return res.status(400).json({
                        ok: false,
                        mensaje: 'Contraseña invalida',
                        errors: { mensage: 'Contraseña invalida' }
                    });
                }
                //crear un token
                usuarioDB.password = ':)';
                console.log({ usuario: usuarioDB })
                const token = jwt.sign({ usuario: usuarioDB }, SEED, { expiresIn: 14400 });
                res.status(200).json({
                    ok: true,
                    usuario: usuarioDB,
                    id: usuarioDB._id,
                    token: token
                });
            })
            .catch(err => {
                // Si ocurre un error, devuelve un mensaje de error en formato JSON

                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar el usuario',
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
    logIng
}