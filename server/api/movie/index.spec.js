'use strict';
/* globals sinon, describe, expect, it */

let proxyquire = require('proxyquire').noPreserveCache();

let movieCtrlStub = {
  index: 'movieCtrl.index',
  show: 'movieCtrl.show',
  create: 'movieCtrl.create',
  update: 'movieCtrl.update',
  destroy: 'movieCtrl.destroy'
};


let routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
let movieIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './movie.controller': movieCtrlStub
});

describe('Movie API Router:', function() {
  it('should return an express router instance', function() {
    expect(movieIndex).to.equal(routerStub);
  });

  describe('GET /api/movies', function() {
    it('should route to movie.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'movieCtrl.index')
      ).to.have.been.calledOnce;
    });
  });
  describe('GET /api/movies/all/:offset/:limit/:sources/:platform', function() {
    it('should route to movie.controller.index with given params', function() {
      expect(routerStub.get
        .withArgs('/all/:offset/:limit/:sources/:platform', 'movieCtrl.index')
      ).to.have.been.calledOnce;
    });
  });
  describe('GET /api/movies/:id', function() {
    it('should route to movie.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'movieCtrl.show')
      ).to.have.been.calledOnce;
    });
  });
});
