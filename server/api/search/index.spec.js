'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var searchCtrlStub = {
  searchAll: 'searchCtrl.searchAll',
  searchMovies: 'searchCtrl.searchMovies',
  searchShows: 'searchCtrl.searchShows'
};

var authServiceStub = {
  isAuthenticated() {
    return 'authService.isAuthenticated';
  },
  hasRole(role) {
    return `authService.hasRole.${role}`;
  }
};
var routerStub = {
  get: sinon.spy(),
};

// require the index with our stubbed out modules
var searchIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './search.controller': searchCtrlStub,
  '../../auth/auth.service': authServiceStub
});

describe('Search API Router:', function() {
  it('should return an express router instance', function() {
    expect(searchIndex).to.equal(routerStub);
  });

  describe('GET /api/search/:query', function() {
    it('should route to search.controller.searchAll', function() {
      expect(routerStub.get
        .withArgs('/:query', 'authService.isAuthenticated', 'searchCtrl.searchAll')
      ).to.have.been.calledOnce;
    });
  });
  describe('GET /api/search/movies/:query', function() {
    it('should route to search.controller.searchMovies', function() {
      expect(routerStub.get
        .withArgs('/movies/:query', 'authService.isAuthenticated', 'searchCtrl.searchMovies')
      ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/search/shows/:query', function() {
    it('should route to search.controller.searchMovies', function() {
      expect(routerStub.get
        .withArgs('/shows/:query', 'authService.isAuthenticated', 'searchCtrl.searchShows')
      ).to.have.been.calledOnce;
    });
  });
});
