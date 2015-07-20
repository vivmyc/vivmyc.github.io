var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');

// gulp.task('default', function() {
//   console.log ("Yea! I'm running Gulp :)")
// });

gulp.task('default', ['scripts', 'styles']);

gulp.task('scripts', function() {
	gulp.src('views/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('views/js/dist/'));
});

gulp.task('styles', function() {
	gulp.src('views/css/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('views/css/dist/'));
});

