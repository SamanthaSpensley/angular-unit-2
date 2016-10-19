app.controller('MathController', function($scope, $route, mathService) {
  $scope.view = {};
  $scope.calculate = function() {
    var operator = $scope.view.operator
    var firstNum = $scope.view.firstNum
    var secondNum = $scope.view.secondNum
    $scope.view.result = mathService[operator](firstNum, secondNum);
  }
})
