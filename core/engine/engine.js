/** engine.js
 * Contains the engine container module
 */
var init = require('./engine_init');
var user = require('./engine_user');
var room = require('./engine_room');

// set the engine modules
var engine = {};

// init module
engine.init = init;
engine.init.engine = engine;

// user module
engine.user = user;
user.engine = engine;

// room module
engine.room = room;
room.engine = engine;

module.exports = engine;
