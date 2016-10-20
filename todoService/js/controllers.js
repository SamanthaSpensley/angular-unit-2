angular.module('todoApp')
.controller('TodoContoller', function($scope, $route, TodoService) {
  $scope.view = {};
  $scope.view.list = TodoService.list;

  // add, edit, remove item
  $scope.addTodo = function(input) {
    var input = $scope.view.newTodo;
    TodoService.add(input);
  };

  $scope.editTodo = function(index) {
    var input = $scope.view.edit[index];
    TodoService.edit(index, input)
  }

  $scope.removeTodo = function(index) {
    TodoService.remove(index);
  };

  // show/hide form
  $scope.toggleEditForm = function(item) {
    item.viewEdit = !item.viewEdit
  };
})
