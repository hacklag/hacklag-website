var paths = require('./_common')().paths,
  gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant');

module.exports = function() {
  return gulp.src(paths.images)
  .pipe(imagemin({
    optimizationLevel: 3,
    progressive: true,
    use: [pngquant()]
  }))
  .pipe(gulp.dest('dist/img'));
};

module.exports.dependencies = ['clean'];
