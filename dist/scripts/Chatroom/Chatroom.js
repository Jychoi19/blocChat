var app = angular.module("blocChat");

app.factory('Chatroom', ['$firebaseArray', function($firebaseArray) {
   var firebaseRef = new Firebase("https://blocchatapp.firebaseio.com");  
   var rooms = $firebaseArray(firebaseRef.child('rooms'));

   return {
      all: rooms,
      create: function (room) {
         return rooms.$add(room);
      },
      remove: function (room) {
         return rooms.$remove(room);
      },
      messages: function (roomId) {
         return $firebaseArray(firebaseRef.child('messages').orderByChild('roomId').equalTo(roomId));
      }
   }
}]);