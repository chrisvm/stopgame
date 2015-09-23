/** egnine_init.js
 * This file exports the init object, which holds all the init methods for the
 * start of the app.
 */

// the init object
var init = {
    "engine": null
};

/**
 * Attaches all the handlers to the socketio object
 *
 * @param socket.io.Server io instance of a socket io server to add the handlers
 */
init.socketio = function (io) {
    console.log("Initing socket.io handlers");

    io.on('connection', function (socket) {
        console.log('client connected');

        // set the socket methods
        socket.on('user auth_username', function(data){
            init.engine.user.auth_username(socket, data);
        });
    });

};


module.exports = init;