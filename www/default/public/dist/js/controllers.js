RB.controller('TestCtrl', function ($scope, $http) {
	$scope.title = 'My Tasks';
	$http.get('stubs/tasks.json').success(function (data) {
		$scope.tasks = data;
	});
});