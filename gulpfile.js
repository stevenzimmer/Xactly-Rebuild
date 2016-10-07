

// Include Gulp

var gulp 		 = require('gulp'),

	// Include Gulp Plugins
	
	uglify 		 = require('gulp-uglify'),
	concat		 = require('gulp-concat'),
	plumber		 = require('gulp-plumber'),
	prefix		 = require('gulp-autoprefixer'),
	rename		 = require('gulp-rename'),
	browserSync	 = require('browser-sync'),
	reload		 = browserSync.reload,
	cssmin		 = require('gulp-cssmin');


// Scripts Task
// Uglifies and concatenates JS Files

gulp.task('scripts', function() {
	return gulp.src('js/*.js')
		.pipe(plumber())
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
		.pipe(reload({stream:true}));
});



// Styles Task
// Uglifies
gulp.task('styles', function() {
	return gulp.src('css/*.css')
		.pipe(plumber())
		.pipe(prefix('last 2 versions'))
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist'))
		.pipe(reload({stream:true}));
});


gulp.task('html', function() {
	gulp.src('*.html')
		.pipe(plumber())
		.pipe(reload({stream:true}));
});


gulp.task('browser-sync', function() {
	browserSync({
		server:{
			baseDir:'./'
		}
	});
});

// Watch Task
// Watches JS
gulp.task('watch', function() {

	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('css/*.css', ['styles']);
	gulp.watch('*.html', ['html']);

});


gulp.task('default', ['scripts', 'styles', 'html', 'browser-sync', 'watch']);


