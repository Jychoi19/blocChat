var app = angular.module("blocChat");

app.factory('Message', ['$firebaseArray', '$cookies', function($firebaseArray, $cookies) {
   var firebaseRef = new Firebase("https://blocchatapp.firebaseio.com"); 
   var messages = $firebaseArray(firebaseRef.child('messages'));

   return {
      send: function (newMessage, roomID) {
         messages.$add({
            userName: $cookies.get('blocChatCurrentUser'),
            content: newMessage,
            sentAt: Firebase.ServerValue.TIMESTAMP,
            roomId: roomID,
         });
      }
   };
}]);