angular.module('rbControllers').controller('UserListCtrl', ['$rootScope', '$scope', '$log', 'User', function ($rootScope, $scope, $log, User) {
	$rootScope.title = "Users";
	$rootScope.activeMenu = "users";

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
		query();
	};

	query();
	
}]);


angular.module('rbControllers').controller('UserDetailCtrl', ['$rootScope', '$scope', '$log', '$routeParams', 'User', function ($rootScope, $scope, $log, $routeParams, User) {
	$rootScope.title = "User Details";
	$rootScope.activeMenu = "users";
	
	$scope.userId = $routeParams.userId;

	$log.log('Retrieving user...');
	$scope.user = User.get({ id: $scope.userId }, function(user) {
		// update model anything else?
	});

}]);