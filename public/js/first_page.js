/**
 * Created by benjamin on 09-19-15.
 */
function checkUser(){

    var socket = io.connect('http://localhost:3000');
    $("#username").className("readOnly");

    socket.on('news', function (data) {
        console.log(data);
        socket.emit('user auth_username', { username: $("#username").value });
    });
};