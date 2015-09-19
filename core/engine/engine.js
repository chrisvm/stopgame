/** engine.js
 * Contains the engine container module
 */
var init = require('./engine_init');

// set the engine modules
var engine = {};

// init module
engine.init = init;
engine.init.engine = engine;

module.exports = engine;


