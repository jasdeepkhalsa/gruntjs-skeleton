# Grunt.js Skeleton #

Get up and running with Grunt fast with the **Grunt.js Skeleton**!

Grunt.js is a fantastic tool to automate JavaScript linting, concatenation and minification of JavaScript and CSS files.

This repository includes:
* Grunt.js v0.4.1 - http://gruntjs.com/
* QUnit v1.11.0 - http://qunitjs.com/
* jQuery v1.9.1 - http://jquery.com/

## Pre-requisites ##
1. You will need to have a web server running on your machine e.g. XAMPP
2. You will need to have access to the command-line, for Linux/Max a Terminal or on Windows it will be a command prompt (`cmd`)
3. You will need to have git installed: http://git-scm.com/downloads
4. You will need to have node.js installed: http://nodejs.org/

## Installation ##
_Do the following installation in the folder accessible by your local webserver at http://localhost/_

Just use `git` to clone the ssh version:

    git clone git@github.com:jasdeepkhalsa/gruntjs-skeleton.git

**Or** use `git` to clone the https version:

	git clone https://github.com/jasdeepkhalsa/gruntjs-skeleton.git

**Or** download the .zip archive:

	https://github.com/jasdeepkhalsa/gruntjs-skeleton/archive/master.zip

_Now you should have a folder called "gruntjs-skeleton" accessible from http://localhost/gruntjs-skeleton/_

## Setup ##
_Make sure you are in the root of your application for all the following steps, using 'cd' to navigate on the command line to your "gruntjs-skeleton" folder_

### 1. Uninstall any previous versions of Grunt.js ###

`npm uninstall -g grunt`

### 2. Reinstall the new Grunt Command Line Interface (CLI) ###

`npm install -g grunt-cli`

### 3. Install the packages required by Grunt ###

`npm install`

## Running Grunt ##

Now you can run grunt with the following command in the root of your application:

`grunt`

The result should be something like:

	Running "jshint:files" (jshint) task
	
	2 files lint free.
	
	Running "concat:dist" (concat) task File "js/concat.js" created.
	
	Running "mincss:compress" (mincss) task
	
	Destination not written because minified CSS was empty.
	
	Done, without errors.

Please note a few things:
* `jshint` can cause a lot of issues, I would recommend using it only on JavaScript files you yourself have created and want to test. In which case you can update the jshint `files:` array.
* `qunit` requires some setup so you can remove it for now if you're not interested in unit testing. If you are, read more documentation here: https://npmjs.org/package/grunt-contrib-qunit. And you will probably want to add the qunit task back into default as follows: `grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'mincss']);`
* Full documentation is available on the Grunt website here: http://gruntjs.com/getting-started
* Detailed information on upgrading from Grunt 0.3.x to Grunt 0.4.x is available here: http://gruntjs.com/upgrading-from-0.3-to-0.4

## Author & Version ##
v0.0.1 by Jasdeep Khalsa

## Contact ##
* Email: jasdeep {at} simplyspiritdesign {dot} com
* Twitter: [@JasdeepKhalsa1](http://twitter.com/@JasdeepKhalsa1)
