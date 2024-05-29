const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now }
}, { collection: 'news' });

module.exports = mongoose.model('News', newsSchema);