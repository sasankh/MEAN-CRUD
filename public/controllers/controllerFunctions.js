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

	var refresh = function(){
		$http.get('/retriveAllData').success(function(response){
			$scope.userList = response;
		});
	};

	refresh();

	$scope.add = function(user){
		$http.post('/createData', user).success(function(response){
			refresh();
		});
	}

	$scope.select = function(id){
		$http.get('/retriveOneData' + id).success(function(response){
			$scope.userData = response;
		});
	};

	$scope.remove = function(id){
		$http.delete('/deleteData' + id).success(function(response){
			refresh();
		});
	};

	$scope.update = function(user){
		$http.put('/updateData' + id).success(function(response){
			refresh();
		});
	};
}

/*----------------------------------------------------------------------------*/
