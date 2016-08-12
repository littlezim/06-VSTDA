//Create controller for module
angular.module('app').controller('HomeController', function($scope) {
//create array for text	
	$scope.toDos = [];
//get and store array information from user input and selector
	$scope.addToDo = function() {
		$scope.toDos.push({
			text : $scope.text,
			priority : parseInt($scope.priority)
		});
	};
});