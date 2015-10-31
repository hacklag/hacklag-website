var async      = require('async'),
    gutil      = require('gulp-util'),
    google     = require('googleapis'),
    googleAuth = require('google-auth-library'),
    version    = 'v' + require('../package.json').version,
    fs         = require('fs'),
    path       = require('path'),
    _          = require('lodash');

module.exports = function(cb) {
  if (process.env.CI && nodeIndex.toString() !== '1') {
    gutil.log('Exit');
    return cb();
  }

  var nodeIndex = process.env.CIRCLE_NODE_INDEX || '',
    resolutions = ['360x640', '768x1024', '1280x1024'],
    files = {},
    tokens = {
      clientId: process.env.GD_CLIENT_ID,
      clientSecret: process.env.GD_CLIENT_SECRET,
      access_token: process.env.GD_ACCESS_TOKEN,
      refresh_token: process.env.GD_REFRESH_TOKEN
    },
    folders = {
      invision: '0B-nLxpmereQIfkV2X1gxQkNtbXlwbHlCZE1RYlpoMFY1OGlaM1ppUkMybnU5bFllRENVZzg',
      latest: '0B-nLxpmereQIfkwwekk3b3I0dUJMdnZjS2Q4MTVqQnRublJVemlPZEdHVHdEaUlTWjIzdlk',
      latestResolutions: null,
      versionResolutions: []
    };

  var auth = new googleAuth();
  var oauth2Client = new auth.OAuth2(tokens.clientId, tokens.clientSecret, "urn:ietf:wg:oauth:2.0:oob");

  if (!tokens.clientId) {
    throw new gutil.PluginError('upload-screenshots', '"GD_CLIENT_ID" env variable is required');
  }

  if (!tokens.clientSecret) {
    throw new gutil.PluginError('upload-screenshots', '"GD_CLIENT_SECRET" env variable is required');
  }

  if (!tokens.access_token) {
    throw new gutil.PluginError('upload-screenshots', '"GD_ACCESS_TOKEN" env variable is required');
  }

  if (!tokens.refresh_token) {
    throw new gutil.PluginError('upload-screenshots', '"GD_REFRESH_TOKEN" env variable is required');
  }

  oauth2Client.setCredentials({
    access_token: tokens.access_token,
    refresh_token: tokens.refresh_token,
    token_type: 'Bearer',
    expiry_date: 1440513379139
  });

  var drive = google.drive({version: 'v2', auth: oauth2Client});

  /* CREATING AND GETTING VERSION FOLDER */

  function checkVersionFolder(callback) {
    // If actual version folder exist get it otherwise create it and get it
    drive.files.list({
      q: "fullText contains '" + version + "' and '" + folders.invision + "' in parents and trashed = false"
    }, function(err, response) {
      if (err) return callback(err);
      if (response.items.length === 0) {
        createVersionFolder(callback);
      } else {
        getVersionResolutionFolders(response, callback);
      }
    });
  }

  function createVersionFolder(callback) {
    gutil.log('Creating version folder...');

    drive.files.insert({
      resource: {
        title: version,
        mimeType: 'application/vnd.google-apps.folder',
        parents: [{id: folders.invision}]
      }
    }, function(err, _versionFolder) {
      if (err) return callback(err);
      async.each(resolutions, function(resolution, stepCallback) {
        drive.files.insert({
          resource: {
            title: resolution,
            mimeType: 'application/vnd.google-apps.folder',
            parents: [{id: _versionFolder.id}]
          }
        }, function(err, versionResolutionFolder) {
          if (err) return callback(err);
          folders.versionResolutions.push(versionResolutionFolder);
          stepCallback();
        })
      }, function(err) {
        if (err) return callback(err);
        callback();
      });
    });
  }

  function getVersionResolutionFolders(response, callback) {
    gutil.log('Saving version folder ID...');
    drive.files.list({
      q: "mimeType = 'application/vnd.google-apps.folder' and '" + response.items[0].id + "' in parents and" +
      " trashed = false"
    }, function(err, _versionResolutionFolders) {
      folders.versionResolutions = _versionResolutionFolders.items;
      callback();
    });
  }

  /* GETTING FILES LISTS */

  function getFilesLists(callback) {
    // Get list of files from disc, GoogleDrive latest and version folder
    async.parallel({
      local: getLocalFilesList,
      latest: getLatestFolderFilesList,
      version: getVersionFolderFilesList
    }, function(err, _filesLists) {
      if (err) return callback(err);
      files = _filesLists;
      callback()
    })
  }

  function getLocalFilesList(callback) {
    gutil.log('Creating screenshots list...');
    var screenshots = path.resolve(__dirname, '../reports/screenshots/_navigation/');
    var localFilesList = {};

    _.forEach(resolutions, function (resolution) {
      var resolutionDirPath = path.join(screenshots, resolution);
      localFilesList[resolution] = _.map(_.filter(fs.readdirSync(resolutionDirPath), function (fileName) {
        return _.includes(fileName, '.png');
      }), function (file) {
        return {
          path: path.join(screenshots, resolution, file),
          title: file
        }
      })
    });

    callback(null, localFilesList);
  }

  function getLatestFolderFilesList(callback) {
    gutil.log('Creating latest folder screenshots list...');
    var latestFolderFilesList = {};

    drive.files.list({
      q: "'" + folders.latest + "' in parents and trashed = false"
    }, function (err, _latestResolutionFolders) {
      if (err) return callback(err);
      async.each(_latestResolutionFolders.items, function(latestResolutionFolder, callbackOK) {
        drive.files.list({
          q: "'" + latestResolutionFolder.id + "' in parents and trashed = false"
        }, function (err, files) {
          if (err) return callback(err);
          latestFolderFilesList[latestResolutionFolder.title] = _.map(files.items, function (file) {
            return {
              title: file.title,
              id: file.id
            }
          });
          callbackOK();
        })
      }, function (err) {
        if (err) return callback(err);
        folders.latestResolutions = _latestResolutionFolders.items;
        callback(null, latestFolderFilesList);
      });
    })
  }

  function getVersionFolderFilesList(callback) {
    gutil.log('Creating version folder screenshots list...');
    var versionFolderFilesList = {};

    async.each(folders.versionResolutions, function(versionResolutionFolder, callbackOK) {
      drive.files.list({
        q: "'" + versionResolutionFolder.id + "' in parents and trashed = false"
      }, function (err, files) {
        if (err) return callback(err);
        versionFolderFilesList[versionResolutionFolder.title] = _.map(files.items, function (file) {
          return {
            title: file.title,
            id: file.id
          }
        });
        callbackOK();
      })
    }, function(err) {
      if (err) return callback(err)
      callback(null, versionFolderFilesList)
    })
  }

  /* FILTERING WHICH FILES SHOULD BE UPDATED AND WHICH SHOULD BE INSERTED */

  function splitFilesIntoGroup(callback) {
    // Check which files should be updated and which should be inserted
    gutil.log('Creating list of new files and files to update...');

    files.toUpdate = [],
    files.newForLatest = {},
    files.newForVersion = {};

    _.forEach(resolutions, function(resolution) {
      files.toUpdate = files.toUpdate
        .concat(filterFilesToUpdate(files.latest[resolution], resolution));

      files.toUpdate = files.toUpdate
        .concat(filterFilesToUpdate(files.version[resolution], resolution));

      files.newForLatest[resolution] = filterNewFiles(files.latest[resolution], resolution);
      files.newForVersion[resolution] = filterNewFiles(files.version[resolution], resolution);
    });

    callback();
  }

  function filterFilesToUpdate(filesToFilter, resolution) {
    var filteredFiles = _.filter(filesToFilter, function(remoteFile) {
      return _.some(files.local[resolution], function(localFile) {
        if (localFile.title === remoteFile.title) {
          remoteFile.updateMediaPath = localFile.path;
          return true;
        }

        return false;
      });
    });

    return filteredFiles;
  }

  function filterNewFiles(filesToFilter, resolution) {
    var newFiles = _.reject(files.local[resolution], function(localFile) {
      return _.some(filesToFilter, 'title', localFile.title);
    });

    return newFiles;
  }

  /* UPDATE FILES */

  function updateFiles(callback) {
    if (files.toUpdate.length === 0) {
      gutil.log('No files to update.');
      return callback()
    }

    gutil.log('Updating files...');
    var fileObjects = _.map(files.toUpdate, function(file) {
      return {
        fileId: file.id,
        media: {
          mimeType: 'image/png',
          body: fs.readFileSync(file.updateMediaPath)
        }
      };
    });

    async.each(fileObjects, drive.files.update, function(err) {
      if (err) return callback(err);
      callback();
    });
  }

  /* INSERT FILES */

  function insertNewFiles(callback) {
    async.each(resolutions, function(resolution,stepCallback) {
      if (files.newForLatest[resolution].length > 0 || files.newForVersion[resolution].length > 0) {
        gutil.log('Uploading new files...');

        var latestResolutionFolderID = _.pluck(_.filter(folders.latestResolutions, 'title', resolution), 'id');
        var versionResolutionFolderID = _.pluck(_.filter(folders.versionResolutions, 'title', resolution), 'id');
        var latestDriveObjects = mapFilesObjects(files.newForLatest[resolution], latestResolutionFolderID);
        var versionDriveObjects = mapFilesObjects(files.newForVersion[resolution], versionResolutionFolderID);

        async.parallel([
          function() {
            async.each(latestDriveObjects, drive.files.insert);
          },
          function() {
            async.each(versionDriveObjects, drive.files.insert);
          }
        ], function(err) {
          if (err) return callback(err);
          stepCallback()
        })
      } else {
        gutil.log(resolution, ' - no new files to upload.');
        stepCallback()
      }
    }, function(err) {
      if (err) return callback(err);
      callback()
    })
  }

  function mapFilesObjects(files, folderID) {
    var objects = files.map(function(file) {
      return {
        resource: {
          title: file.title,
          mimeType: 'image/png',
          parents: [{id: folderID}]
        },
        media: {
          mimeType: 'image/png',
          body: fs.createReadStream(file.path)
        }
      };
    });
    return objects;
  }

  async.waterfall([
    checkVersionFolder,
    getFilesLists,
    splitFilesIntoGroup,
    updateFiles,
    insertNewFiles
  ], function(err) {
    if (err) throw err;
    cb();
  });
};
