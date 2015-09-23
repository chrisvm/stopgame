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