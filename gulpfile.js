'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    notify = require("gulp-notify"),
    plumber = require('gulp-plumber'),
    minify = require('gulp-minify'),
    babel = require('gulp-babel'),
    pug = require('gulp-pug');
    // watch = require('gulp-watch');

const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

const plugins = [
    autoprefixer({ browsers: AUTOPREFIXER_BROWSERS, flexbox: true }),
    cssnano()
];

// SCSS Dev
gulp.task('scss', gulp.series(function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass({ includePaths: ['node_modules/'] }))
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(notify("CSS Compilado!"));
}));

// JS Build
gulp.task('js', gulp.series(function () {
    return gulp.src('./src/js/*.js')
        .pipe(plumber())
        .pipe(babel({presets: ["babel-preset-es2015"]}))
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(notify("JS Compilado!"));
}));

// PUG Build
gulp.task('pug', gulp.series(function() {
    return gulp.src('src/pug/*.pug')
    .pipe(pug({
       doctype: 'html',
       pretty: true
    }))
    .pipe(gulp.dest('./'));
}));

gulp.task('watch', gulp.series( function () {
    gulp.watch("src/scss/**/*.scss", gulp.parallel( ['scss']));
    gulp.watch("src/js/*.js", gulp.parallel(['js']));
    gulp.watch("src/pug/*.pug",  gulp.parallel(['pug']));
}));

gulp.task('default', gulp.series(['scss', 'js']));