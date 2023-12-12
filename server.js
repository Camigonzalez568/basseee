const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const datos = require('./schema'); 
const port = 3000;

const data = {
    username : String,
    surname  :  String,
     age     :  Number,
  };

app.post('/datos', (req,res) => {
    console.log(req.body);
    res.send('Datos recibidos con exitoo')
});

mongoose.connect('mongodb+srv://clgonzalez:1234@cluster0.nkl5shc.mongodb.net/', {
    useNewUrlParser: false,
    useUnifiedTopology: true,

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
