var gulp = require('gulp');
var bump = require('gulp-bump');

module.exports = function(){
  gulp.src('./package.json')
  .pipe(bump())
  .pipe(gulp.dest('./'));
};
