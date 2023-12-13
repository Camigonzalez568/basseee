const express = require('express');
const app = express();
const mongoose = require('mongoose');
const datosSchema = require('./modelo/schema'); 
const bodyParser = require('body-parser');
const router= require('./router')

const port = 3900;

app.use(express.json());
app.use(bodyParser.json());



mongoose.connect('mongodb+srv://clgonzalez:1234@cluster0.nkl5shc.mongodb.net/', {
})
    .then(() => {
        console.log('Conexión exitosa a MongoDB');
    })
    .catch((err) => {
        console.error('Error al conectar a MongoDB:', err);
    });


app.listen(port, () => {
    console.log('El servidor está escuchando en el puerto', port);
});

