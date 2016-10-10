// INITILIZE APP
// ============================================================
var app = angular.module("gameApp", ['ui.router']);

// CONFIG
// ============================================================
angular.module("gameApp").config(function($stateProvider, $urlRouterProvider) {

  // INITILIZE STATES
  // ============================================================
  $stateProvider

    // HOME STATE
    .state('home', {
      url: '/home',
      templateUrl: './app/home/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .state('four', {
      url: '/four',
      templateUrl: './app/four/fourTmpl.html',
      controller: 'fourCtrl'
    })
    .state('tickTack', {
      url: '/tickTack',
      templateUrl: './app/tickTack/tickTackTmpl.html',
      controller: 'tickTackCtrl'
    });


  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/home');
});
