var async   = require('async'),
    gutil   = require('gulp-util'),
    git     = require('gulp-git'),
    _       = require('lodash'),
    request = require('superagent');

module.exports = function(cb) {
  var token = process.env.AHA_TOKEN;
  var account = process.env.AHA_ACCOUNT;

  if (!token) {
    throw new gutil.PluginError('changelog', '"AHA_TOKEN" env variable is required');
  }

  if (!account) {
    throw new gutil.PluginError('changelog', '"AHA_ACCOUNT" env variable is required');
  }

  async.waterfall([
    function (callback) {
      // Fetch tags from origin
      git.fetch('origin', '', {args: '--tags'}, callback);
    },

    function (callback) {
      // Grab list of tags
      git.exec({args: 'tag'}, function(err, stdout) {
        if (err) return callback(err);
        var tags = stdout.split('\n').slice(-3);
        callback(null, tags[0], tags[1]);
      });
    },

    function(start, end, callback) {
      // Parse git log in search of ticket numbers
      var range = start + '...' + end;
      var command = 'log ' + range + ' --grep="[[:alpha:]{5, 10}][-][[:digit:]]" --oneline --pretty=format:"%s"';
      var regex = /[A-Za-z]{5,10}-[\d]+/gm;
      git.exec({args: command}, function(err, stdout) {
        if (err) return callback(err);
        callback(null, _.uniq(stdout.match(regex)), end);
      });
    },

    function(tickets, tag, callback) {
      // Fetch tickets details from AHA
      async.mapLimit(tickets, 3, function(ticket, iteratorCallback) {
        gutil.log('[changelog]', 'Fetching details for ' + ticket);
        request
          .get('https://' + account + '.aha.io/api/v1/features/' + ticket)
          .set('Authorization', 'Basic ' + token)
          .end(function(err, response) {
            if (err || response.statusCode !== 200) {
              return iteratorCallback(err, {
                name: '',
                type: 'Other',
                resource: '',
                reference_num: ticket
              })
            }

            var feature = response.body.feature;
            iteratorCallback(null, {
              name: feature.name,
              type: feature.workflow_kind.name,
              reference_num: feature.reference_num,
              resource: feature.resource
            })
          });
      }, function(err, results) {
        callback(null, results, tag);
      });
    }
  ], function(err, tickets, tag) {
    if (err) throw err;

    var groupedTickets = _.reduce(tickets, function(result, value) {
      result[value.type] = result[value.type] || [];
      result[value.type].push('[' + value.reference_num + '] ' + value.name);
      return result;
    }, {});

    console.log('\n\nChangelog for version:', tag + ':\n');

    _.forEach(groupedTickets, function(changelog, type) {
      console.log(type + ':\n' + changelog.join('\n') + '\n\n');
    });

    cb();
  });
};
