var webpackConfig = require('./webpack.config/karma');

module.exports = function(config) {
  config.set({

    files: [
      './test/polyfill.js',
      './test/main.js'
    ],

    preprocessors: {
      './test/main.js': ['webpack']
    },

    browsers: ['PhantomJS'],

    /**
     * Use Mocha as the test framework, Sinon for mocking, and
     * Chai for assertions.
     */
    frameworks: ['mocha', 'sinon-chai'],

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'lcovonly', subdir: '.', file: 'lcov.info' },
        { type: 'html', subdir: 'html' }
      ]
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    },

    singleRun: true,

    plugins: [
      'karma-mocha',
      'karma-webpack',
      'karma-coverage',
      'karma-sinon-chai',
      'karma-phantomjs-launcher'
    ],
  });
};
