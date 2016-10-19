app.service('mathService', function() {
  this.add = function(firstNum, secondNum) {
    return firstNum + secondNum
  };
  this.sub = function(firstNum, secondNum) {
    return firstNum - secondNum
  };
  this.mult = function(firstNum, secondNum) {
    return firstNum * secondNum
  };
  this.div = function(firstNum, secondNum) {
    return firstNum / secondNum
  };
})
