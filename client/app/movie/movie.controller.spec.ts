'use strict';

describe('Component: MovieComponent', function () {

  // load the controller's module
  beforeEach(module('easierTvApp'));

  var MovieComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    MovieComponent = $componentController('movie', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
