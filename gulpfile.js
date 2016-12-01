var gulp   = require('gulp');
var sass   = require('gulp-sass');
var minify = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('sass', function () {
    gulp.src('./app/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./app/css'));
});

gulp.task('minify', function () {
    gulp.src('./app/css/*.css')
        .pipe(minify({keepBreaks: true}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./app/css/'))
    ;
});

gulp.task('default', ['minify', 'sass'], function() {
  
});