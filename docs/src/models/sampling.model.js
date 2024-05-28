const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var samplingSchema = new Schema({
    muestra:{
        type: Number,
        require:[true, 'Este campo es requerido']
    },
    fecha:{
        type: String,
        require:[true, 'Este campo es requerido']
    },
    hora:{
        type: String,
        require:[true, 'Este campo es requerido']
    },
    descripcon:{
        type: String,
    },
    jornada:{
        type: String,
        require:[true, 'Este campo es requerido']
    },
    user:{ type: mongoose.Schema.Types.ObjectId, ref: 'usuarios' }
}, { collection: 'sampling' });

module.exports = mongoose.model('Sampling', samplingSchema);