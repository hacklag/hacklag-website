var gulp = require('gulp');
var realFavicon = require('gulp-real-favicon');
var fs = require('fs');

// File where the favicon markups are stored
var FAVICON_DATA_FILE = 'faviconData.json';

// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).
module.exports = function(done) {
  realFavicon.generateFavicon({
    masterPicture: 'src/assets/img/favicon.png',
    dest: 'dist/img/favicons',
    iconsPath: 'img/favicons',
    design: {
      ios: {
        pictureAspect: 'backgroundAndMargin',
        backgroundColor: '#ffffff',
        margin: '18%'
      },
      desktopBrowser: {},
      windows: {
        pictureAspect: 'noChange',
        backgroundColor: '#2d89ef',
        onConflict: 'override'
      },
      androidChrome: {
        pictureAspect: 'noChange',
        themeColor: '#ffffff',
        manifest: {
          name: 'MyApp',
          display: 'browser',
          orientation: 'notSet',
          onConflict: 'override'
        }
      },
      safariPinnedTab: {
        pictureAspect: 'blackAndWhite',
        threshold: 91.40625,
        themeColor: '#5bbad5'
      }
    },
    settings: {
      compression: 5,
      scalingAlgorithm: 'Mitchell',
      errorOnImageTooSmall: false
    },
    markupFile: FAVICON_DATA_FILE
  }, function() {
    done();
  });
};


