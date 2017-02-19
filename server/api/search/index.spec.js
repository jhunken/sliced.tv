'use strict';

let proxyquire = require('proxyquire').noPreserveCache();

let searchCtrlStub = {
  searchAll: 'searchCtrl.searchAll',
  searchMovies: 'searchCtrl.searchMovies',
  searchShows: 'searchCtrl.searchShows'
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
    it('should route to search.controller.searchAll', function() {
      expect(routerStub.get
        .withArgs('/:query', 'searchCtrl.searchAll')
      ).to.have.been.calledOnce;
    });
  });
  describe('GET /api/search/movies/:query', function() {
    it('should route to search.controller.searchMovies', function() {
      expect(routerStub.get
        .withArgs('/movies/:query', 'searchCtrl.searchMovies')
      ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/search/shows/:query', function() {
    it('should route to search.controller.searchMovies', function() {
      expect(routerStub.get
        .withArgs('/shows/:query', 'searchCtrl.searchShows')
      ).to.have.been.calledOnce;
    });
  });
});
