const express = require('express');
const router = express.Router();
const schema = require('./modelo/schema')

router.post('/datos', async (req, res) => {
    try {
        const nuevosDatos = new schema(req.body);
        const resultado = await nuevosDatos.save();
        res.status(201).json(resultado);
    } catch (error) {
        res.status(400).json({ error : error.message });
    }
});


router.get('/datos', async (req, res) => {
    try {
        const datos = await schema.find();
        res.status(200).json(datos);
    } catch (error) {
        res.status(500).json({ error : error.message });
    }
});

router.get('/datos/:id', async (req, res) => {
    try {
        const dato = await schema.findById(req.params.id);
        if(!dato) {
           return res.status(404).json({ message : 'Dato no encontrado'});
    } 
    res.status(200).json(dato);
 } catch (error) {
        res.status(500).json({ error : error.message });
    }
});

router.put('/datos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const actualizacion = req.body;
        const resultado = await schema.findByIdAndUpdate(id, actualizacion,  { new : true });
        if(!resultado) {
           return res.status(404).json({ message : 'Dato no encontrado'});
    } 
    res.status(200).json(resultado);
 } catch (error) {
        res.status(500).json({ error : error.message });
    }
});


router.delete('/datos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await schema.findByIdAndDelete(id);
        if(!resultado) {
           return res.status(404).json({ message : 'Dato no encontrado'});
    } 
    res.status(200).json({ message :'Dato eliminado correctamente'});
 } catch (error) {
        res.status(500).json({ error : error.message });
    }
});

module.exports = router;