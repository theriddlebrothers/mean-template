describe('RB controllers', function() {
	describe('Controller: UserListCtrl', function(){

		var httpBackend, scope, log, User, ctrl;

		beforeEach(module('rb'));
		beforeEach(module('rbServices'));

		beforeEach(inject(function($httpBackend, $rootScope, $controller, $log, _User_) {
			httpBackend = $httpBackend;
			httpBackend.expectGET('/api/users').respond(
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
			log = $log;
			User = _User_;
			ctrl = $controller('UserListCtrl', { $scope:scope, $log:log, User: _User_});
		}));

		it('should set title', function() {
			expect(scope.title).toContain('Users');
		});

		it('should set active menu item', function() {
			expect(scope.activeMenu).toEqual('users');
		});

		it('should create "users" model with 2 users fetched from xhr', function() {
			httpBackend.flush();
			expect(scope.users.length).toEqual(2);
		});

		it('should set pagination data from response', function() {
			httpBackend.flush();
			expect(scope.page).toEqual(5);
			expect(scope.perPage).toEqual(10);
			expect(scope.pageCount).toEqual(20);
			expect(scope.totalCount).toEqual(532);
		});


		it('should update users when page changes', function() {
			spyOn(User, 'query');
			scope.page = 2;
			scope.pageChanged();
			expect(User.query).toHaveBeenCalled();
		});


	});


	describe('Controller: UserDetailCtrl', function(){

		var scope, log, ctrl, User, routeParams;

		beforeEach(module('rb'));
		beforeEach(module('rbServices'));

		beforeEach(inject(function($httpBackend, $rootScope, $controller, $log, $routeParams, _User_) {
			httpBackend = $httpBackend;
			httpBackend.expectGET('/api/users/123abc').respond(
				{
					_id: 1, 
					firstName: 'John', 
					lastName: 'Doe', 
					status: 'active'
				}
			);

			scope = $rootScope.$new();
			log = $log;
			routeParams = $routeParams;
			routeParams.userId = '123abc';
			ctrl = $controller('UserDetailCtrl', { $scope:scope, $log:log, $routeParams:routeParams, User: _User_});
		}));

		it('should set title', function() {
			expect(scope.title).toContain('User Detail');
		});

		it('should set active menu item', function() {
			expect(scope.activeMenu).toEqual('users');
		});

		it('should retrieve user ID from url', function() {
			expect(scope.userId).toEqual('123abc');
		});

		it('should retrieve user from api', function() {
			httpBackend.flush();
			expect(scope.user.firstName).toEqual('John');
		});

	});
});