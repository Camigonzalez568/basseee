const mongoose = require('mongoose');

const schema = datos.object({
    username : String,
    surname  :  String,
     age     :  Number,
});


module.exports = datos;

