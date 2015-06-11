'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('cravaApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have an empty list of seismics in the scope', function () {
      expect(scope.crava.seismic.length).toBe(0);
  });
});
