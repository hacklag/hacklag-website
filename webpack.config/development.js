var webpack = require('webpack'),
    config  = require('./common');

config.cache   = true;
config.debug   = false;
config.devtool = 'eval';

config.entry.app.unshift(
  'webpack-dev-server/client?https://localhost:8080',
  'webpack/hot/only-dev-server'
);

config.module.loaders[1].loaders = [
  config.module.loaders[1].loader
];

config.module.preLoaders.push({
  test: /\.js(|x)$/,
  loader: 'eslint-loader',
  exclude: /node_modules/
});

config.eslint = {
  formatter: require('eslint-friendly-formatter'),
  configFile: '.eslintrc',
  quiet: true
};

delete config.module.loaders[1].loader;

config.plugins.unshift(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
);

config.devServer = {
  publicPath: '/js/',
  contentBase: './dist',
  https: true,
  hot: true,
  noInfo: false,
  historyApiFallback: true,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
};

module.exports = config;
