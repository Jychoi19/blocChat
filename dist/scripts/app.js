var app = angular.module("blocChat", ['ui.router', 'firebase']);

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
