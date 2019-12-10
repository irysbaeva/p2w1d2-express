const express = require('express');
var router = express.Router();
const wolves = require('../models/wolves');

router.get('/', (req, res) => {
    res.render('index', {
        wolves
    });
});

module.exports = router;
