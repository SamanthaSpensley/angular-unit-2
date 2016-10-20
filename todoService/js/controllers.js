app.controller('todoController', function($scope, $route, todoService) {
  $scope.view = {};
  $scope.view.list = todoService.list

  $scope.addTodo = function(form) {
    var input = $scope.view.newTodo
    todoService.add(input);
    form.$setPristine();
    $scope.view.newTodo = '';
  };

  $scope.removeTodo = function(item) {
    todoService.remove(item)
    // var index = $scope.view.list.indexOf(item)
    // $scope.view.list.splice(index, 1)
  }
})
