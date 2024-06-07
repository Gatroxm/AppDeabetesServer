const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const userRoles = {
    values: ['USER_ROLE', 'ADMIN_ROLE'],
    message: '{PATH} no es un rol permitido'
}

const userSchema = new Schema({
    name:{
        type: String,
        require:[true, 'Este campo es requerido']
    },
    email:{
        type: String,
        require:[true, 'Este campo es requerido']
    },
    password:{
        type: String,
        require:[true, 'Este campo es requerido']
    },
    img: {
        type: String,
        required: false,
        default: ''
    },
    sexo: {
        type: String,
        required: false,
        default: ''
    },
    telefono: {
        type: String,
        required: false,
        default: ''
    },
    peso: {
        type: String,
        required: false,
        default: ''
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: userRoles
    }
},{ collection: 'usuarios' });

userSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' });

module.exports = mongoose.model('Usuario', userSchema);