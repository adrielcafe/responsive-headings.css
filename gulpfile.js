var gulp = require('gulp');
var connect = require('gulp-connect');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');

gulp.task('server', ['minify'], function() {
  connect.server();
});

gulp.task('minify', function () {
  return gulp.src('./responsive-headings.css')
    .pipe(cssnano({discardComments: false}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./'));
});

gulp.task('default', ['server'], function(){
	gulp.watch('./responsive-headings.css', ['minify']);
});
