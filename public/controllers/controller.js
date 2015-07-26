//declaring angular
var mini = angular.module('mini',['ngRoute']);   //ngRoute is required for routing by angular

//Router
mini.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/',
		//main Page route
		{
			controller:'mainController',
			templateUrl:'views/main.html'
		})
	// add other 'when' as above for more routing. Point the 'page' and the respective controller	
	.otherwise({redirectTo:'/'});
});
