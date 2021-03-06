var app = angular.module('yoyoApp', []);

app.controller('YoyoController', function($scope) {
  $scope.view = {};
  $scope.view.yoyos = [{
    name: "Duncan Metal Drifter",
    img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"
  }, {
    name: "Duncan Hello Kitty Pro Yo yoyo",
    img: "http://cdn6.bigcommerce.com/s-8ndhalpa/products/277/images/613/duncan-hello-kitty-pro-yo-yoyo-15__90815.1404161701.1280.1280.jpg"
  }];
});

app.directive('gsYoyoDetails', function() {
  return {
    templateUrl: '../yoyo-details.html',
    scope: {
      yoyo: '='
    }
  }
});


// var app = angular.module('simpleDirectiveApp', [])
// app.directive('gsAngularLogo', function() {
//   return {
//     restrict: 'E', // 'E' for element
//     template: '<img src="https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png">'
//   };
// });
