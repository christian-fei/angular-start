angular.module('angular-start', [
  'ui.bootstrap',
  'ui.router',
  require('./controllers'),
  require('./filters'),
  require('./modules'),
  require('./constants'),
  require('./components'),
])
.config(require('./config'))
.config(require('./router/config'))
.config(require('./decorators/log'))
.run(require('./run'))
