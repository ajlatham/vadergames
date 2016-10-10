// INITILIZE CONTROLLER
// ============================================================
angular.module("gameApp").controller("blastoiseCtrl", function($scope, apiService) {

  // VARIABLES
  // ============================================================


  // FUNCTIONS
  // ============================================================
  $scope.getGifs= function() {
    apiService.getGifs().then(function(response) {
      console.log(response);
      $scope.gifs=response;
      $scope.randomize();
    });
  }
  $scope.getGifs();

  $scope.randomize = function() {

    var index = Math.floor(Math.random() * ($scope.gifs.length-1 - 0));

    $scope.gif = $scope.gifs[index];

  }

});
