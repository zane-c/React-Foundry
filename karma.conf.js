/* eslint-disable */
// Karma configuration
// Generated on Sun Aug 05 2018 16:41:43 GMT-0700 (Pacific Daylight Time)
var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '**/*.spec.jsx',
    ],
    exclude: [],
    preprocessors: {
      '**/*.spec.jsx': ['webpack'],
    },
    // possible values: 'dots', 'progress'
    reporters: ['progress'],
    // web server port
    port: 9876,
    colors: true,
    webpack: webpackConfig,
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    concurrency: Infinity,
  });
};
