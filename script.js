const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 5500;

// Conectar MongoDB
mongoose.connect('mongodb+srv://clgonzalez:<48537645>@cluster0.svwfvnx.mongodb.net/', {

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
