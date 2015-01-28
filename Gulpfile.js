var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var minifyImages = require('gulp-imagemin');
var inlinesource = require('gulp-inline-source');

gulp.task('css', function () {
  return gulp.src('./src/css/*.css')
  .pipe(concat('style.css'))
  .pipe(autoprefixer())
  .pipe(minifyCSS())
  .pipe(gulp.dest('./dist/css/'));
});

gulp.task('html', ['css'], function() {
  gulp.src('./src/*.html')
  .pipe(inlinesource({rootpath: './dist'}))
  .pipe(minifyHTML({comments: true}))
  .pipe(gulp.dest('./dist/'))
});

gulp.task('images', function() {
  gulp.src('./src/imgs/*')
  .pipe(minifyImages({
    optimizationLevel: 7,
    progressive: true,
    interlaced: true
  }))
  .pipe(gulp.dest('./dist/imgs/'))
});

gulp.task('cname', function() {
  gulp.src('./src/CNAME')
  .pipe(gulp.dest('./dist/'))
});

gulp.task('default', ['html', 'images', 'cname']);
