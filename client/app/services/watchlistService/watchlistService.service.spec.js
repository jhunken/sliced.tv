'use strict';

describe('Service: watchlistService', function() {
  // load the service's module
  beforeEach(module('easierTvApp.watchlistService'));

  // instantiate service
  var watchlistService;
  beforeEach(inject(function(_watchlistService_) {
    watchlistService = _watchlistService_;
  }));

  it('should do something', function() {
    expect(!!watchlistService).to.be.true;
  });
});
