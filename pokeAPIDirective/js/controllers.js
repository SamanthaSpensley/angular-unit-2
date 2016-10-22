angular.module('pokemonApp')
.controller('PokemonController', ['$scope', '$http', '$q', 'pokemonService', function($scope, $http, $q, pokemonService) {
  $scope.view = {};
  pokemonService.pokemonSearch()
    .then(function(results) {
      $scope.view.results = results;
      console.log($scope.view.results);
    })
    .catch(function(error) {
      console.log(error);
    });
}])
