const express = require('express');
const router = express.Router();
const pool = require('../database');

//login de admin
router.get('/', (req, res) => {
    res.render('admin/login_admin',
    {layout: 'main_register'});
});

//ruta para vista de calidación
router.get('/valid', (req, res) => {
    res.render('admin/valid');
});

//envio de datos login admin
router.post('/', (req, res) => {
    res.send('enviado login admin')
});

module.exports = router;