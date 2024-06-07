const { response } = require("express");
const Usuario = require('../models/user.model');
const bcrypt = require('bcryptjs');

const getUsers = (req, res = response) => {
    Usuario.find({}, 'id name email img role sexo telefono peso')
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


const postUsers = (req, res = response) => {
    try {
        const body = req.body;
        const usuario = new Usuario({
            name: body.name,
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

const putUser = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(body);

    try {
        let usuario = await Usuario.findById(id);
        if (!usuario) {
            return res.status(404).json({
                ok: false,
                mensaje: 'Usuario no encontrado',
                errors: { message: 'No existe un usuario con ese ID' }
            });
        }

        // Actualiza las propiedades del usuario con los datos del body
        if(usuario.email != ''){ usuario.email = body.email; }
        if(usuario.role != ''){ usuario.role = body.role; }
        if(usuario.name != ''){ usuario.name = body.name; }
        if(usuario.sexo != ''){ usuario.sexo = body.sexo; }
        if(usuario.telefono != ''){ usuario.telefono = body.telefono; }
        if(usuario.peso != ''){ usuario.peso = body.peso; }
        if (body.password && body.password !== '') {
            usuario.password = bcrypt.hashSync(body.password, 10);
        }

        // Guarda los cambios en la base de datos
        const usuarioSaved = await usuario.save();
        res.status(200).json({
            ok: true,
            mensaje: 'Usuario Actualizado',
            usuario: usuarioSaved
        });
    } catch (err) {
        res.status(500).json({
            ok: false,
            mensaje: 'Error al editar el usuario',
            errors: err
        });
    }
};
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
    getUser,
    putUser
}