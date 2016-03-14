var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gulp = require('gulp');
var utilities = require('gulp-util');
var del = require('del');
var buildProduction = utilities.env.production;

gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/browser.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task("build", function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
});
