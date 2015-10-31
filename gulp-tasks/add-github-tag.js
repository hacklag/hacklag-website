var version = require('./_common')().version,
    async   = require('async'),
    git     = require('gulp-git');

module.exports = function(cb) {
  async.series([
    function(callback) {
      git.exec({args: 'config --global user.email "ci@syncano.com"'}, callback);
    },

    function(callback) {
      git.exec({args: 'config --global user.name "CI"'}, callback);
    },

    function(callback) {
      gulp.src('./package.json')
          .pipe(git.commit('Version bump: ' + version.text))
          .on('finish', callback);
    },

    function(callback) {
      git.tag(version.text, 'Release ' + version.text, callback);
    },

    function(callback) {
      git.push('origin', version.text, callback);
    },

    function(callback) {
      git.push('origin', 'master', callback);
    },

    function(callback) {
      git.checkout('devel', callback);
    },

    function(callback) {
      git.merge('master', callback);
    },

    function(callback) {
      git.push('origin', 'devel', callback);
    }
  ], function(err) {
    if (err) throw err;
    cb();
  });
}