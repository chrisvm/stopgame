/** egnine_init.js
 * This file exports the init object, which holds all the init methods for the
 * start of the app.
 */
// get the engine conf file
var engine_conf_file = './engine_conf';
var engine_conf = require(engine_conf_file);

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

    // todo: make this into a engine_conf file
    io.on('connection', function (socket) {
        console.log('client connected');

        for (var k in engine_conf.routes) {
            // get method
            var method_loc = engine_conf.routes[k];
            var method = init.engine;
            for (var x = 0; x < method_loc.length; x++) {
                method = method[method_loc[x]];
            }
            socket.on(k, function (opts) {
                method(socket, opts);
            });
        }
        //// set the socket methods
        //socket.on('user auth_username', function(opts){
        //    init.engine.user.auth_username(socket, opts);
        //});
        //
        //socket.on('room all_rooms', function (opts) {
        //    init.engine.room.all_rooms(socket, opts);
        //});
        //
        //socket.on('room create_room', function (opts) {
        //    init.engine.room.create_room(socket, opts);
        //});

    });

};


module.exports = init;