describe('RB controllers', function() {
	describe('Controller: DashboardCtrl', function(){

		var scope, log, ctrl;

		beforeEach(module('rb'));
		beforeEach(module('rbServices'));

		beforeEach(inject(function($httpBackend, $rootScope, $controller) {
			scope = $rootScope.$new();
			log = { log : function() {} };
			ctrl = $controller('DashboardCtrl', { $scope:scope, $log:log });
		}));

		it('should set title', function() {
			expect(scope.title).toContain('Dashboard');
		});

		it('should set active menu item', function() {
			expect(scope.activeMenu).toEqual('dashboard');
		});

	});
});