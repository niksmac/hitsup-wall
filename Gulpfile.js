var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var input = './assets/**/*.scss';
var output = './assets';

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(output));
});


gulp.task('watch', function() {
  return gulp
    .watch(input, ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['sass', 'watch']);
