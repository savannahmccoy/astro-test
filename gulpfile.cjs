const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));

// import gulp from 'gulp';
// import sass from 'node-sass';

// Define the source and destination paths
const sourcePath = 'src/scss/**/*.scss'; // adjust this to your source folder
const destPath = 'dist/style.css'; // adjust this to your destination folder

// Task to compile Sass to CSS
gulp.task('sass', function () {
  return gulp
    .src(sourcePath)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(destPath));
});

// Watch for changes in SCSS files
gulp.task('watch', function () {
  gulp.watch(sourcePath, gulp.series('sass'));
});
