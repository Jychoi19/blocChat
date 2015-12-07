var app = angular.module("blocChat");

app.controller("AuthenticationController", ['$scope', '$cookies', '$uibModalInstance', function($scope, $cookies, $uibModalInstance) {
   $scope.setCurrentUser = function(username) {
      if (username === undefined || username.trim() === "") {
         return false;
      }
      $cookies.put('blocChatCurrentUser', username);
      $uibModalInstance.close();
   }
}]);