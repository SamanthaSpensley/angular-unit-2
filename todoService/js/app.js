var app = angular.module('todoApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'todoController'
  })
  $locationProvider.html5Mode(true);
})
