var app = angular.module("blocChat");

app.controller("HomeController", ['$scope', '$firebaseObject', 'Chatroom', function($scope, $firebaseObject, Chatroom) {
	var ref = new Firebase("https://blocchatapp.firebaseio.com");
	$scope.data = $firebaseObject(ref);

	$scope.rooms = Chatroom.all;

}]);