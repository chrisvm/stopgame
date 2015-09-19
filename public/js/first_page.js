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

}