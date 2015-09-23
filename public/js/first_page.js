function checkUser() {
    // get user textbox and button
    var $username_textbox = $("#username");
    var $go_button = $("#go_btn");

    // get username text
    var username = $username_textbox.val();
    $username_textbox.attr("disabled", true);
    $go_button.attr("disabled", true);

    var alertData = {"btn"  : $go_button.attr('id'),
                     "inp": $username_textbox.attr('id')};

    if (username == '') {
        // set warning to form-group
        set_alert('alert', "Empty Username", alertData);

        // disable disable
        setTimeout(function () {
            $username_textbox.attr("disabled", false);
            $go_button.attr("disabled", false);
        }, 1500);
        return;
    }

    //// set the loading animation
    //var spinner_opts = {
    //    "position": "relative"
    //};
    //var spinner = new Spinner(spinner_opts).spin();
    //$('#loading_container').append(spinner.el);

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
        if (socket.username != null)return;
        if (opts.status.code == 200) {
            // if user not found
            // add username to socket
            socket.username = opts.username;

            // enter next page
            $("#logo_container").fadeOut("slow", function () {
                // set the loading animation
                var spinner_opts = {
                    "position": "relative"
                };
                var spinner = new Spinner(spinner_opts).spin();
                var $top_container = $('#top_container');
                $top_container.css("margin-top", "100px");
                $top_container.append(spinner.el);
                $top_container.fadeIn(800);

                var $content = $("#page-content-wrapper");

                $.ajax({
                    "url": "/",
                    "async": true,
                    "type": "post",
                    "data": {
                        "username": username
                    },
                    "success": function (data, textStatus, jqXHR) {
                        $content.html(data);
                    },
                    "error": function (jqXHR, textStatus, errorThrown) {
                        console.log(textStatus);
                        $content.html(textStatus);
                    }
                });
            });

        } else if (opts.status.code == 300) {
            // if user already in server
            set_alert("error", "Username taken", alertData);
            setTimeout(function () {
                $username_textbox.attr("disabled", false);
                $go_button.attr("disabled", false);
            }, 1500);
        }
    });
}



