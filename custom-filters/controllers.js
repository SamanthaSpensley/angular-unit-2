app.controller('MainController', function($scope) {
  $scope.view = {}
  $scope.view.greeting = "Hello World"
});

app.filter('kebab', function () {
  return function (input) {
    return input.replace(/_/g , "-")
  };
});

app.filter('camel', function() {
  return function(input) {
    return input.replace(/_/g, function(match, index) {
      if (+match === 0) return "";
      return index == 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }
})
