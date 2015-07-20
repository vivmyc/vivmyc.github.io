var gulp = require('gulp');
var dest = require('gulp-dest');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');

gulp.task('default', ['scripts', 'styles']);

gulp.task('scripts', function() {
	gulp.src('views/js/*.js')
		.pipe(dest('dist', {ext: '.js'}))
		.pipe(uglify())
		.pipe(gulp.dest('./'));
});

gulp.task('styles', function() {
	gulp.src('views/css/*.css')
		.pipe(dest('dist', {ext: '.css'}))
		.pipe(minifyCSS())
		.pipe(gulp.dest('./'));
});

