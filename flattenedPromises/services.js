app.service("Pokemon", function($http) {

  var catchEm = function($scope, pokemonId) {
    var loadData = function(pokemonId) {
      var url = 'http://pokeapi.co/api/v1/pokemon/' + pokemonId + '/';
      return $http.get(url)
      .then(function(data) {
        return data.data;
      });
    },
    var loadAbilities = function(pokeData) {
      var url = 'http://pokeapi.co' + pokeData.abilities[0].resource_uri;
      return $http.get(url) {
      .then(function(abilityData) {
        $scope.abilities = abilityData.data;
        return abilityData.data;
      })
      }
    },
    var loadMoves = function(pokeData) {
      var url = 'http://pokeapi.co' + pokeData.moves[0].resource_uri;
      return $http.get(url) {
      .then(function(moveData) {
        $scope.moves = moveData.data;
        return moveData.data;
      })
      }
    };

    catchEm (pokemonId)
    .then(loadAbilities)
    .then(loadMoves);
  }
});

//   var baseUrl = 'http://pokeapi.co/';
//
//   // A number for the pokemon id needs to be added to the
//   // this path.
//   var pokemonInfoPath = 'api/v1/pokemon/';
//   return {
//     catchEm: function(pokemonId) {
//       var pokeData;
//       var fullUrl = baseUrl + pokemonInfoPath + pokemonId + '/';
//       $http.get(fullUrl)
//       .then(function(baseData) {
//         pokeData = baseData.data;
//         var uri = pokeData.abilities[0].resource_uri;
//         $http.get(baseUrl + uri)
//         .then(function(abilityData) {
//           pokeData.abilities[0] = abilityData.data;
//           // Notice that this get request doesn't depend on the
//           // get request it is nested inside of.
//
//           var uri = pokeData.moves[0].resource_uri;
//           $http.get(baseUrl + uri).then(function(moveData) {
//             pokeData.moves[0] = moveData.data;
//
//             // Now we have a problem.  How do we signal that this
//             // data is done?
//           })
//         });
//       });
//     }
//   };
// });




// var FlightDashboard = function( $scope, user, travelService, weatherService ) {
//   var loadDeparture = function( user ) {
//     return travelService
//       .getDeparture( user.email )                     // Request #1
//       .then( function( departure ) {
//         $scope.departure = departure;               // Response Handler #1
//         return departure.flightID;
//       });
//   },
//   loadFlight = function( flightID) {
//     return travelService
//       .getFlight( flightID )                          // Request #2
//       .then( function( flight ){
//         $scope.flight = flight;                     // Response Handler #2
//         return flight;
//       });
//   },
//   loadForecast = function() {
//     return weatherService
//       .getForecast( $scope.departure.date )           // Request #3
//       .then(function( weather ) {
//         $scope.weather = weather;                   // Response Handler #3
//         return weather;
//       });
//   };
//
//   loadDeparture( user )<br />
//     .then( loadFlight )
//     .then( loadForecast );
//
//   $scope.user       = user;
//   $scope.departure  = null;
//   $scope.flight     = null;
//   $scope.weather    = null;
// };
