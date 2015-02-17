angular.module('rbControllers').controller('DocumentListCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.title = "Documents";
	$scope.activeMenu = "documents";
}]);


angular.module('rbControllers').controller('DocumentDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.title = "Document Details";
	$scope.activeMenu = "documents";
}]);