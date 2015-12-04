var app = angular.module("blocChat");

app.controller("UserNameController", ['$scope', '$cookies', '$uibModalInstance', function($scope, $cookies, $uibModalInstance) {
	$scope.setCurrentUser = function(name) {
		$cookies.put('blocChatCurrentUser', name);
		$uibModalInstance.close();
	}
	$scope.currentUserName = $cookies.blocChatCurrentUser;
}]);