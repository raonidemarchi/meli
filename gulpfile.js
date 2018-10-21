var gulp   	 			= require('gulp');
var htmlmin 			= require('gulp-html-minifier');
var babel 	 			= require('gulp-babel');
var concat 	 			= require('gulp-concat');
var rename 	 			= require('gulp-rename');
var merge 	 			= require('gulp-merge');
var cleanCSS 			= require('gulp-clean-css');
var gulp_remove_logging = require("gulp-remove-logging");

// JS files
var dest = 'dist/';

gulp.task('html', () => {
	gulp.src('index-prod.html')
		.pipe(htmlmin({ collapseWhitespace: true, removeComments: true, processScripts: ['text/template'] }))
		.pipe(rename('index.html'))
		.pipe(gulp.dest(dest))
});

gulp.task('js', () => {
    return merge(
			gulp.src(['assets/js/jquery-3.3.1.min.js', 'assets/js/underscore-min.js', 'assets/js/backbone-min.js']),
			gulp.src(['app/*.js', 'app/**/*.js']).pipe(gulp_remove_logging())
		)
		.pipe(concat('js/all.min.js'))
		.pipe(babel({
			presets: ['minify']
		}))
		.pipe(gulp.dest(dest));
});

gulp.task('css', () => {
	return gulp.src('assets/css/style.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(rename('css/all.min.css'))
		.pipe(gulp.dest(dest));
});

gulp.task('font', () => {
	return gulp.src('assets/font/**')
		.pipe(gulp.dest(dest + 'font/'));
});

gulp.task('img', () => {
	return gulp.src('assets/img/**')
		.pipe(gulp.dest(dest + 'img/'));
});

gulp.task('map', () => {
	return gulp.src('assets/js/*.map')
		.pipe(gulp.dest(dest + 'js/'));
});

gulp.task('dist', ['html', 'js', 'css', 'font', 'img', 'map']);