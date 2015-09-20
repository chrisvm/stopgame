var jade = require("jade");

var templates = [
    {
        "name": "SessionList",
        "filepath": "../views/session_list.jade"
    }
];

function init_templates () {
    for (var x = 0; x < templates.length; x++) {
        var t = templates[x];
        var jscode = jade.compileFileClient(t.filepath, {name: t.name});
        // todo: finish the template compilation
        var script = jade.render("script!= source", {
            "self":
        })
        var $script = $("<script/>").html(jscode);
        $("body").append($script);
    }
}
