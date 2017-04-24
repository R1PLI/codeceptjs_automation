let gulp = require('gulp');
let clean = require('gulp-clean');

gulp.task('default', function () {
    return gulp.src('./output')
        .pipe(clean({force: true}))
        .pipe(gulp.dest('dist'));
});