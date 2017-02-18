'use strict';

import watchlistServiceModule from './watchlistService.service';

describe('Service: watchlistService', () => {
  // load the service's module
  beforeEach(angular.mock.module(watchlistServiceModule));

  let $httpBackend;

  // instantiate service
  let watchlistService;
  beforeEach(inject((_watchlistService_, _$httpBackend_) => {
    watchlistService = _watchlistService_;
    $httpBackend = _$httpBackend_;
  }));

  it('should be defined', function() {
    expect(!!watchlistService).to.be.true;
  });

  it('should get watchlists', () => {
    $httpBackend.expectGET('/api/watchlists/')
      .respond([]);
    watchlistService.get()
      .then(response => {
        expect(response.data).to.be.instanceOf(Array);
        expect(response.data.length).to.equal(0);
      });
    $httpBackend.flush();
  });
});
