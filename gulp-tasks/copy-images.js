var paths = require('./_common')().paths,
  gulp = require('gulp'),
  imagemin = require('gulp-imagemin');

module.exports = function() {
  return gulp.src(paths.images)
  .pipe(imagemin({progressive: true}))
  .pipe(gulp.dest('dist/img'));
};

module.exports.dependencies = ['clean'];
