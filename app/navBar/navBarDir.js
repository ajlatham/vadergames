// INITILIZE DIRECTIVE
// ============================================================
angular.module("gameApp").directive('navBar', function() {
  return {
    restrict: 'EA',
    templateUrl: './app/navBar/navBarTmpl.html',
    // controller: 'navBarCtrl'
  };
});
