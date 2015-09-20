function checkUser() {
    // get user textbox and button
    var $username_textbox = $("#username");
    var $go_button = $("#go_btn");

    // get username text
    var username = $username_textbox.val();

<<<<<<< HEAD
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
=======
    if (username == '')
    {
        var $input_group = $("#input_group");
        $input_group.attr("class", "form-group has-warning");
        return;
    }
    else
    {
        // disable the textbox and button
        $username_textbox.attr('disabled','disabled');
        $go_button.attr('disabled','disabled');



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
        // TODO: set the callback

        //call back
        socket.on('user auth_username_response', function(opts){
            console.log(opts);
            $("#logo_container").fadeOut("slow");
        });
    }
>>>>>>> 9b45345cbcb5292b267513882e4e06e40f5742db

}