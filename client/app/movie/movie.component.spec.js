'use strict';

import movie from './movie.component';
import watchlistService from '../services/watchlistService/watchlistService.service';
import 'angular-ui-notification';
import sinon from 'sinon';


describe('Component: MovieComponent', function() {
  beforeEach(angular.mock.module(movie));
  beforeEach(angular.mock.module(watchlistService));
  beforeEach(angular.mock.module('stateMock'));
  beforeEach(angular.mock.module('ui-notification'));

  let scope;
  let movieComponent;
  let $httpBackend;
  let stateparams;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, watchlistService, Notification) {
    $httpBackend = _$httpBackend_;
    stateparams = {id: 12345};
    $httpBackend.expectGET('/api/movies/12345')
      .respond({_id: 12345, guideboxID: 56789, title: 'fake movie'});

    scope = $rootScope.$new();
    movieComponent = $componentController('movie', {
      $http,
      $scope: scope,
      $stateParams: stateparams,
      Notification
    });
  }));

  // Clean up spies
  after(function() {
    movieComponent.Notification.error.restore();
    movieComponent.watchlistService.add.restore();
  });

  it('should attach a movie to the controller', function() {
    movieComponent.$onInit();
    $httpBackend.flush();
    expect(movieComponent.movie.title)
      .to.equal('fake movie');
  });

  it('should add a media item to the watchlist', function() {
    sinon.spy(movieComponent.watchlistService, 'add');
    movieComponent.addToWatchlist({_id: 12345, guideboxID: 56789, title: 'fake movie'});
    scope.$apply();
    expect(movieComponent.watchlistService.add).calledOnce;
  });

  it('should movie an error Notification for an invalid media item', function() {
    sinon.spy(movieComponent.Notification, 'error');
    movieComponent.addToWatchlist('foo');
    scope.$apply();
    expect(movieComponent.Notification.error).calledOnce;
  });

  it('should notify the user if media id is missing', function() {
    sinon.spy(movieComponent.Notification, 'error');
    movieComponent.addToWatchlist();
    scope.$apply();
    expect(movieComponent.Notification.error).calledWith('An unexpected error occurred.');
  });
});
