'use strict';

let proxyquire = require('proxyquire').noPreserveCache();

let searchCtrlStub = {
  search: 'searchCtrl.search',
};


let routerStub = {
  get: sinon.spy(),
};

// require the index with our stubbed out modules
let searchIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './search.controller': searchCtrlStub
});

describe('Search API Router:', function() {
  it('should return an express router instance', function() {
    expect(searchIndex).to.equal(routerStub);
  });

  describe('GET /api/search/:query', function() {
    it('should route to search.controller.search', function() {
      expect(routerStub.get
        .withArgs('/:query', 'searchCtrl.search')
      ).to.have.been.calledOnce;
    });
  });
});
