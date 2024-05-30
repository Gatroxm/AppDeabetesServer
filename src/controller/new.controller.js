const { response } = require("express");

const News = require('../models/news.model');

// Obtener todas las noticias
const getNews = async (req, res = response) => {
    try {
        const news = await News.find();
        res.status(200).json({
            ok: true,
            news
        });
    } catch (err) {
        res.status(500).json({
            ok: false,
            mensaje: 'Error al cargar las noticias',
            errors: err
        });
    }
};

// Obtener una noticia por ID
const getNewById = async (req, res = response) => {
    const id = req.params.id;

    try {
        const newsItem = await News.findById(id);
        if (!newsItem) {
            return res.status(404).json({
                ok: false,
                mensaje: 'Noticia no encontrada',
                errors: { message: 'No existe una noticia con ese ID' }
            });
        }
        res.status(200).json({
            ok: true,
            new: newsItem
        });
    } catch (err) {
        res.status(500).json({
            ok: false,
            mensaje: 'Error al buscar la noticia',
            errors: err
        });
    }
};

// Crear una nueva noticia
const postNew = async (req, res = response) => {
    const {title,
        content,
        exerpt,
        author} = req.body;

    try {
        const newNews = new News({title,
            content,
            exerpt,
            author});
        const newsSaved = await newNews.save();
        res.status(201).json({
            ok: true,
            news: newsSaved
        });
    } catch (err) {
        res.status(500).json({
            ok: false,
            mensaje: 'Error al crear la noticia',
            errors: err
        });
    }
};
// Actualizar una noticia por ID
const putNewById = async (req, res = response) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const newsUpdated = await News.findByIdAndUpdate(id, body, { new: true });
        if (!newsUpdated) {
            return res.status(404).json({
                ok: false,
                mensaje: 'Noticia no encontrada',
                errors: { message: 'No existe una noticia con ese ID' }
            });
        }
        res.status(200).json({
            ok: true,
            news: newsUpdated
        });
    } catch (err) {
        res.status(500).json({
            ok: false,
            mensaje: 'Error al actualizar la noticia',
            errors: err
        });
    }
};

// Eliminar una noticia por ID
const deleteNew = async (req, res = response) => {
    const id = req.params.id;

    try {
        const newsDeleted = await News.findByIdAndDelete(id);
        if (!newsDeleted) {
            return res.status(404).json({
                ok: false,
                mensaje: 'Noticia no encontrada',
                errors: { message: 'No existe una noticia con ese ID' }
            });
        }
        res.status(200).json({
            ok: true,
            mensaje: 'Noticia eliminada',
            news: newsDeleted
        });
    } catch (err) {
        res.status(500).json({
            ok: false,
            mensaje: 'Error al eliminar la noticia',
            errors: err
        });
    }
};

module.exports = {
    getNews,
    getNewById,
    postNew,
    putNewById,
    deleteNew
};