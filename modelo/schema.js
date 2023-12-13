const mongoose = require('mongoose');

const schema = Datos.object({
    username : String,
    surname  :  String,
     age     :  Number,
});

const Datos = require('./server');  

module.exports = schema;