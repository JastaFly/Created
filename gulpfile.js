'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
    browserSync.watch('./src', browserSync.reload);
});
gulp.task('sass', function (done) {
    gulp.src("src/scss/style.scss")
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest("src/css/"))
    done();
});

gulp.task('mini', function(done) {
  gulp.src('src/js/script.js')
    .pipe(minify({
        ext:{
            min:'.min.js'
        }}))
    .pipe(gulp.dest('src/js/'))
    done();
});

gulp.task('copy', function (done) {
    gulp.src(["src/**", "!src/scss/*"])
        .pipe(gulp.dest("build/"));

    done();
})

gulp.task("build", gulp.series(
    "sass",
    "mini",
    "copy"
    
));

gulp.task('sass_watch', function () {
    gulp.watch('./src/scss/*.scss', gulp.parallel('sass'));
});

gulp.task('default', gulp.parallel('sass_watch', 'browser-sync'));