var app = angular.module("blocChat");

app.controller("HomeController", function($scope, $firebaseObject) {
  var ref = new Firebase("https://blocchatapp.firebaseio.com");
  $scope.data = $firebaseObject(ref);
});