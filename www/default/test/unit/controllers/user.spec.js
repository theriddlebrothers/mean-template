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
						totalCount : 532
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

		it('should set title', function() {
			expect(scope.title).toContain('Users');
		});

		it('should set active menu item', function() {
			expect(scope.activeMenu).toEqual('users');
		});

		it('should create "users" model with 2 users fetched from xhr', function() {
			$httpBackend.flush();
			expect(scope.users.length).toEqual(2);
		});

		it('should set pagination data from response', function() {
			$httpBackend.flush();
			expect(scope.page).toEqual(5);
			expect(scope.perPage).toEqual(10);
			expect(scope.pageCount).toEqual(20);
			expect(scope.totalCount).toEqual(532);
		});


	});
});