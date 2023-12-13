const express = require('express');
const router = express.Router();
const schema = require('./modelo/schema')

router.post('/datos', async (req, res) => {
    try {
        const nuevosDatos = new schema(req.body);
        await nuevosDatos.save();
        console.log('Datos recibidos con éxito:', req.body);
        res.send('Datos recibidos con éxito');
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = router;