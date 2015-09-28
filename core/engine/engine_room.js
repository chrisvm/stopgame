var DataDB = require('../datadb/datadb');
var utils = require('./engine_utils');

var room = {
    "engine": null,
    "datadb": new DataDB()
};

room.all_rooms = function (socket, opts) {
    // get all rooms
    room.datadb.models.Room.find(function (err, rooms) {
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
    // get creator user
    var user = room.datadb.models.User.findOne({ "username": opts.username }, function (err, user) {
        if (err) {
            socket.send("room create_room_response", {
                "status": utils.StatusCode({ type: 500 }),
                "room": null
            });
            return console.error(err);
        }

        // create the room
        var room_init = {
            "name": opts.room_name,
            "created_by": [user],
            "users": [],
            "ready": [],
            "state": [{
                "current_letter": "",
                "running": false
            }],
            "num_players": 0
        };
        var new_room = new room.datadb.models.Room(room_init);
        new_room.save();

        var resp = {
            "status": utils.StatusCode(),
            "room": new_room.getRef()
        };
        socket.send("room create_room_response", resp);
    });
};

