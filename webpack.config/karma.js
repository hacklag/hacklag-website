var webpack = require('webpack'),
    config  = require('./common');

config.module.postLoaders = [{
  test: /\.js(|x)?$/,
  exclude: /(test|node_modules)\//,
  loader: 'istanbul-instrumenter'
}];

config.plugins.unshift(
  new webpack.DefinePlugin({SYNCANO_BASE_URL: ""})
);

module.exports = config;
