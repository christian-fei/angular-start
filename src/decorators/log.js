module.exports = /*@ngInject*/function log($logProvider, $provide){
  $provide.decorator('$log', function ($delegate) {
    var origInfo = $delegate.info
    var origLog = $delegate.log
    var origWarn = $delegate.warn
    var origError = $delegate.error
    $delegate.info = function () {
      if ($logProvider.debugEnabled()){
        origInfo.apply(null, arguments)
      }
    }

    $delegate.warn = function () {
      if ($logProvider.debugEnabled()){
        origWarn.apply(null, arguments)
      }
    }

    $delegate.error = function () {
      if ($logProvider.debugEnabled()){
        origError.apply(null, arguments)
      }
    }

    $delegate.log = function () {
      if ($logProvider.debugEnabled()){
        origLog.apply(null, arguments)
      }
    }
    return $delegate
  })
}
