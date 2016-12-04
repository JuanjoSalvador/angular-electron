var gulp   = require('gulp');
var sass   = require('gulp-sass');
var minify = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
    gulp.src('./app/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(rename({
          suffix: '.min'
      }))
      .pipe(gulp.dest('./app/css'));
});


// Uncomment if you're not using SASS

/*gulp.task('minify', function () {
    gulp.src('./app/css/*.css')
        .pipe(minify({keepBreaks: true}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./app/css/'))
    ;
});*/

// Add minify here if you're using standard CSS instead of SASS
gulp.task('default', ['sass'], function() {
  
});
