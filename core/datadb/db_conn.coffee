mongoose = require('mongoose')

creds =
    url: "24.48.216.4:27017/stop"


given_cred = (cred) ->
    if "user" in cred and "pass" in cred
        if cred.user isnt "" and cred.pass isnt ""
            return true
    return false

get_connection = () ->
    # connect to the server
    with_credentials = "mongodb://{user}:{pass}@{url}".format(creds)
    no_credentials = "mongodb://{url}".format(creds)

    mongo_server = if given_cred(creds) then with_credentials else no_credentials

    console.log("Connecting to: {server}".format((server: mongo_server)))
    mongoose.connect(mongo_server)
    return mongoose

module.exports = get_connection()
