var express = require('express');
var jade = require('jade');

var router = express.Router();

router.get('/', function(request, response, next) {
    var options = {
        head_title: 'Stop Main Page',
        toggled: true,
        sidebar_content: jade.renderFile("views/sidebar.jade"),
        content: jade.renderFile("views/first_page.jade")
    };

    response.render('top_layout', options);
});

router.post('/', function (request, response) {
    console.log("Got POST Request");
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
    var games_page = jade.renderFile("views/second_page.jade");
    response.html(games_page);
});
module.exports = router;
