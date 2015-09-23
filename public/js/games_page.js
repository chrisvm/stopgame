// get all the rooms on the server
socket.on("room all_users_response", function (opts) {
    if (opts.status.code == 200) {
        var $games_list = $("#games-list");
        $games_list.html(
            SessionList({sessions: opts.rooms})
        );
    }
});
socket.emit("room all_users", {
    "username": socket.username
});

function room_name_validate(name) {
    if (name == '') {
        return false;
    }
}

// set the create method
$("#add-room").click(function () {
    var room_name = $("#room-name").val();

    var alertInput = {'btn': $("#add-room").attr('id'),
                      'inp': $('#room-name').attr('id')};
    if (!room_name_validate(room_name)) {
        // alert code here
        set_alert("alert", "No Name Entered", alertInput);
        // todo: finish the alert code
        return false;
    }

    var opts = {
        "username": socket.username,
        "room_name": room_name
    };
    socket.emit("room create_room", opts);
});

socket.on("room create_room_response", function (opts) {
    socket.room_ref = opts.room;
    // continue to room page
    // todo: add rooms page and connect this to it
});