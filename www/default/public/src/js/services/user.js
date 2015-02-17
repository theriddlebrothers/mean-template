var rbServices = angular.module('rbServices', ['ngResource']);

rbServices.factory('User', ['$resource', function($resource) {
	return $resource('/api/users/:id', {
		id: '@id'
	}, {
		query: {
			method:'GET',
			params:{
			},
			isArray: false
		}
	});
}]);