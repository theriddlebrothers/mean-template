describe('RB controllers', function() {
  describe('Controller: DashboardCtrl', function(){
    var scope, ctrl;

    beforeEach(module('rb'));

    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('DashboardCtrl', { $scope:scope });
    }));

    it('Just a test...', function() {
      expect(scope.foo).toEqual('bar');
    });

  });
});