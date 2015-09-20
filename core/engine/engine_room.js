var DataDB = require('../datadb/datadb');
var utils = require('./uitls');

var room = {
    "engine": null,
    "datadb": new DataDB()
};

room.all_rooms = function (socket, opts) {
    var datadb = user.datadb;

    // get all rooms
    datadb.models.Room.find(function (err, rooms) {
        if (err) return console.error(err);

        var ret = [];
        for (var index = 0; index < rooms.length; index++) {
            ret.push(rooms[index].getRef());
        }

        var resp = {
            "status": utils.StatusCode(),
            "rooms": ret
        };
        socket.emit("room all_rooms_response", resp);
    });
};

