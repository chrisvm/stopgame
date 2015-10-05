var express = require('express');
var jade = require('jade');
var fs = require('fs');
var templates = require('../core/utils/templates');

var router = express.Router();

router.get('/', function(request, response, next) {
    var options = {
        head_title: 'Stop Main Page',
        toggled: true,
        sidebar_content: jade.renderFile("views/sidebar.jade"),
        content: jade.renderFile("views/first_page.jade"),
        script_hook: templates()
    };

    response.render('top_layout', options);
});

router.post('/', function (request, response) {
    // if not given username
    if (!'username' in request.body) {
        var locals = {
            "message": "Error on sent POST body",
            "status": "username parameter not set"
        };
        response.render("error", locals);
    }

    // get username
    var username = request.body.username;

    // render game_page
    response.render("games_page");
});

router.get('/freebase', function (request, response) {
    var data = fs.readFileSync('public/js/freebase/index.html');
    response.type('html');
    response.send(data);
});

module.exports = router;
