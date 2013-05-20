module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		jshint : {
			files : ['Gruntfile.js', 'js/main.js'],
			options : {
				validthis : true,
				laxcomma : true,
				laxbreak : true,
				browser : true,
				eqnull : true,
				debug : true,
				devel : true,
				boss : true,
				expr : true,
				asi : true,
				globals : {
					jQuery : true
				}
			}
		},
		qunit : {
			all : {
				options : {
					urls : ['http://localhost/tests/index.html']
				}
			}
		},
		concat : {
			dist : {
				src : ['js/jquery-1.9.1.min.js', 'js/main.js'],
				dest : 'js/concat.js'
			}
		},
		min : {
			dist : {
				src : ['js/concat.js'],
				dest : 'js/main.min.js'
			}
		},
		mincss : {
			compress : {
				files : {
					"css/main.min.css" : ['css/main.css']
				}
			}
		}
	});

	// Default task.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-mincss');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('test', ['jshint', 'qunit']);
	grunt.registerTask('default', ['jshint', 'concat', 'mincss']);

}; 