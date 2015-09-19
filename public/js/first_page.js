/**
 * Created by benjamin on 09-19-15.
 */
var socket = io.connect('http://localhost:3000');

function checkUser(){

    $("#username").attr('disabled','disabled');
    $("#go_btn").attr('disabled','disabled');
    //alert($("#username").val());
    socket.emit('user auth_username',  $("#username").val());
};