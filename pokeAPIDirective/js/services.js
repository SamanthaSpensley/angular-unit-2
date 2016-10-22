angular.module('pokemonApp')
.service('pokemonService', ['$http', '$q', function($http, $q) {
  this.pokemonSearch = function() {
    var pokemon1 = $http.get('http://pokeapi.co/api/v2/pokemon/1/');
    var pokemon2 = $http.get('http://pokeapi.co/api/v2/pokemon/2/');
    var pokemon3 = $http.get('http://pokeapi.co/api/v2/pokemon/3/');
    var pokemon4 = $http.get('http://pokeapi.co/api/v2/pokemon/4/');
    var pokemon5 = $http.get('http://pokeapi.co/api/v2/pokemon/5/');
    return $q.all([pokemon1, pokemon2, pokemon3, pokemon4, pokemon5]);
  };
}]);
