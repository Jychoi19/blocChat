var app = angular.module("blocChat");

app.controller("ChatroomController", ['$scope', 'Chatroom', '$uibModal', 'Message', '$location', '$anchorScroll',
   function($scope, Chatroom, $uibModal, Message, $location, $anchorScroll) {
   $scope.rooms = Chatroom.all;
   $scope.currentRoom = {};
   $scope.messages = [];

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
      $scope.setCurrentRoom($scope.rooms[0]);
   };
   $scope.setCurrentRoom = function(room) {
      $scope.currentRoom = room;
      $scope.messages = Chatroom.messages($scope.currentRoom.$id);
      setTimeout(function(){
        document.querySelector(".text-messages").scrollTop = document.querySelector('.text-messages').scrollHeight;
      }, 100);
   };
   $scope.sendMessage = function(message){
      Message.send(message, $scope.currentRoom.$id);
      $scope.message = null;
      setTimeout(function(){
        document.querySelector(".text-messages").scrollTop = document.querySelector('.text-messages').scrollHeight;
      }, 100);
   }
   $scope.isActive = function(room) {
      return $scope.currentRoom === room;
   }
}]);
