const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuizSchema = new Schema({

    name:{
        type:String,
        required: [true, 'El campo es requerido']
    },
    value:{
        type: String,
        require: [true, 'El campo es requerido ']
    },
    date: { type: Date, default: Date.now },
    user:{ type: mongoose.Schema.Types.ObjectId, ref: 'usuarios' }


}, {collection: 'examenes'});

module.exports = mongoose.model('Quiz', QuizSchema);