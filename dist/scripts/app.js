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
         	controller: 'HomeController',
         	templateUrl: '/templates/home.html'
     	})
 });
app.run(['$cookies', '$uibModal', function($cookies, $uibModal) {
    if (!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser === '') {
        $uibModal.open({
            keyboard: false,
            backdrop: 'static',
            animation: true,
            templateUrl: 'templates/createUserName.html',
            controller: 'UserNameController',
            size: 'sm'
        })
    }
}]);
