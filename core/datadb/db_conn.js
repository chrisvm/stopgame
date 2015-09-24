var mongoose = require('mongoose');

// db constants
MONGO_CREDENTIALS = {
    user: "stopgame_server",
    pass: "St0pGam3",
    url: "ds051953.mongolab.com:51953/heroku_3vs0lpzq"
};

function get_connection() {
    // connect to the server
    var mongo_server = "mongodb://{user}:{pass}@{url}".format(MONGO_CREDENTIALS);
    console.log("Connecting to " + mongo_server);
    mongoose.connect(mongo_server);
    return mongoose;
}

module.exports = get_connection();