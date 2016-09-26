'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var updateCtrlStub = {
  newMovies : 'updateCtrl.newMovies'
};

var authServiceStub = {
  isAuthenticated() {
    return 'authService.isAuthenticated';
  },
  hasRole(role) {
    return 'authService.hasRole.' + role;
  }
};

var routerStub = {
  get : sinon.spy()
};

// require the index with our stubbed out modules
var updateIndex = proxyquire('./index.js', {
  express               : {
    Router() {
      return routerStub;
    }
  },
  './update.controller' : updateCtrlStub,
  '../../auth/auth.service' : authServiceStub
});

describe('Update API Router:', function () {
  it('should return an express router instance', function () {
    expect(updateIndex).to.equal(routerStub);
  });

  describe('GET /api/updates/movies/new', function () {
    // it('should be authenticated and route to update.controller.newMovies', function () {
    //   expect(routerStub.get
    //     .withArgs('/movies/new', 'authService.isAuthenticated', 'updateCtrl.newMovies')
    //   ).to.have.been.calledOnce;
    // });

    // it('should route to update.controller.newMovies', function () {
    //   expect(routerStub.get
    //     .withArgs('/movies/new', 'updateCtrl.newMovies')
    //   ).to.have.been.calledOnce;
    // });
  });
});
