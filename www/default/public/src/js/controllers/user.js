var rbControllers = angular.module('rbControllers', []);

rbControllers.controller('UserListCtrl', ['$scope', '$log', 'User', function ($scope, $log, User) {

	var query = function() {
		$log.log('Retrieving users...');
		User.query({
			page : $scope.page,
			term : $scope.term
		}, function(data) {
			$scope.users = data.users;
			$scope.page = data._metadata.page;
			$scope.pageCount = data._metadata.pageCount;
			$scope.totalCount = data._metadata.totalCount;
			$scope.perPage = data._metadata.perPage;
			$scope.maxSize = 5;
		});
	};

	$scope.pageChanged = function() {
		$log.log('Page changed to: ' + $scope.page);
		query();
	};


	query();
	
}]);


rbControllers.controller('UserDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.userId = $routeParams.userId;
}]);