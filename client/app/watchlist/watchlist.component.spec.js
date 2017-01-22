'use strict';

describe('Component: WatchlistComponent', function() {
  // load the controller's module
  beforeEach(module('easierTvApp.watchlist'));

  var WatchlistComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    WatchlistComponent = $componentController('watchlist', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
