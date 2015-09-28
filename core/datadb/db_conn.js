var mongoose = require('mongoose');

// old credentials
//MONGO_CREDENTIALS = {
//    user: "stopgame_server",
//    pass: "St0pGam3",
//    url: "ds051953.mongolab.com:51953/heroku_3vs0lpzq"
//};

MONGO_CREDENTIALS = {
    url: "24.48.236.180:27017"
};

function user_credentials_given (cred) {
    if ("user" in cred && "pass" in cred) {
        if (cred.user != "" && cred.pass != "") {
            return true;
        }
    }
    return false;
}

function get_connection() {
    // connect to the server
    var mongo_server = (user_credentials_given(MONGO_CREDENTIALS)) ?
        "mongodb://{user}:{pass}@{url}".format(MONGO_CREDENTIALS) :
        "mongodb://{url}".format(MONGO_CREDENTIALS);

    console.log("Connecting to: {server}".format({ server: mongo_server }));
    mongoose.connect(mongo_server);
    return mongoose;
}

module.exports = get_connection();