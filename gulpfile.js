'use strict';

const gulp = require('gulp');
const del = require('del');
const exec = require('child_process').exec;
const open = require('gulp-open');

gulp.task('clean', function () {
    return del([
        'output/*',
    ]);
});

gulp.task('server', function (cb) {
		exec('selenium-standalone start', function (err, stdout, stderr) {
				console.log(stdout);
				console.log(stderr);
				cb(err);
		});
});

gulp.task('default', function () {
		console.log('This is gulp, hi!');
});

gulp.task('preparation', ['clean', 'server']);

gulp.task('open', function(){
    let options = {
        app: 'chrome'
    };
    gulp.src('output/*.html')
        .pipe(open(options));
});