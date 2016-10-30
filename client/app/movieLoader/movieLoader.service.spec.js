'use strict';

describe('Service: movieLoader', function() {
  // load the service's module
  beforeEach(module('easierTvApp.movieLoader'));

  // instantiate service
  var movieLoader;
  beforeEach(inject(function(_movieLoader_) {
    movieLoader = _movieLoader_;
  }));

  it('should do something', function() {
    expect(!!movieLoader).to.be.true;
  });
});
