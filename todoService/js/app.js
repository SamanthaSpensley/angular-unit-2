var app = angular.module('todoApp', ['ngRoute'])

angular.module('todoApp')
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'TodoContoller'
  });
  $locationProvider.html5Mode(true);
})
