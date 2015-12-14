var app = angular.module('blocChat');

app.filter('filterTimeCode', ['$firebaseArray', function($firebaseArray) {
   return function(timeInSeconds) {
      if (typeof timeInSeconds === "number") {
         var timeFormat = new Date(0,0,0,0,0,0,0);
         timeFormat.setSeconds(timeInSeconds);
         return timeFormat;
      }
   };
}]);