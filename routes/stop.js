var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('top_layout', { head_title: 'Stop Main Page Mock-Up' });
});

module.exports = router;
