describe('RB controllers', function() {
	describe('Controller: UserListCtrl', function(){

		var scope, log, User, ctrl;

		beforeEach(module('rb'));
		beforeEach(module('rbServices'));

		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('/api/users').respond(
				{ 
					_metadata : { 
						page : 5, 
						perPage : 10, 
						pageCount : 20, 
						totalCount : 521
					},
					users: [
						{_id: 1, firstName: 'John', lastName: 'Doe', status: 'active'}, 
						{_id: 2, firstName: 'John', lastName: 'Doe', status: 'inactive'}
					]
				}
			);

			scope = $rootScope.$new();
			log = { log : function() {} };
			ctrl = $controller('UserListCtrl', { $scope:scope, $log:log });
		}));

		it('should create "users" model with 2 users fetched from xhr', function() {
			expect(scope.page).toEqual(undefined);
			$httpBackend.flush();
			expect(scope.users.length).toEqual(2);
		});


	});
});