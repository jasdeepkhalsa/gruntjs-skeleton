# Grunt.js Skeleton [![Build Status](https://travis-ci.org/jasdeepkhalsa/gruntjs-skeleton.svg)](https://travis-ci.org/jasdeepkhalsa/gruntjs-skeleton)

Get up and running with Grunt fast with the **Grunt.js Skeleton**!

Grunt.js is a fantastic tool to automate JavaScript linting, concatenation and minification of JavaScript and CSS files.

This repository includes:
* Grunt.js v1.x - http://gruntjs.com/
* QUnit v1.x - http://qunitjs.com/
* jQuery v1.x - http://jquery.com/

## Pre-requisites ##
1. You will need to have access to the command-line, for Linux/Mac a Terminal or on Windows it will be a command prompt (`cmd`)
2. You will need to have git installed: http://git-scm.com/downloads
3. You will need to have node.js installed: http://nodejs.org/

## Installation ##
Just use `git` to clone the ssh version:

    git clone git@github.com:jasdeepkhalsa/gruntjs-skeleton.git

**Or** use `git` to clone the https version:

	git clone https://github.com/jasdeepkhalsa/gruntjs-skeleton.git

**Or** download the .zip archive and unzip it to the folder `gruntjs-skeleton`:

	https://github.com/jasdeepkhalsa/gruntjs-skeleton/archive/master.zip

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
    File js/main.min.js.map created (source map).
    File js/main.min.js created: 293.5 kB → 100.76 kB
    >> 1 sourcemap created.
    >> 1 file created.

    Running "cssmin:compress" (cssmin) task
    >> 1 file created. 1.09 kB → 758 B

    Done.

For running a server, simply run:

`grunt server`

And the previous `grunt` task will be run as well as a server to view your app at `http://0.0.0.0:9001`

For testing with `jshint` and `qunit` only, use:

`grunt test`

The result should be something like:

    Running "connect:test" (connect) task
    Started connect web server on http://localhost:9000

    Running "jshint:files" (jshint) task
    >> 2 files lint free.

    Running "qunit:all" (qunit) task
    Testing http://0.0.0.0:9000/tests/index.html .OK
    >> 1 assertions passed (22ms)

    Done.

Please note a few things:
* `bower` is available at `./node_modules/.bin/bower`. Even if you have bower installed globally, you should use this local bower for your project. If you want to see what packages it's already installed use the command: `./node_modules/.bin/bower list --paths`.
* `jshint` can cause a lot of issues, I would recommend using it only on JavaScript files you yourself have created and want to test. In which case you can update the `.jshintrc` options which should be in valid JSON only
* `uglify` has a lot of options so please check the full list here: https://github.com/gruntjs/grunt-contrib-uglify
* `qunit` requires some setup so you can remove it for now if you're not interested in unit testing. If you are, read more documentation here: https://npmjs.org/package/grunt-contrib-qunit.
* Full documentation is available on the Grunt website here: http://gruntjs.com/getting-started
* Detailed information on upgrading from Grunt 0.3.x to Grunt 0.4.x is available here: http://gruntjs.com/upgrading-from-0.3-to-0.4

## Change logs ##
* 0.1.0
  * Upgraded Grunt.js and associated libraries to 1.x
* 0.0.6
  * Now using `bower` for front-end package management, therefore the libraries in this repo should now upgrade automatically as new packages are released
  * Included a server so a user does not need to setup or download apache/xampp anymore. Just run `grunt server` and you should be good!
  * No longer opinionated about jshint settings, which have been abstracted out into a `.jshintrc` file
  - Removed the output files produced by grunt 
* 0.0.5
	* Upgraded libraries to:
		* Grunt.js v0.4.4
		* jQuery v1.11.1
		* QUnit v1.14.0
	* Upgraded Grunt.js plugins to:
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

## Author ##
Jasdeep Khalsa

## Contact ##
* Email: jasdeep {at} simplyspiritdesign {dot} com
* Twitter: [@JasdeepKhalsa1](http://twitter.com/@JasdeepKhalsa1)
