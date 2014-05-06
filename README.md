# Grunt.js Skeleton #

Get up and running with Grunt fast with the **Grunt.js Skeleton**!

Grunt.js is a fantastic tool to automate JavaScript linting, concatenation and minification of JavaScript and CSS files.

This repository includes:
* Grunt.js v0.4.4 - http://gruntjs.com/
* QUnit v1.14.0 - http://qunitjs.com/
* jQuery v1.11.1 - http://jquery.com/

## Pre-requisites ##
1. You will need to have a web server running on your machine e.g. XAMPP, Apache
2. You will need to have access to the command-line, for Linux/Mac a Terminal or on Windows it will be a command prompt (`cmd`)
3. You will need to have git installed: http://git-scm.com/downloads
4. You will need to have node.js installed: http://nodejs.org/

## Installation ##
_Do the following installation in the folder accessible by your local webserver at http://localhost/_

Just use `git` to clone the ssh version:

    git clone git@github.com:jasdeepkhalsa/gruntjs-skeleton.git

**Or** use `git` to clone the https version:

	git clone https://github.com/jasdeepkhalsa/gruntjs-skeleton.git

**Or** download the .zip archive and unzip it to the folder `gruntjs-skeleton`:

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
	>> 2 files lint free.

	Running "uglify:my_target" (uglify) task
	File js/main.min.map created (source map).
	File js/main.min.js created: 95.85 kB → 96.57 kB

	Running "cssmin:compress" (cssmin) task
	File css/main.min.css created: 1.09 kB → 758 B

	Done, without errors.

For only running `qunit` unit tests and `jshint` use the following command:

`grunt test`

The result should be something like:

	Running "jshint:files" (jshint) task
	>> 2 files lint free.
	
	Running "qunit:all" (qunit) task
	Testing http://localhost/gruntjs-skeleton/tests/index.html .OK
	>> 1 assertions passed (17ms)
	
	Done, without errors.
	
_If QUnit fails, please ensure your local server (most likely Apache) is running and that the URL http://localhost/gruntjs-skeleton/tests/index.html is accessible from your browser_

Please note a few things:
* `jshint` can cause a lot of issues, I would recommend using it only on JavaScript files you yourself have created and want to test. In which case you can update the jshint `files:` array.
* `uglify` has a lot of options so please check the full list here: https://github.com/gruntjs/grunt-contrib-uglify
* `qunit` requires some setup so you can remove it for now if you're not interested in unit testing. If you are, read more documentation here: https://npmjs.org/package/grunt-contrib-qunit.
* Full documentation is available on the Grunt website here: http://gruntjs.com/getting-started
* Detailed information on upgrading from Grunt 0.3.x to Grunt 0.4.x is available here: http://gruntjs.com/upgrading-from-0.3-to-0.4

## Change logs ##
* 0.0.5
- Upgraded libraries to:
	* Grunt.js v0.4.4
	* jQuery v1.11.1
	* QUnit v1.14.0
- Upgraded Grunt.js plugins to:
    * grunt-contrib-cssmin: 0.9.0
    * grunt-contrib-jshint: 0.10.0
    * grunt-contrib-watch: 0.6.1
    * grunt-contrib-qunit: 0.4.0
    * grunt-contrib-uglify: 0.4.0
- TODO: Look into Bower for package management
* 0.0.4 - Removed concat plugin and used uglify's built-in concat functionality instead. Added JavaScript sourcemap support and an index.html file based on HTML5 Boilerplate for testing JavaScript/jQuery. Upgraded to the latest jQuery v1.10.2 & QUnit v1.12.0 libraries.
* 0.0.3 - Fixed bug of CSS minification not working for multiple CSS files and throwing error "Warning: Object #<Object> has no method 'expandFiles'". Updated CSS plugin from mincss to cssmin and to version 0.4.0.
* 0.0.2 - Fixed bug of no minification of JavaScript files. Now using Uglify plugin for minification. Added css reset by Eric Meyer so that Grunt minifies the css rather than throwing errors. Updated documentation.
* 0.0.1 - Initial commit

## Author & Version ##
v0.0.5 by Jasdeep Khalsa

## Contact ##
* Email: jasdeep {at} simplyspiritdesign {dot} com
* Twitter: [@JasdeepKhalsa1](http://twitter.com/@JasdeepKhalsa1)
