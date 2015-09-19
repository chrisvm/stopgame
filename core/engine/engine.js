/** engine.js
 * Contains the engine container module
 */
var init = require('./engine_init');
var user = require('./engine_user');

// set the engine modules
var engine = {};

// init module
engine.init = init;
engine.init.engine = engine;

// user module
engine.user = user;
user.engine = engine;

module.exports = engine;


