module.exports = function(config) {
  config.set({
    frameworks: ['browserify','mocha','sinon','sinon-chai','chai-as-promised','chai','phantomjs-shim'],
    files: [
      'src/**/*.test.js',
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.test.js': [ 'browserify' ]
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO, // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    browserify: {
      debug: true,
    }
  })
}
