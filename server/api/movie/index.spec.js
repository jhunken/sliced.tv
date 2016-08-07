'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var movieCtrlStub = {
  index   : 'movieCtrl.index',
  show    : 'movieCtrl.show',
  create  : 'movieCtrl.create',
  update  : 'movieCtrl.update',
  destroy : 'movieCtrl.destroy'
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
  get    : sinon.spy()
};

// require the index with our stubbed out modules
var movieIndex = proxyquire('./index.js', {
  'express'                 : {
    Router : function () {
      return routerStub;
    }
  },
  './movie.controller'      : movieCtrlStub,
  '../../auth/auth.service' : authServiceStub
});

describe('Movie API Router:', function () {

  it('should return an express router instance', function () {
    expect(movieIndex).to.equal(routerStub);
  });

  describe('GET /api/movies', function () {

    it('should be authenticated and route to movie.controller.index', function () {
      expect(routerStub.get
        .withArgs('/', 'authService.isAuthenticated', 'movieCtrl.index')
      ).to.have.been.calledOnce;
    });

  });
  describe('GET /api/movies/all/:start/:limit/:sources/:platform', function () {

    it('should be authenticated and route to movie.controller.index', function () {
      expect(routerStub.get
        .withArgs('/all/:start/:limit/:sources/:platform', 'authService.isAuthenticated', 'movieCtrl.index')
      ).to.have.been.calledOnce;
    });

  });
  describe('GET /api/movies/:id', function () {

    it('should be authenticated and route to movie.controller.show', function () {
      expect(routerStub.get
        .withArgs('/:id', 'authService.isAuthenticated', 'movieCtrl.show')
      ).to.have.been.calledOnce;
    });

  });

});
