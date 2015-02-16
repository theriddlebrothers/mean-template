module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// JS TASKS ================================================================
		// check all js files for errors
		jshint: {
		  all: ['public/src/js/**/*.js'] 
		},
		ngmin: {
			controllers: {
				src: ['public/src/js/controllers/*.js'],
				dest: 'public/dist/js/controllers.js'
			}
		},
		bower_concat: {
			all: {
				dest: 'public/dist/js/_bower.js',
				cssDest: 'public/dist/style/_bower.css',
				dependencies: {
				},
				bowerOptions: {
					relative: false
				}
			}
		},
		sass : {
			default : {
				options : {
					style: 'expanded',
					compass: false
				},
				files: {
					"public/dist/style/dist.css": "public/src/style/**/*.scss"
				}
			}
		},
		watch: {
			scripts: {
				files: ['public/src/**/*'],
				tasks: ['jshint', 'sass', 'ngmin'], //tasks: ['jshint', 'sass', 'uglify'], // uglify disabled for angular (look into ng-compatible uglify)
				options: {
				  spawn: false,
				}
			}
		},
		// watch our node server for changes
		nodemon: {
			default: {
				script: 'bin/www'
			}
		},

		// run watch and nodemon at the same time
		concurrent: {
				options: {
				logConcurrentOutput: true
			},
			tasks: ['nodemon', 'watch']
		}   
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-bower-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-ngmin');

	// Default task(s).
	grunt.registerTask('default', ['bower_concat', 'concurrent']);
	//grunt.registerTask('prod', ['bower_concat', 'jshint', 'uglify', 'less']);

};