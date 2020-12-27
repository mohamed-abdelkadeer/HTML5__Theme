var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch');
    
    
// HTML Task
gulp.task('html', function () {
    return gulp.src('build/html/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('./'))
        .pipe(notify('HTML Task Done'))
})

// CSS Task
gulp.task('css', function () {
    return gulp.src('build/css/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error',sass.logError))
        . pipe(autoprefixer('last 2 versions'))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(notify('CSS Task Done'))
})

// JS Task
gulp.task('js', function () {
    return gulp.src('build/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(notify('JS Task Done'))
})

// Watch Task
gulp.task('watch', function () {
    gulp.watch('build/html/**/*.pug', ['html']);
    gulp.watch('build/css/**/*.scss', ['css']);
    gulp.watch('build/js/*.js', ['js']);
}) 