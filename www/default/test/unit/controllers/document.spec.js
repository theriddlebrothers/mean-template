describe('RB controllers', function() {
	describe('Controller: DocumentListCtrl', function(){

		var scope, log, ctrl;

		beforeEach(module('rb'));
		beforeEach(module('rbServices'));

		beforeEach(inject(function($httpBackend, $rootScope, $controller) {
			scope = $rootScope.$new();
			log = { log : function() {} };
			ctrl = $controller('DocumentListCtrl', { $scope:scope, $log:log });
		}));

		it('should set title', function() {
			expect(scope.title).toContain('Documents');
		});

		it('should set active menu item', function() {
			expect(scope.activeMenu).toEqual('documents');
		});

	});

	describe('Controller: DocumentDetailCtrl', function(){

		var scope, log, ctrl;

		beforeEach(module('rb'));
		beforeEach(module('rbServices'));

		beforeEach(inject(function($httpBackend, $rootScope, $controller) {
			scope = $rootScope.$new();
			log = { log : function() {} };
			ctrl = $controller('DocumentDetailCtrl', { $scope:scope, $log:log });
		}));

		it('should set title', function() {
			expect(scope.title).toContain('Document Detail');
		});

		it('should set active menu item', function() {
			expect(scope.activeMenu).toEqual('documents');
		});

	});
});