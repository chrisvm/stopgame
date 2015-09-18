var express = require('express');
var jade = require('jade');

var router = express.Router();

router.get('/', function(request, response, next) {
    var options = {
        head_title: 'Stop Main Page Mock-Up',
        toggled: false,
        sidebar: jade.renderFile("views/sidebar.jade"),
        content: jade.renderFile("views/first_page.jade")
    };

    response.render('main_page', options);
});

module.exports = router;
