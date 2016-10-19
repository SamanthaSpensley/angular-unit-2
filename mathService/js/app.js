var app = angular.module('calcApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'MathController'
  })
})
