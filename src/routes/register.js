const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/register', (req, res) => {
    res.render('register/register');
});


module.exports = router;