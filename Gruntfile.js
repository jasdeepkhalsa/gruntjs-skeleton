module.exports = function(grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		jshint : {
			files : ['Gruntfile.js', 'js/main.js'],
			options : {
				jshintrc: '.jshintrc',
				globals : {
					jQuery : true
				}
			}
		},
	  connect: {
	    test: {
	      options: {
	        port: 9000,
	        base: '.'
	      }
	    },
			server: {
				options: {
					port: 9001,
					base: '.'
				}
			}
	  },
		qunit : {
			all : {
				options : {
					urls : ['http://0.0.0.0:9000/tests/index.html']
				}
			}
		},
		uglify : {
			options : {
				mangle : {
					except : ['jQuery']
				}
			},
			my_target : {
				options: {
					sourceMap: 'js/main.min.map'
				},
				files : {
					'js/main.min.js' : ['bower_components/jquery/dist/jquery.js', 'js/main.js']
				}
			}
		},
		cssmin : {
			compress : {
				files : {
					"css/main.min.css" : ['css/main.css']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('test', ['connect:test', 'jshint', 'qunit']);
	grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);
	grunt.registerTask('server', ['default', 'connect:server:keepalive']);
};
