var common      = require('./_common')(),
    paths       = common.paths,
    fontName    = common.fontName,
    gulp        = require('gulp'),
    iconfont    = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css');

module.exports = function(cb) {
  gulp.src([paths.assets + '/icons/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      path: paths.assets + '/templates/icons.css',
      targetPath: '../../css/icons.css',
      fontPath: '/fonts/icons/'
    }))
    .pipe(iconfont({
      fontName: fontName,
      normalize: true,
      fontHeight: 1001
    }))
    .pipe(gulp.dest(paths.assets + '/fonts/icons/'))
    .on('finish', function() {
      cb();
    });
};

module.exports.dependencies = ['clean-iconfont'];
