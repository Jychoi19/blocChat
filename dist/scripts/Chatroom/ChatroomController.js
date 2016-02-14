var app = angular.module("blocChat");

app.controller("ChatroomController", ['$scope', 'Chatroom', '$uibModal', 'Message', '$location', '$anchorScroll', '$rootScope',
   function($scope, Chatroom, $uibModal, Message, $location, $anchorScroll, $rootScope) {
   $scope.rooms = Chatroom.all;
   $scope.currentRoom = {};
   $scope.messages = [];

   $rootScope.$on('SET_CURRENT_ROOM', function(event, ref){
     var room = $scope.rooms[$scope.rooms.$indexFor(ref)]
     $scope.setCurrentRoom(room);
   });

   $scope.$watchCollection("messages", function(){
      setTimeout(function(){
         document.querySelector(".text-messages").scrollTop = document.querySelector('.text-messages').scrollHeight;
      }, 100);
   });
   
   $scope.openCreateRoomModal = function(){
      $uibModal.open({
         animation: true,
         templateUrl: 'templates/createRoomModal.html',
         controller: 'CreateRoomController',
         size: 'sm'
      })
   };

   $scope.openDeleteRoomModal = function(room){
      if (!angular.equals({}, room)) {
         $uibModal.open({
            animation: true,
            templateUrl: 'templates/deleteRoomModal.html',
            controller: 'DeleteRoomController',
            size: 'sm',
            resolve: {
               roomId: function() {
                  return room;
               }
            }
         })
      }
   };

   $rootScope.setCurrentRoom = function(room) {
      $scope.currentRoom = room;
      $scope.messages = Chatroom.messages($scope.currentRoom.$id);
      setTimeout(function(){
        document.querySelector(".text-messages").scrollTop = document.querySelector('.text-messages').scrollHeight;
      }, 100);
   };

   $scope.sendMessage = function(message){
      Message.send(message, $scope.currentRoom.$id);
      $scope.message = null;
   }

   $scope.isActive = function(room) {
      return $scope.currentRoom === room;
   }

}]);
