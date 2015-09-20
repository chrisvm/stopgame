function checkUser() {
    // get user textbox and button
    var $username_textbox = $("#username");
    var $go_button = $("#go_btn");

    // get username text
    var username = $username_textbox.val();

    if (username == '') {
        // set warning to form-group
        var $input_group = $("#input_group");
        $input_group.attr("class", "form-group has-warning");

        return;
    }

    // set the loading animation
    var spinner_opts = {
        "position": "relative"
    };
    var spinner = new Spinner(spinner_opts).spin();
    $('#loading_container').append(spinner.el);

    //// create the opts and send the 'user auth_username' message with callback
    ////
    // create the opts
    var opts = {
        "username": username
    };

    // send the user.auth_username message
    socket.emit('user auth_username', opts);

    // set the callback
    socket.on('user auth_username_response', function (opts) {
        // if already set username, return
        if (socket.username != null) return;

        console.log(opts);
        $("#logo_container").fadeOut("slow");
    });
}