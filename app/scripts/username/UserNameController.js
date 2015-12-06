var app = angular.module("blocChat");

app.controller("UserNameController", ['$scope', '$cookies', '$uibModalInstance', function($scope, $cookies, $uibModalInstance) {
   $scope.setCurrentUser = function(username) {
      $cookies.put('blocChatCurrentUser', username);
      $uibModalInstance.close();
   }
}]);