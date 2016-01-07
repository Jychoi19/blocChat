var app = angular.module("blocChat");

app.directive('scrollToBottom', function () {
   return {
      scope: {
         scrollToBottom: "="
      },
      link: function (scope, element) {
         scope.$watchCollection('scrollToBottom', function(newValue) {
            if (newValue){
               element.scrollTop = element.scrollHeight;
            }
         });
      }
   }
});