var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var $g = require('gulp-load-plugins');

gulp.task('default', ['serve']);

gulp.task('serve', function () {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("**/*", browserSync.reload);
});