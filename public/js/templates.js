var jade = require("jade");

var templates = [
    {
        "name": "SessionList",
        "filepath": "views/session_list.jade"
    }
];

var script_template = "<script> !=source </script>";

function get_templates () {
    var ret = "";
    for (var x = 0; x < templates.length; x++) {
        var t = templates[x];
        var jscode = jade.compileFileClient(t.filepath, {name: t.name});
        var script = jade.render(script_template, { "self": {
            "source": jscode
        }});
        ret += script;
    }
    return ret;
}

module.exports = get_templates;
