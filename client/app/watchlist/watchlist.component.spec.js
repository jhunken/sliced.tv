'use strict';

import watchlistModule from './watchlist.component';
import watchlistService from '../services/watchlistService/watchlistService.service';

describe('Component: WatchlistComponent', function() {
  // load the controller's module
  beforeEach(angular.mock.module(watchlistModule));
  beforeEach(angular.mock.module(watchlistService));


  // Initialize the controller and a mock scope
  let watchlistComponent;
  beforeEach(inject(function($componentController, watchlistService) {
    watchlistComponent = $componentController('watchlist', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});
