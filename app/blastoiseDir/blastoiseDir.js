// INITILIZE DIRECTIVE
// ============================================================
angular.module("gameApp").directive('blastoiseDir', function() {
  return {
    restrict: 'EA',
    templateUrl: './app/blastoiseDir/blastoiseTmpl.html',
    controller: 'blastoiseCtrl'
  };
});
