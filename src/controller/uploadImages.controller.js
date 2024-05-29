const { response } = require("express");
const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const Usuario = require('../models/user.model');

app.use(fileUpload());

const uploadImage = (req, res = response) => {
    const tipo = req.params.tipo;
    const id = req.params.id;

    // Tipos de colección válidos
    const tiposValidos = ['usuario', 'news'];
    if (tiposValidos.indexOf(tipo) < 0) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Tipo de colección ' + tipo + ' no es válida',
            errors: { message: 'Tipo de colección no es válida' }
        });
    }

    const files = req.files;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            mensaje: 'No se seleccionó ninguna imagen',
            errors: { message: 'No se seleccionó imagen' }
        });
    }

    // Obtener nombre del archivo
    const archivo = req.files.imagen;
    const nombreCortado = archivo.name.split('.');
    const extensionArchivo = nombreCortado[nombreCortado.length - 1];

    // Extensiones permitidas
    const extensionesValidas = ['png', 'jpg', 'gif', 'jpeg'];
    if (extensionesValidas.indexOf(extensionArchivo) < 0) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Extensión no válida',
            errors: { message: 'Las extensiones válidas son ' + extensionesValidas.join(', ') }
        });
    }

    // Crear nombre de archivo personalizado
    const nombreArchivo = `${id}-${new Date().getMilliseconds()}.${extensionArchivo}`;

    // Mover el archivo del temporal a un path
    const directorioPadre = path.dirname(__dirname);
    const pathArchivo = `${directorioPadre}/uploads/${tipo}/${nombreArchivo}`;
    const directorioDestino = path.dirname(pathArchivo);
    if (!fs.existsSync(directorioDestino)) {
        fs.mkdirSync(directorioDestino, { recursive: true });
    }
    archivo.mv(pathArchivo, (err) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al mover el archivo',
                errors: err
            });
        }
        subirPorTipo(tipo, id, nombreArchivo, res);
    });
};

async function subirPorTipo(tipo, id, nombreArchivo, res) {
    switch (tipo) {
        case 'usuario':
            try {
                const usuarioDB = await Usuario.findById(id);
                if (!usuarioDB) {
                    return res.status(400).json({
                        ok: false,
                        mensaje: `El usuario con el id: ${id} no existe`,
                        errors: { mensaje: 'No existe un usuario con ese ID' }
                    });
                }

                const pathViejo = path.resolve(__dirname, `../uploads/usuarios/${usuarioDB.img}`);
                // Si existe, elimina la imagen anterior
                if (fs.existsSync(pathViejo)) {
                    fs.unlinkSync(pathViejo);
                }

                usuarioDB.img = nombreArchivo;
                const usuarioActualizado = await usuarioDB.save();
                usuarioActualizado.password = ':)';

                return res.status(200).json({
                    ok: true,
                    mensaje: 'Imagen de usuario actualizada',
                    usuario: usuarioActualizado
                });
            } catch (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al actualizar el usuario',
                    errors: err
                });
            }
    }
}

module.exports = {
    uploadImage
};
