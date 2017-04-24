'use strict';

import show from './show.component';
import watchlistService from '../services/watchlistService/watchlistService.service';
import 'angular-ui-notification';
import sinon from 'sinon';


describe('Component: ShowComponent', function() {
  beforeEach(angular.mock.module(show));
  beforeEach(angular.mock.module(watchlistService));
  beforeEach(angular.mock.module('stateMock'));
  beforeEach(angular.mock.module('ui-notification'));

  let scope;
  let showComponent;
  let $httpBackend;
  let stateparams;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, watchlistService, Notification) {
    $httpBackend = _$httpBackend_;
    stateparams = {id: 12345};
    $httpBackend.expectGET('/api/shows/12345')
      .respond({_id: 12345, guideboxID: 56789, title: 'fake show'});

    scope = $rootScope.$new();
    showComponent = $componentController('show', {
      $http,
      $scope: scope,
      $stateParams: stateparams,
      Notification
    });
  }));

  // Clean up spies
  after(function() {
    showComponent.Notification.error.restore();
    showComponent.watchlistService.add.restore();
  });

  it('should attach a show to the controller', function() {
    showComponent.$onInit();
    $httpBackend.flush();
    expect(showComponent.show.title)
      .to.equal('fake show');
  });

  it('should add a media item to the watchlist', function() {
    sinon.spy(showComponent.watchlistService, 'add');
    showComponent.addToWatchlist({_id: 12345, guideboxID: 56789, title: 'fake show'});
    scope.$apply();
    expect(showComponent.watchlistService.add).calledOnce;
  });

  it('should show an error Notification for an invalid media item', function() {
    sinon.spy(showComponent.Notification, 'error');
    showComponent.addToWatchlist('foo');
    scope.$apply();
    expect(showComponent.Notification.error).calledOnce;
  });

  it('should notify the user if media id is missing', function() {
    sinon.spy(showComponent.Notification, 'error');
    showComponent.addToWatchlist();
    scope.$apply();
    expect(showComponent.Notification.error).calledWith('An unexpected error occurred.');
  });
});
