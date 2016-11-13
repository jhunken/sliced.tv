'use strict';

var config = browser.params;

describe('Main View', function() {
  var page;

  beforeEach(function() {
    let promise = browser.get(config.baseUrl + '/');
    page = require('./main.po');
    return promise;
  });

  it('should include jumbotron with correct data', function() {
    //TODO: Add tests
    expect(1).to.equal(1);
  });
});
