exports.config = {
  seleniumPort: 4444,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['e2e/*.test.js'],
  exclude: [],
  multiCapabilities: [{browserName: 'chrome'}],
  baseUrl: 'http://localhost:9000',
  allScriptsTimeout: 20000,
  getPageTimeout: 10000,
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 10000
  }
}
