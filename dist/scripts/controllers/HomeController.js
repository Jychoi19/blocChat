var app = angular.module("blocChat");

app.controller("HomeController", ['$scope', 'Chatroom', '$uibModal', function($scope, Chatroom, $uibModal) {
	$scope.rooms = Chatroom.all;
	// $scope.currentRoom = {};

   	$scope.openCreateRoomModal = function(){
      	$uibModal.open({
      		animation: true,
	        templateUrl: 'templates/createRoomModal.html',
	        controller: 'CreateRoomController',
	        size: 'sm'
     	})
    };
	$scope.removeRoom = function (room) {
		Chatroom.remove(room);
	};
}]);