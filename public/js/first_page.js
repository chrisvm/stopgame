/**
 * Created by benjamin on 09-19-15.
 */

function checkUser(){
    // get user textbox and button
    var $username_textbox = $("#username");
    var $go_button = $("#go_btn");

    // get username text
    var username = $username_textbox.val();

    // disable the textbox and button
    $username_textbox.attr('disabled','disabled');
    $go_button.attr('disabled','disabled');


    // set the loading animation
    // TODO: implement this

    var test = {
        lines: 10, // The number of lines to draw
        length: 7, // The length of each line
        width: 4, // The line thickness
        radius: 10, // The radius of the inner circle
        corners: 1, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        color: '#000', // #rgb or #rrggbb
        speed: 1, // Rounds per second
        trail: 60, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 2e9, // The z-index (defaults to 2000000000)
        top: 25, // Top position relative to parent in px
        left: 2100 // Left position relative to parent in px
    };

    var $target = $("loading_container");
    var spinner = new Spinner(test).spin();

    $target.prepend (spinner.el);

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
    socket.on('auth_username_response', function(opts){
        console.log(opts);
        $("#logo_container").fadeOut("slow");
    });

}