# Title

##### Short disciption

#### By Epicodus Lessons

## Description

This application is a demonstration of constructors and prototypes using JavaScript to create a list of destinations visited and unvisited.

## Setup

Install addressBook by cloning this repository.

* open empty project folder
* `rm -rf .git`
* `git init`
* follow package.jason prompts for name...
* add .js and -interface.js files
* include dependencies for each .js file in browser-interface.js
  - 'var obj_or_funct_name = require('./obj_or_funct_name.js').obj_or_funct_name;'
* `mkdir build/js`
* `npm install browserify --save-dev`
* `npm install browserify -g`
* `npm install gulp --save-dev`
* `npm install gulp -g`
* `touch js/gulpfile.js`
* include dependency in gulpfile.js
  - 'var gulp = require('gulp');'
* `npm install vinyl-source-stream --save-dev`
* include dependency in gulpfile.js
  - var browserify = require('browserify');
  - var source = require('vinyl-source-stream');
  - var utilities = require('gulp-util');
  - var del = require('del');
  - var buildProduction = utilities.env.production;


## Technologies Used

Application: JavaScript and jQuery
Testing:  Mocha and Chai

### Legal

Copyright (c) 2015 **Tyler and Michael**

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
