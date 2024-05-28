const { response } = require("express");
const Usuario = require('../models/user.model');
const bcrypt = require('bcryptjs');

const getUsers = (req, res = response) => {
    try {
        const desde = req.query.desde || 0;
        desde = Number(desde);
        Usuario.find({}, 'id nombre email img role')
            .skip(desde)
            .limit(5)
            .exec((err, usuariosdb) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error al cargar los usuarios',
                        errors: err
                    });
                }
                Usuario.count({}, (err, conteo) => {
                    if (err) {
                        return res.status(500).json({
                            ok: false,
                            mensaje: 'Error al contar los usuarios',
                            errors: err
                        });
                    }
                    res.status(200).json({
                        ok: true,
                        total: conteo,
                        usuarios: usuariosdb
                    });
                });
            });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            errors: error
        });
    }
}

const getByIdUser = (req,res =response) => {
    var id = req.params.id;
    var body = req.body;
    Usuario.findById(id, (err, usuario) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al buscar el usuarios',
                errors: err
            });
        }
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                mensaje: 'El usuario con el id: ' + id + ' no existe',
                errors: { mensage: 'No existe un usuario con ese ID' }
            });
        }

        usuario.nombre = body.nombre;
        usuario.email = body.email;
        usuario.role = body.role;

        usuario.save((err, usuarioGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al actualizar el usuarios',
                    errors: err
                });
            }
            usuarioGuardado.password = ':)';
            res.status(200).json({
                ok: true,
                usuario: usuarioGuardado
            });
        });
    });
}

const postUsers = (req, res = response) => {
    try {
        const body = req.body;
        const usuario = new Usuario({
            nombre: body.nombre,
            email: body.email,
            password: bcrypt.hashSync(body.password, 10),
            role: body.role,
            img: body.img
        });
        usuario.save()
        .then(usuarioDB => {
            // Si se guarda correctamente, devuelve la muestra guardada en formato JSON
            res.status(201).json({
                ok: true,
                usuario: usuarioDB,
                usuariotoken: req.usuario
            });
        })
        .catch(err => {
            // Si ocurre un error, devuelve un mensaje de error en formato JSON
            return res.status(401).json({
                ok: false,
                mensaje: 'error a crear usuario',
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
    getUsers,
    postUsers,
    getByIdUser
}