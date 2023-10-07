const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/register', (req, res) => {
    res.render('register/register',
    {layout: 'main_register'});
});

router.get('/recover', (req, res) => {
    res.render('register/recover',
    {layout: 'main_register'});
});

router.get('/mail', (req, res) => {
    res.render('register/mail',
    {layout: 'main_register'});
});

module.exports = router;