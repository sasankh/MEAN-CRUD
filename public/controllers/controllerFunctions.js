angular.module('mini');  //telling angular that the js is a part of 'mini'
/*----------------------------------------------------------------------------*/

//Declaring of controllers and linking it to its function
mini.controller('mainController',mainController);

/*-----------------------------------------------------------------------------*/

//controller function
//main page controller
function mainController($scope, $http){     //$scope and $http are basic requirements

	//function to refresh
	var refresh = function(){
		$http.get('/retriveAllData').success(function(response){
			$scope.userList = response;
			$scope.userInfo = "";
		});
	};

	refresh();  //run the refresh function at load

	//function to add new user
	$scope.add = function(userInfo){
		$http.post('/createData', userInfo).success(function(response){
			refresh();
		});
	}

	//function to select user
	$scope.select = function(id){
		$http.get('/retriveOneData/' + id).success(function(response){
			$scope.userInfo = response;
		});
	};

	//function to remove user
	$scope.remove = function(id){
		$http.delete('/deleteData/' + id).success(function(response){
			refresh();
		});
	};

	//function to update user record
	$scope.update = function(userInfo){
		$http.put('/updateData/' + userInfo._id, userInfo).success(function(response){
			refresh();
		});
	};

  //function to clear the input field
	$scope.clear = function(){
		$scope.userInfo = "";
	}
}

/*----------------------------------------------------------------------------*/
