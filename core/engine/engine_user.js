var DataDB = require('../datadb/datadb');

var user = {
    "engine": null,
    "datadb": new DataDB()
};

user.auth_username = function (socket, opts) {
    var datadb = user.datadb;

    // get users
    datadb.models.User.findOne({ "username": opts.username }, function (err, user) {
        if (err) return console.error(err);

        // create respone status
        var status = {};
        if (user == null) {
            status.code = 200;
            status.short = 'ALL_OK';
            status.error = '';
            
            // save the new user
            var new_user = new datadb.models.User({ "username": opts.username });
            new_user.save();
        } else {
            status.code = 300;
            status.short = 'NOT_OK';
            status.error = 'User found in db';
        }

        // send response
        var response = {
            "status": status,
            "username": opts.username
        };
        socket.emit("user auth_username_response", response);
    });
};

module.exports = user;