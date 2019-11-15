var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('styles', function() {
    return gulp.src('index.scss')
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('public'));
})


gulp.task('assets', function() {
    return gulp
        .src('assets/*')
        .pipe(gulp.dest('public'));

})

gulp.task('scripts', function() {
        return browserify('./src/index.js')
            .transform(babel)
            .bundle()
            .pipe(source('index.js'))
            .pipe(rename('app.js'))
            .pipe(gulp.dest('public'));
    })
    //gulp.task('default', ['styles', 'assets'])

gulp.task('default', gulp.parallel('styles', 'assets', 'scripts'))