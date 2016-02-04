require('gulp-task-loader')();

var gulp         = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    taskListing = require('gulp-task-listing');

// Add a task to render the output
gulp.task('help', taskListing.withFilters(null, '_common'));

gulp.task('copy', ['copy-index', 'copy-images', 'copy-css', 'copy-fonts', 'copy-js']);
gulp.task('serve', ['webpack-dev-server']);
gulp.task('build', ['webpack-build', 'revreplace']);
gulp.task('default', ['webpack-dev-server']);
gulp.task('deployment-master', gulpSequence(
  'publish',
  'clean',
  's3-cleanup'
));
gulp.task('deployment-devel', gulpSequence('publish', 'clean'));
gulp.task('deployment-branch', gulpSequence('publish-branch', 'clean'));
gulp.task('favicon', gulpSequence('generate-favicon', 'inject-favicon-markups'));
