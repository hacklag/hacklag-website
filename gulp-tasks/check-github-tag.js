var version = require('./_common')().version,
    async  = require('async'),
    git    = require('gulp-git'),
    gutil  = require('gulp-util');

module.exports = function(cb) {
  async.series([
    function (callback) {
      git.fetch('origin', '', {args: '--tags'}, callback);
    },

    function (callback) {
      git.exec({args: 'tag -l "' + version.text + '"'}, function(err, stdout) {
        if (err) return callback(err);
        if (stdout.indexOf(version.text) > -1) {
          return callback(new gutil.PluginError('check-github-tag', 'Version "' + version.text +'" already exists.'))
        }

        callback();
      });
    }
  ], function(err) {
    if (err) throw err;
    cb();
  });
};
