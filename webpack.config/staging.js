var webpack = require('webpack'),
    config  = require('./common');

config.devtool = 'source-map';
config.plugins = config.plugins.concat(
  new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
  new webpack.DefinePlugin({SYNCANO_BASE_URL: ""})
);

module.exports = config;
