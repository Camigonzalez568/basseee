const express = require('express');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const router= require('./router')

const app = express();
const port = 5500;

app.use(express.json());
app.use(bodyParser.json());

app.use('/', router);

mongoose.connect('mongodb+srv://clgonzalez:1234@cluster0.nkl5shc.mongodb.net/', {
    useNewUrlParser: true,
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

