const express = require('express');
const app = express();
const mongoose = require('mongoose');
const datosSchema = require('./modelo/schema'); 
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

const Datos = mongoose.model('Datos', datosSchema);

module.exports = Datos


 app.post('/datos', async (req, res) => {
    try {
        // Crear una nueva instancia del modelo Datos con los datos del cuerpo de la solicitud
        const nuevosDatos = new Datos(req.body);
        // Guardar los nuevos datos en la base de datos
        await nuevosDatos.save();
        console.log('Datos recibidos con éxito:', req.body);
        res.send('Datos recibidos con éxito');
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).send('Error interno del servidor');
    }
});

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
