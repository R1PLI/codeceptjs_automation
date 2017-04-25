let gulp = require('gulp');
let del = require('del');
let exec = require('child_process').exec;

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

