const { response } = require("express");
const Usuario = require('../models/user.model');
const bcrypt = require('bcryptjs');

const getUsers = (req, res = response) => {
    Usuario.find({}, 'id nombre email img role')
        .then(usuariosdb => {
            return Usuario.countDocuments({})
                .then(conteo => {
                    res.status(200).json({
                        ok: true,
                        total: conteo,
                        usuarios: usuariosdb
                    });
                });
        })
        .catch(err => {
            res.status(500).json({
                ok: false,
                mensaje: 'Error al cargar los usuarios o contar los usuarios',
                errors: err
            });
        });


}

const getByIdUser = (req, res = response) => {
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

const getUser = (req, res = response) => {
    const id = req.params.id;  // Asegúrate de obtener el ID desde los parámetros de la solicitud

    Usuario.findById(id)
        .then(usuario => {
            if (!usuario) {
                return res.status(404).json({
                    ok: false,
                    mensaje: 'Usuario no encontrado',
                    errors: { message: 'No existe un usuario con ese ID' }
                });
            }
            res.status(200).json({
                ok: true,
                usuario
            });
        })
        .catch(err => {
            res.status(500).json({
                ok: false,
                mensaje: 'Error al buscar el usuario',
                errors: err
            });
        });
    
}

module.exports = {
    getUsers,
    postUsers,
    getByIdUser,
    getUser
}