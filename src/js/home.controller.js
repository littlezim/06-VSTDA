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

	//Delete array information
	$scope.deleteDo = function(text) {

		//Find index of text for the array
		var indexOfDo = $scope.toDos.indexOf(text);
		
		//Splice to position of text input and remove that text
		$scope.toDos.splice(indexOfDo, 1);

	};
});