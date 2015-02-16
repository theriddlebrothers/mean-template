RB.controller('TestCtrl', function ($scope) {
    $scope.title = "Example title! (Change or delete me)";
	$scope.tasks = [
		{ "description" : "Pick up dryclean"}, { "description" : "Do homework" }
	];
});