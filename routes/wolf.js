const express = require('express');
var router = express.Router();
const wolves = require('../models/wolves');

router.get('/:wolf', (req, res) => {
    const wolfPath = req.params.wolf,
        wolf = wolves.find(function (wolf) {
            return wolf.path === wolfPath;
        });
    res.render('wolf', {
        name: wolf.name,
        say: wolf.say
    });
});

module.exports = router;
