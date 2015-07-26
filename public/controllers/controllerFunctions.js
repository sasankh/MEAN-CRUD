angular.module('mini');  //telling angular that the js is a part of 'mini'
/*----------------------------------------------------------------------------*/

//Declaring of controllers and linking it to its function
mini.controller('mainController',mainController);

/*-----------------------------------------------------------------------------*/

//injections
/*injection not necessary but sometome may be required */
//mainController.$inject = [$scope, $http];     //injection for mainController

/*-----------------------------------------------------------------------------*/

//controller function
//main page controller
function mainController($scope, $http){     //$scope and $http are basic requirements
	console.log("Able to access controller");
}

/*----------------------------------------------------------------------------*/
