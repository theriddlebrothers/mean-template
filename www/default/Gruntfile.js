module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// JS TASKS ================================================================
		// check all js files for errors
		jshint: {
		  all: ['public/src/js/**/*.js'] 
		},
		copy : {
			target : {
				expand: true,
				cwd: 'public/src/fonts/',
				src: '**',
				dest: 'public/dist/fonts/',
				flatten: true,
				filter: 'isFile',
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			default: {
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
					compass: false
				},
				files: {
					"public/dist/style/dist.css": "public/src/style/main.scss"
				}
			}
		},
		watch: {
			files: ['public/src/**/*'],
			tasks: ['jshint', 'copy', 'uglify', 'sass'],
			options: {
				spawn: false,
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
		},
		karma: {
			options: {
				configFile: 'test/unit/karma.conf.js',
			},
			unit: {
				singleRun: false
			}
		},
		protractor: {
			options: {
				configFile: "test/e2e/conf.js",
				// Task-specific options go here. 
				keepAlive: false,
				noColor: false
			},
			e2e: {
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-bower-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-protractor-runner');

	// Default task(s).
	grunt.registerTask('default', ['bower_concat', 'concurrent']);
	grunt.registerTask('test-unit', ['karma']);
	grunt.registerTask('test-e2e', ['protractor']);
	grunt.registerTask('prod', ['bower_concat', 'jshint', 'uglify', 'sass']);

};