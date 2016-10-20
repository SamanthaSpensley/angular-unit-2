angular.module('todoApp')
.service('TodoService', function() {
  this.list = [{
    name: 'wash car',
    viewEdit: false
  },
  {
    name: 'mop floor',
    viewEdit: false
  },
  {
    name: 'buy puppy',
    viewEdit: false
  }];

  this.add = function(input) {
    this.list.push({
      name: input,
      viewEdit: false
    })
  };

  this.edit = function(index, input) {
    this.list[index].name = input;
    this.list[index].viewEdit = false;
  };

  this.remove = function(index) {
    this.list.splice(index, 1);
  }
})
