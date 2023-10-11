const express = require('express');
const router = express.Router();
const pool = require('../database');

//rutas de la paginas informativas
router.get('/', (req, res) => {
    res.render('rea_statics/index');
});

router.get('/bancodecontenidos', (req, res) => {
    res.render('rea_statics/banco_de_contenidos');
});

router.get('/espacios', (req, res) => {
    res.render('rea_statics/espacios');
});


module.exports = router;