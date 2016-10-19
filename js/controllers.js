app.controller('MainController', function($scope, $http) {
  $scope.view = {}
  $scope.view.greeting = "Hello World"
});

app.controller('HomeController', function($scope) {
  $scope.view = {};
  $scope.view.message = "Welcome!"
});

app.controller('DogsController', function($scope) {
  $scope.view = {};
  $scope.view.message = "Woof Woof!"
});

// angular
//   .module("learningServices")
//   .controller("FirstController", function($scope, firstService) {
//     $scope.view = {};
//     $scope.view.greeting = firstService.sayHi();
//     $scope.view.users = firstService.getAllUsers();
//   });
