const express = require('express');
const router = express.Router();
const pool = require('../database');

//registro user
router.get('/', (req, res) => {
    res.render('register/register',
    {layout: 'main_register'});
});

//recuperar mail
router.get('/recover', (req, res) => {
    res.render('register/recover',
    {layout: 'main_register'});
});

//autenticar mail
router.get('/mail', (req, res) => {
    res.render('register/mail',
    {layout: 'main_register'});
});

//completar registro
router.get('/addprofile', (req,res) => {
    res.render('register/addprofile',
    {layout: 'main_register'});
});

//enviar crear usuario
router.post('/register', (req, res) => {
    res.send('enviado registro');
});

//enviar formularios
router.post('/juridico', (req,res) => {
    res.send('recibido juridico');
});

router.post('/natural', (req, res) => {
    res.send('recibido natural');
});

router.post('/espacio', (req,res) => {
    res.send('recibido espacio');
});

router.post('/gestor', (req, res) => {
    res.send('recibido gestor');
});


module.exports = router;