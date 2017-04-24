let gulp = require('gulp');
let del = require('del');

gulp.task('clean:output_folder', function () {
    return del([
        'output/*',
    ]);
});

gulp.task('default', ['clean:output_folder']);