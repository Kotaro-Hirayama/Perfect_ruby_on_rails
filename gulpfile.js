var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var jshint = require('gulp-jshint');
var del = require('del');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var please = require('gulp-pleeease');

// dev //////////////////////////////////////////////////////////////////////////////////////
gulp.task('browserSync', function() {
  return browserSync.init(null, {
    proxy: 'localhost:3000',
    notify: false
  });
});


gulp.task('watch', function() {
  gulp.watch(['app/**/*'], browserSync.reload);
});
gulp.task('default', ['browserSync', 'watch']);
