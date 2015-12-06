var app = angular.module('blocChat');

app.filter('filterTimeCode', ['$firebaseArray', function($firebaseArray) {
   return function(timeInSeconds) {
      if (typeof timeInSeconds === "number") {
         var newDate = new Date(timeInSeconds);
         console.log(newDate);
         return newDate;
      }
   };
}]);