var app = angular.module("blocChat");

app.controller("CreateRoomController", ['$scope', 'Chatroom', '$uibModalInstance', '$rootScope', 
   function($scope, Chatroom, $uibModalInstance, $rootScope) {
   $scope.createRoom = function (roomName) {
      if (roomName !== undefined) {
         Chatroom.create(roomName).then(function(ref){
            $rootScope.$emit("SET_CURRENT_ROOM", ref.key());
         })   
      }
      else { return null; };
      $uibModalInstance.close();
      $scope.newroom.name = null;
   }
   $scope.cancelRoom = function() {
      $uibModalInstance.close();
   }
}]);
