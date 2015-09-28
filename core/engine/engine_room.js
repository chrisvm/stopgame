var datadb = require('../datadb/datadb');
var utils = require('./engine_utils');

var room = {
    "engine": null,
    "datadb": new DataDB()
};

room.all_rooms = function (socket, opts) {

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

room.create_room = function (socket, opts) {
    // todo: implement this method
};

