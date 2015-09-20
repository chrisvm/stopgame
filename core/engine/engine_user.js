var DataDB = require('../datadb/datadb');

var user = {
    "engine": null,
    "datadb": new DataDB()
};

user.auth_username = function (socket, opts) {
    var datadb = user.datadb;

    // get users
    datadb.models.User.find(function (err, users) {
        if (err) return console.error(err);
        console.log(users);
    });
};

module.exports = user;