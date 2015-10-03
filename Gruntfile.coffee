module.exports = (grunt) ->

    # config grunt
    grunt.initConfig(
        coffee:
            compile:
                files:
                    'public/js/client_utils.js': 'public/js/client_utils.coffee'
                    'public/js/first_page.js': 'public/js/first_page.coffee'
                    'public/js/games_page.js': 'public/js/games_page.coffee'
                    'public/js/init.js': 'public/js/init.coffee'
                    'core/utils/templates.js': 'core/utils/templates.coffee'
    )

    # load tasks
    grunt.loadNpmTasks('grunt-contrib-coffee')

    # register tasks
    grunt.registerTask('default', ['coffee'])