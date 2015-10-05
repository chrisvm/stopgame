### engine.js
  Contains the engine container module
###

init = require('./engine_init')
user = require('./engine_user')
room = require('./engine_room')

# set the engine modules
engine = {}

# init module
engine.init = init
engine.init.engine = engine

# user module
engine.user = user
user.engine = engine

# room module
engine.room = room
room.engine = engine

module.exports = engine
