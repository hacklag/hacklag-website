// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://goo.gl/qPbSyX

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');
const paths = require('../paths');
const babelQuery = require('../babel.dev');

// PostCSS plugins
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssImport = require('postcss-import');

const modules = [
  'src',
  'node_modules',
];

module.exports = {
  resolve: {
    modulesDirectories: modules,
    modules,
    // These are the reasonable defaults supported by the Node ecosystem.
    extensions: [
      '',
      '.js',
      '.jsx',
      '.react.js',
    ],
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        include: paths.appSrc,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        include: paths.appSrc,
        loader: 'babel',
        exclude: /node_modules/,
        query: babelQuery,
      },
      {
        test: /\.css$/,
        include: paths.appSrc,
        exclude: paths.stylesSrc,
        loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
      },
      {
        test: /\.css$/,
        include: paths.stylesSrc,
        loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&sourceMap!postcss-loader',
      },
      {
        test: /\.css$/,
        include: paths.appNodeModules,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.json$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'json',
      },
      {
        test: /\.(jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(mp4|webm)(\?.*)?$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  eslint: {
    configFile: path.join(__dirname, '../eslint.js'),
    useEslintrc: false,
  },
  postcss: (cssLoader) => [
    postcssImport({
      path: [paths.stylesSrc],
      addDependencyTo: cssLoader,
    }),
    postcssFocus(),
    cssnext({
      browsers: ['last 2 versions', 'IE > 10'],
    }),
  ],
};
