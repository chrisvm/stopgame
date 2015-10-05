StatusCode = (opts) ->
	standard =
		'code': 200
		'short': 'ALL_OK'

	if not opts?
		return standard

	switch opts.type
		when 'not', 300
			return {
				'code': 300
				'short': 'NOT_OK'
				'error': opts.error
			}
		when 400
			return {
				'code': 400
				'short': 'MISSING_OPTS'
				'error': opts.error
			}
		when 500
			return {
				'code': 500
				'short': 'ENGINE_ERROR'
				'error': opts.error
			}
		when 'ok', 200
			return standard
	return

module.exports = 'StatusCode': StatusCode
