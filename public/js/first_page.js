/**
 * Created by benjamin on 09-19-15.
 */
function checkUser(){

    $("#username").className("readOnly");

    socket.on('news', function (data) {
        console.log(data);
        socket.emit('user auth_username', { username: $("#username").value });
    });
};