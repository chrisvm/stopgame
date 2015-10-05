DataDB = require('../datadb/datadb')
utils = require('./engine_utils')
room =
	'engine': null
	'datadb': new DataDB

room.all_rooms = (socket, opts) ->
	# get all rooms
	room.datadb.models.Room.find (err, rooms) ->
		if err
			return console.error(err)
		ret = []
		index = 0
		while index < rooms.length
			ret.push rooms[index].getRef()
			index++
		resp =
			'status': utils.StatusCode()
			'rooms': ret
		socket.emit 'room all_rooms_response', resp
		return
	return

room.create_room = (socket, opts) ->
	# get creator user
	user = room.datadb.models.User.findOne { 'username': opts.username }, (err, user) ->
		if err
			socket.send 'room create_room_response',
				'status': utils.StatusCode(type: 500)
				'room': null
			return console.error(err)
		# create the room
		room_init =
			'name': opts.room_name
			'created_by': [ user ]
			'users': []
			'ready': []
			'state': [ {
				'current_letter': ''
				'running': false
			} ]
			'num_players': 0
		new_room = new (room.datadb.models.Room)(room_init)
		new_room.save()
		resp =
			'status': utils.StatusCode()
			'room': new_room.getRef()
		socket.send 'room create_room_response', resp
		return
	return
