const path = require('path');

module.exports = {
  appBuild: path.resolve('build'),
  appHtml: path.resolve('index.html'),
  appFavicon: path.resolve('favicon.ico'),
  appPackageJson: path.resolve('package.json'),
  appSrc: path.resolve('src'),
  stylesSrc: path.resolve('src/styles'),
  assetsSrc: path.resolve('src/assets'),
  appNodeModules: path.resolve('node_modules'),
  ownNodeModules: path.resolve('node_modules'),
};
