// INITILIZE SERVICE
// ============================================================
angular.module("gameApp").service("apiService", function($http) {

  // CRUD FUNCTIONS
  // ============================================================
  this.getGifs = function(id) {

    return $http({
      method: 'GET',
      url: "https://api.giphy.com/v1/gifs/search?q=dancing+blastoise&api_key=dc6zaTOxFJmzC"
    }).then(function(response) {
      console.log(response);
      return response.data.data;
    });
  };


  // OTHER FUNCTIONS
  // ============================================================


});
