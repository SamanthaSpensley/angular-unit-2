var app = angular.module('pokemonApp', ['ngRoute', 'pokemonDirective'])

app.config(function($routeProvider, $locationProvider) {
  // $routeProvider
  // .when('/', {
  //   templateUrl: 'partials/pokemon-details.html',
  //   controller: 'PokemonController'
  // });
  $locationProvider.html5Mode(true);
})
