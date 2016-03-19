var webpack = require('webpack'),
    config  = require('./common');

config.bail     = true;
config.debug    = false;
config.profile  = false;
config.devtool  = 'source-map';
config.progress = false;
config.plugins  = config.plugins.concat(
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}}),
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      drop_console: true,
      drop_debugger: true
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js', minChunks: Infinity})
);

module.exports = config;
