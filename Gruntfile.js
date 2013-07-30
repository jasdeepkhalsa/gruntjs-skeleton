module.exports = function(grunt) {

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
					urls : ['http://localhost/gruntjs-skeleton/tests/index.html']
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
					'js/main.min.js' : ['js/jquery-1.10.2.min.js', 'js/main.js']
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
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('test', ['jshint', 'qunit']);
	grunt.registerTask('default', ['jshint', 'uglify', 'cssmin']);
};
