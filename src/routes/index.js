const express = require('express');

const router = express.Router();

//rutas de la paginas informativas

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/bancodecontenidos', (req, res) => {
    res.render('banco_de_contenidos');
})

router.get('/espacios', (req, res) => {
    res.render('espacios');
})


module.exports = router;