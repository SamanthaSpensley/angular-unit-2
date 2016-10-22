angular.module('pokemonDirective', [])
.directive('pokemonDetails', function() {
  return {
    restrict: 'E',
    scope: {
      poke: '='
    },
    controller: 'PokemonController',
    templateUrl: '../partials/pokemon-details.html'
  }
})
