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

	$scope.add = function(userInfo){
		$http.post('/createData', userInfo).success(function(response){
			$scope.userInfo = "";
			refresh();
		});
	}

	$scope.select = function(id){
		console.log(id);
		$http.get('/retriveOneData/' + id).success(function(response){
			$scope.userInfo = response;
		});
	};

	$scope.remove = function(id){
//		$http.delete('/deleteData/' + id).success(function(response){
//			refresh();
//		});
	};

	$scope.update = function(user){
//		$http.put('/updateData/' + id).success(function(response){
//			refresh();
//		});
	};
}

/*----------------------------------------------------------------------------*/
