var app = angular.module("blocChat");

app.controller("DeleteRoomController", ['$scope', 'Chatroom', '$uibModalInstance', '$rootScope', 'roomId',
   function($scope, Chatroom, $uibModalInstance, $rootScope, roomId) {
   $scope.rooms = Chatroom.all;

   $scope.removeRoom = function () {
      Chatroom.remove(roomId).then(function(){
         if ($scope.rooms.length) $rootScope.setCurrentRoom($scope.rooms[$scope.rooms.length-1]);  
      });
      $uibModalInstance.close();
   };

   $scope.cancelRoom = function() {
      $uibModalInstance.close();
   }
}]);
