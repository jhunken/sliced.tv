'use strict';

import media from './media.component';
import watchlistService from '../services/watchlistService/watchlistService.service';
import 'angular-ui-notification';
import sinon from 'sinon';


describe('Component: MediaComponent', function() {
  beforeEach(angular.mock.module(media));
  beforeEach(angular.mock.module(watchlistService));
  beforeEach(angular.mock.module('stateMock'));
  beforeEach(angular.mock.module('ui-notification'));

  let scope;
  let mediaComponent;
  let $httpBackend;
  let stateparams;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, watchlistService, Notification) {
    $httpBackend = _$httpBackend_;
    stateparams = {id: 12345, mediaType: 'movie'};
    $httpBackend.expectGET('/api/movies/12345')
      .respond({_id: 12345, guideboxID: 56789, title: 'fake movie'});

    scope = $rootScope.$new();
    mediaComponent = $componentController('media', {
      $http,
      $scope: scope,
      $stateParams: stateparams,
      Notification
    });
  }));

  // Clean up spies
  after(function() {
    mediaComponent.Notification.error.restore();
  });

  it('should attach a movie to the controller', function() {
    mediaComponent.$onInit();
    $httpBackend.flush();
    expect(mediaComponent.media.title)
      .to.equal('fake movie');
  });

  it('should add a media item to the watchlist', function() {
    sinon.spy(mediaComponent.watchlistService, 'add');
    mediaComponent.addToWatchlist({_id: 12345, guideboxID: 56789, title: 'fake movie'});
    scope.$apply();
    expect(mediaComponent.watchlistService.add).calledOnce;
  });

  it('should movie an error Notification for an invalid media item', function() {
    sinon.spy(mediaComponent.Notification, 'error');
    mediaComponent.addToWatchlist('foo');
    scope.$apply();
    expect(mediaComponent.Notification.error).calledOnce;
  });

  it('should notify the user if media id is missing', function() {
    sinon.spy(mediaComponent.Notification, 'error');
    mediaComponent.addToWatchlist();
    scope.$apply();
    expect(mediaComponent.Notification.error).calledWith('An unexpected error occurred.');
  });
});
