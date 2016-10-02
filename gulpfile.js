const gulp = require('gulp');
const util = require('gulp-util');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

const del = require('del');
const path = require('path');

const BUILD_PATH = './www';
const SOURCE_PATH = './app/';

const paths = {
    js: 	 path.join(SOURCE_PATH, '**/*.js'),
    css:     path.join(SOURCE_PATH, '**/*.css'),
    html:    path.join(SOURCE_PATH, '**/*.html'),
    assets:  path.join(SOURCE_PATH, 'assets/**/*'),
    lib:     path.join(SOURCE_PATH, 'lib/**/*'),
};

// Очистка выходной директории
gulp.task('clean', function (callback) {
	del.sync(BUILD_PATH, callback);
});

// Копирует manifest.json как есть
gulp.task('ionic', () => gulp.src(path.join(SOURCE_PATH, 'manifest.json')).pipe(gulp.dest(BUILD_PATH)));
// Копирует папку lib как есть
gulp.task('lib', () => gulp.src(paths.lib).pipe(gulp.dest(path.join(BUILD_PATH, 'lib'))));
// Копирует все файлы .html как есть
gulp.task('html', () => gulp.src(paths.html).pipe(gulp.dest(BUILD_PATH)));

gulp.task('css', () => {
	gulp.src(paths.css)
		.pipe(concat('style.css'))
		.pipe(gulp.dest(BUILD_PATH));
});

gulp.task('js', () => {
    let babelPipe = babel({
        presets: ['es2015']
    });
    babelPipe.on('error', (e) => {
    	util.log(util.colors.red(e.name), e.message);
    	babelPipe.end();
    });
    // Игнорируем lib
    gulp.src([paths.js, '!' + paths.lib])
    	.pipe(sourcemaps.init())
    	.pipe(babelPipe)
    	.pipe(concat('app.js'))
    	.pipe(sourcemaps.write('.'))
    	.pipe(gulp.dest(BUILD_PATH));
});

gulp.task('default', ['clean', 'ionic', 'lib', 'html', 'css', 'js']);

gulp.task('watch', () => {
	let options = { cwd: './' };
	gulp.watch([paths.html], options, ['html']);
	gulp.watch([paths.css], options, ['css']);
	gulp.watch([paths.js], options, ['js']);
});