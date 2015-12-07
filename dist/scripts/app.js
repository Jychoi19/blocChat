var app = angular.module("blocChat", ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
   $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
   });
   $urlRouterProvider.otherwise("/home");
   $stateProvider
      .state('home', {
         url: '/home',
         controller: 'ChatroomController',
         templateUrl: '/templates/home.html'
      })
});
app.run(['$cookies', '$uibModal', function($cookies, $uibModal) {
   if (!$cookies.get('blocChatCurrentUser') || $cookies.get('blocChatCurrentUser') === '') {
      $uibModal.open({
         keyboard: false,
         backdrop: 'static',
         animation: true,
         templateUrl: 'templates/createUserName.html',
         controller: 'AuthenticationController',
         size: 'sm'
      })
   }
}]);
