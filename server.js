const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const port = 4000;

// Conectar MongoDB
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

// Middleware para analizar solicitudes JSON entrantes
app.use(express.json());

// Tus rutas y otro middleware se pueden agregar aquí

app.listen(port, () => {
    console.log('El servidor está escuchando en el puerto', port);
});
