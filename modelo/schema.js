const mongoose = require('mongoose');
const { Schema } = mongoose;

const Datos = require('../server');

const schema = new Schema({
    username : String,
    surname  :  String,
     age     :  Number,
});


module.exports = schema;