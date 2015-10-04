module.exports = (grunt) ->
	# config grunt
	config =
		coffee:
			compile:
				files:
					'public/js/client_utils.js': 'public/js/client_utils.coffee'
					'public/js/first_page.js': 'public/js/first_page.coffee'
					'public/js/games_page.js': 'public/js/games_page.coffee'
					'public/js/init.js': 'public/js/init.coffee'
					'core/utils/templates.js': 'core/utils/templates.coffee'
					'core/datadb/datadb.js': 'core/datadb/datadb.coffee'
					'core/datadb/db_conn.js': 'core/datadb/db_conn.coffee'
					'core/datadb/models_schema.js': 'core/datadb/models_schema.coffee'
					'core/engine/engine.js': 'core/engine/engine.coffee'
				options:
					bare: true
		sass:
			dist:
				options:
					noCache: true
				files:
					'public/css/first-page.css': 'public/css/first-page.sass'
					'public/css/games-page.css': 'public/css/games-page.sass'
					'public/css/simple-sidebar.css': 'public/css/simple-sidebar.sass'

		watch:
			coffee:
				files: ['**/*.coffee']
				tasks: ['newer:coffee']
			sass:
				files: ['**/*.sass']
				tasks: ['newer:sass']
	grunt.initConfig(config)

	# load tasks
	grunt.loadNpmTasks('grunt-contrib-coffee')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-newer')
	grunt.loadNpmTasks('grunt-contrib-sass')

	# register tasks
	grunt.registerTask('default', ['watch'])
	grunt.registerTask('init', ['coffee', 'sass'])
