angular.module('rbControllers').controller('UserListCtrl', ['$rootScope', '$scope', '$location', '$log', 'User', 
	function ($rootScope, $scope, $location, $log, User, $window) {
	$rootScope.title = "Users";
	$rootScope.activeMenu = "users";

	var query = {
		page : 1,
		term : null
	};

	var search = $location.search();
	query.term = search.term || null;
	query.page = search.page || 1;

	$scope.$watch('term', function(t) {
		$location.search('term', t);
	});

	$scope.$watch('page', function(p) {
		$location.search('page', p);
	});

	var getUsers = function() { 
		$log.log('Retrieving users...');

		User.query(query, function(data) {
			$scope.users = data.users;
			$scope.page = data._metadata.page;
			$scope.pageCount = data._metadata.pageCount;
			$scope.totalCount = data._metadata.totalCount;
			$scope.perPage = data._metadata.perPage;
			$scope.maxSize = 5;
		});
	};

	$scope.pageChanged = function() {
		query.page = $scope.page;
		query.term = $scope.term;
		getUsers();
	};
	
	getUsers();

}]);


angular.module('rbControllers').controller('UserDetailCtrl', ['$rootScope', '$scope', '$log', '$routeParams', 
	'User', '$window', function ($rootScope, $scope, $log, $routeParams, User, $window) {
	$rootScope.title = "User Details";
	$rootScope.activeMenu = "users";
	
	$scope.userId = $routeParams.userId;

	$log.log('Retrieving user...');
	$scope.user = User.get({ id: $scope.userId }, function(user) {
		// update model anything else? 
	});

	$scope.goBack = function() {
		$window.history.back();
	};

}]);