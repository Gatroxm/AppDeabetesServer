const express = require('express');



const { getUsers, getByIdUser, postUsers, getUser, putUser } = require('../controller/user.controller');

const app = express();

/* Obteneter los usuarios */
app.get('/', getUsers);


/* Crear nuevo usuario */

app.post('/',  postUsers);

/* Actualizar usuarios */

app.put('/:id',  putUser);

app.get('/:id', getUser)
/* Borrar usuarios */

// app.delete('/:id', verificaToken, (req, res) => {
//     var id = req.params.id;
//     Usuario.findByIdAndRemove(id, (err, usuarioBorrado) => {
//         if (err) {
//             return res.status(500).json({
//                 ok: false,
//                 mensaje: 'Error al borrar el usuarios',
//                 errors: err
//             });
//         }
//         if (!usuarioBorrado) {
//             return res.status(400).json({
//                 ok: false,
//                 mensaje: 'El usuario con el id: ' + id + ' no existe',
//                 errors: { mensage: 'No existe un usuario con ese ID' }
//             });
//         }
//         res.status(200).json({
//             ok: true,
//             usuario: usuarioBorrado
//         });
//     })
// });

module.exports = app;