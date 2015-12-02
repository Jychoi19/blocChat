var app = angular.module("blocChat");

app.controller("CreateRoomController", ['$scope', 'Chatroom', '$uibModalInstance', function($scope, Chatroom, $uibModalInstance) {
	$scope.createRoom = function (room) {
		if (room !== undefined) {
			Chatroom.create(room);
		}  
		else { return null; };
		$uibModalInstance.close();
		$scope.newroom.name = null;
	}
	$scope.cancelRoom = function() {
		$uibModalInstance.close();
	}
}]);