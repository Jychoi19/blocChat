var app = angular.module("blocChat");

app.controller("UserNameController", ['$scope', '$cookies', '$uibModalInstance', function($scope, $cookies, $uibModalInstance) {
	$scope.setCurrentUser = function(name) {
		if (name !== undefined || name !== '') {
			$cookies.blocChatCurrentUser = name;
		} else { return null; }
		$uibModalInstance.close();
	}
}]);