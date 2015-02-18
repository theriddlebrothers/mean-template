var RB = angular.module("rb", [
	'ngRoute',
	'ngResource',
	'ui.bootstrap',
	'rbControllers',
	'rbServices'
]);

angular.module('rbControllers', []);

RB.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/dashboard', {
		templateUrl: 'views/dashboard.html',
		controller: 'DashboardCtrl',
		reloadOnSearch: false
	}).
	when('/documents', {
		templateUrl: 'views/document/document-list.html',
		controller: 'DocumentListCtrl'
	}).
	when('/document/:documentId', {
		templateUrl: 'views/document/document-detail.html',
		controller: 'DocumentDetailCtrl',
		reloadOnSearch: false
	}).
	when('/users', {
		templateUrl: 'views/user/user-list.html',
		controller: 'UserListCtrl',
		reloadOnSearch: false
	}).
	when('/user/:userId', {
		templateUrl: 'views/user/user-detail.html',
		controller: 'UserDetailCtrl',
		reloadOnSearch: false
	}).
	otherwise({
		redirectTo: '/dashboard'
	});
}]);
