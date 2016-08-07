'use strict';

import movieServiceModule from './movieService.service';

describe('Service: movieService', function () {

  // load the service's module
  beforeEach(angular.mock.module(movieServiceModule));

  // instantiate service
  var movieService;
  beforeEach(inject(function (_movieService_) {
    movieService = _movieService_;
  }));

  it('should do something', function () {
    expect(!!movieService).to.be.true;
  });

});
