const path = require('path');
const fs = require('fs');
const { response } = require("express");

const getImages = (req, res = response) =>{
    const tipo = req.params.tipo;
    const img = req.params.img;

    const pathImagen = path.resolve(__dirname, `../uploads/${tipo}/${img}`);
    const pathNoImagen = path.resolve(__dirname, '../assets/no-img.jpg');

    if (fs.existsSync(pathImagen)) {
        res.sendFile(pathImagen);
    } 
};

module.exports = {
    getImages
};
