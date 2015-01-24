var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var minifyImages = require('gulp-imagemin');

gulp.task('css', function () {
  return gulp.src('./src/css/*.css')
  .pipe(concat('style.css'))
  .pipe(autoprefixer())
  .pipe(minifyCSS())
  .pipe(gulp.dest('./dist/css/'));
});

gulp.task('html', function() {
  gulp.src('./src/*.html')
  .pipe(minifyHTML())
  .pipe(gulp.dest('./dist/'))
});

gulp.task('images', function() {
  gulp.src('./src/imgs/*')
  .pipe(minifyImages())
  .pipe(gulp.dest('./dist/imgs/'))
});

gulp.task('cname', function() {
  gulp.src('./src/CNAME')
  .pipe(gulp.dest('./dist/'))
});

gulp.task('default', ['css', 'html', 'images', 'cname']);
