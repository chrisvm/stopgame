jade = require("jade")

templates = [
    (
        name: "SessionList"
        filepath: "views/session_list.jade"
    )
]

get_templates = () ->
    ret = ""
    for t in templates
        jscode = jade.compileFileClient(t.filepath, (name: t.name))
        script = "<script> #{jscode} </script>"
        ret += script

    return ret

module.exports = get_templates
