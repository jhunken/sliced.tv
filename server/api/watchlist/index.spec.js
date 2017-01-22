'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var watchlistCtrlStub = {
  index: 'watchlistCtrl.index',
  show: 'watchlistCtrl.show',
  create: 'watchlistCtrl.create',
  upsert: 'watchlistCtrl.upsert',
  patch: 'watchlistCtrl.patch',
  destroy: 'watchlistCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var watchlistIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './watchlist.controller': watchlistCtrlStub
});

describe('Watchlist API Router:', function() {
  it('should return an express router instance', function() {
    expect(watchlistIndex).to.equal(routerStub);
  });

  describe('GET /api/watchlists', function() {
    it('should route to watchlist.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'watchlistCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/watchlists/:id', function() {
    it('should route to watchlist.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'watchlistCtrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/watchlists', function() {
    it('should route to watchlist.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'watchlistCtrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/watchlists/:id', function() {
    it('should route to watchlist.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'watchlistCtrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/watchlists/:id', function() {
    it('should route to watchlist.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'watchlistCtrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/watchlists/:id', function() {
    it('should route to watchlist.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'watchlistCtrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
