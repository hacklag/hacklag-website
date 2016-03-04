var rsync = require('gulp-rsync'),
  ENV = require('./_common')().ENV,
  gulp = require('gulp'),
  gutil = require('gulp-util');

module.exports = function() {
  var ec2 = {
    host: process.env.EC_HOSTNAME,
    username: process.env.EC_USERNAME,
    path: 'hacklag-dev'
  };

  if (ENV === 'production') {
    ec2.path = 'hacklag-prod';
  }

  var src = ['./dist/**', '!./dist/rev-manifest.json'];

  return gulp.src(src)
    .pipe(rsync({
      root: 'dist',
      username: ec2.username,
      hostname: ec2.host,
      destination: ec2.path,
      recursive: true,
      progress: true,
      incremental: true
    }, function(error, stdout, stderr, cmd) {
      gutil.log(stdout);
    }));
};

module.exports.dependencies = ['clean', 'build', 'revision-index'];
