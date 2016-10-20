app.service('todoService', function() {
  this.list = [
    {
    name: 'mop the floor',
    editForm: false
    },
    {
      name: 'wash the car',
      editForm: false
    }
  ];

  this.add = function(input) {
    this.list.unshift({
      name: input,
      editForm: false
    })
  };

  this.remove = function(index) {
    this.list.splice(index, 1)
  };
  
})
