# get all the rooms on the server
socket.on("room all_users_response", (opts) ->
    if opts.status.code is 200
        $games_list = $("#games-list")
        $games_list.html(SessionList(sessions: opts.rooms))
)

socket.emit("room all_users",
    username: socket.username
)

room_name_validate = (name) ->
    if name is ''
        return false
    return true

# set the create method
$("#add-room").click( () ->
    room_name = $("#room-name").val()

    alertInput =
        btn: $("#add-room").attr('id')
        inp: $('#room-name').attr('id')

    if not room_name_validate(room_name)
        # alert code here
        window.set_alert("alert", "No Name Entered", alertInput)
        return false

    opts =
        username: socket.username
        room_name: room_name

    socket.emit("room create_room", opts)
)

socket.on("room create_room_response", (opts) ->
    socket.room_ref = opts.room
    # continue to room page
    # todo: add rooms page and connect this to it
)