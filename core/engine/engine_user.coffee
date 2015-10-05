DataDB = require('../datadb/datadb')
utils = require('./engine_utils')
user =
	'engine': null
	'datadb': new DataDB

user.auth_username = (socket, opts) ->
	datadb = user.datadb
	username = opts.username

    # get users
	datadb.models.User.findOne { 'username': username }, (err, user) ->
		# if error, send back error message
		if err
			response =
				status: utils.StatusCode(500)
				username: username
			socket.emit 'user auth_username_response', resp
			return console.error(err)

        # create respone status
		if user is null
			# create normal status code
			status = utils.StatusCode()

            # save the new user
			new_user = new (datadb.models.User)('username': username)
			new_user.save()
		else
			# send error status code
			status = utils.StatusCode(type: 300)

        # send response
		response = 
			'status': status
			'username': username

		socket.emit 'user auth_username_response', response
		return

	return

module.exports = user
