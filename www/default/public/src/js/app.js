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
		controller: 'DashboardCtrl'
	}).
	when('/documents', {
		templateUrl: 'views/document/document-list.html',
		controller: 'DocumentListCtrl'
	}).
	when('/document/:documentId', {
		templateUrl: 'views/document/document-detail.html',
		controller: 'DocumentDetailCtrl'
	}).
	when('/users', {
		templateUrl: 'views/user/user-list.html',
		controller: 'UserListCtrl'
	}).
	when('/user/:userId', {
		templateUrl: 'views/user/user-detail.html',
		controller: 'UserDetailCtrl'
	}).
	otherwise({
		redirectTo: '/dashboard'
	});
}]);
