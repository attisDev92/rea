const express = require('express');
const router = express.Router();
const pool = require('../database');

//ingreso login
router.get('/', (req, res) => {
    res.render('login', 
    {layout: 'main_register'} );
});


//envio datos login
router.post('/', (req, res) => {
    res.send('enviado login');
});

module.exports = router;