module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// JS TASKS ================================================================
	    // check all js files for errors
	    jshint: {
	      all: ['public/src/js/**/*.js'] 
	    },
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'public/src/js/**/*.js',
				dest: 'public/dist/js/<%= pkg.name %>.min.js'
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
					compass: true
				},
				files: {
					"public/dist/style/dist.css": "public/src/style/**/*.scss"
				}
			}
		},
		watch: {
			scripts: {
				files: ['public/src/**/*'],
				tasks: ['jshint', 'sass', 'uglify'],
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

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-bower-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
 	grunt.loadNpmTasks('grunt-nodemon');
 	grunt.loadNpmTasks('grunt-concurrent');

	// Default task(s).
	grunt.registerTask('default', ['bower_concat', 'concurrent']);
	grunt.registerTask('prod', ['bower_concat', 'jshint', 'uglify', 'less']);

};