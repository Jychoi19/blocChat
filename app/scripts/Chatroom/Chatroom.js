var app = angular.module("blocChat");

app.factory('Room', ['$firebaseArray', function($firebaseArray) {

  var firebaseRef = new Firebase("https://blocchatapp.firebaseio.com");
  var rooms = $firebaseArray(firebaseRef.child('rooms'));

  return {
    all: rooms
  }
}])