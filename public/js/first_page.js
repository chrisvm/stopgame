function checkUser() {
    // get user textbox and button
    var $username_textbox = $("#username");
    var $go_button = $("#go_btn");

    // get username text
    var username = $username_textbox.val();
    $username_textbox.attr("disabled", true);
    $go_button.attr("disabled", true);

    if (username == '') {
        // set warning to form-group
        var addedClasses = "has-warning has-feedback";
        var $input_group = $("#input_group");
        $input_group.addClass(addedClasses);

        $go_button.tooltip({
            "title": "Empty Username",
            "placement": "bottom",
            "trigger": "manual"
        });
        $go_button.tooltip("show");

        // set icon feedback
        var $feedback = $('<span class="glyphicon glyphicon-warning-sign form-control-feedback" aria-hidden="true"></span>');
        $input_group.append($feedback);

        // set disappereance callback
        setTimeout(function () {
            $go_button.tooltip("hide");
            $feedback.remove();
            $input_group.removeClass(addedClasses);

            $username_textbox.attr("disabled", false);
            $go_button.attr("disabled", false);
        }, 1500);
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