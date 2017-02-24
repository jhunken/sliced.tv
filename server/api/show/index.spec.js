'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var showCtrlStub = {
  index: 'showCtrl.index',
  show: 'showCtrl.show',
  create: 'showCtrl.create',
  upsert: 'showCtrl.upsert',
  patch: 'showCtrl.patch',
  destroy: 'showCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var showIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './show.controller': showCtrlStub
});

describe('Show API Router:', function() {
  it('should return an express router instance', function() {
    expect(showIndex).to.equal(routerStub);
  });

  describe('GET /api/shows', function() {
    it('should route to show.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'showCtrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/shows/:id', function() {
    it('should route to show.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'showCtrl.show')
        ).to.have.been.calledOnce;
    });
  });
});
