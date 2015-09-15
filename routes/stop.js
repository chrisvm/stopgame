var express = require('express');

var router = express.Router();

router.get('/', function(request, response, next) {
    response.render('main_page', { head_title: 'Stop Main Page Mock-Up' });
});

router.get('/first_page', function(request, response, next) {
    response.render('main_page', { head_title: 'Get Ready' });
});

module.exports = router;
