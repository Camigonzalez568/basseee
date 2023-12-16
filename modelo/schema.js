const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const datosSchema = new Schema({
    username : String,
    surname  :  String,
     age     :  Number,
});

const Datos = mongoose.model('Datos', datosSchema);

module.exports = Datos;