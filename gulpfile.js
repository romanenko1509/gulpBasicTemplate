const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const del = require('del');

// Name of workspace folders
const developmentDir = './development/';
const productionDir = './production/';

function gulpSass (done) {
	gulp.src(developmentDir + 'sass/**/*.sass')
		.pipe(sass({
			errorLogToConsole: true,
			outputStyle: 'compressed'
		}))
		.on('error', console.error.bind(console))
		.pipe(rename({suffix: '.min'}))
		.pipe( gulp.dest(developmentDir + 'css/') );
	done();
}

function sync (done) {
	browserSync.init({
		server: {
			baseDir: developmentDir
		},
		port: 3000,
		notify: false
	})
	done();
}

function syncReload (done) {
  browserSync.reload();
  done();
}

function watch () {
	gulp.watch(developmentDir + "sass/**/*", gulpSass);
	gulp.watch(developmentDir + "**/*", syncReload);
}

function minJs (done) {
	return pipeline(
		gulp.src(developmentDir + 'libs/js/*.js'),
		uglify(),
		rename({suffix: '.min'}),
		gulp.dest(productionDir + 'libs/js/')
	);
	done();
}

function imgOptimize (done) {
	gulp.src(developmentDir + 'img/*')
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.jpegtran({progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: false}
				]
			})
		]))
		.pipe(gulp.dest(productionDir + 'img/'))
	done();
}

function clean (done) {
	return del(productionDir);
	done();
}

function copyFiles (done) {
	gulp.src(developmentDir + '*.html')
		.pipe(gulp.dest(productionDir))
	gulp.src(developmentDir + 'css/fonts/*')
		.pipe(gulp.dest(productionDir + 'css/fonts/'))
	gulp.src(developmentDir + 'css/*.css')
		.pipe(gulp.dest(productionDir + 'css/'))
	gulp.src([developmentDir + 'libs/**/*', '!' + developmentDir + 'libs/js/**/*'])
		.pipe(gulp.dest(productionDir + 'libs/'))
	done();
}

gulp.task(sync);
gulp.task(clean);
gulp.task(copyFiles);
gulp.task(minJs);
gulp.task(imgOptimize);
gulp.task('default', gulp.series(sync, watch));
gulp.task('build', gulp.series(clean, copyFiles, minJs, imgOptimize));