function checkUser() {
    // get user textbox and button
    var $username_textbox = $("#username");
    var $go_button = $("#go_btn");

    // disable the textbox and button
    $username_textbox.attr('disabled','disabled');
    $go_button.attr('disabled','disabled');

    // get username text
    var username = $username_textbox.val();

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