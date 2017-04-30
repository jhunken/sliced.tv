'use strict';

import mediaCardDirective from './mediaCardDirective.directive';
import watchlistService from '../services/watchlistService/watchlistService.service';
import Auth from '../../components/auth/auth.module';
import sinon from 'sinon';

describe('Directive: mediaCardDirective', function() {
  beforeEach(angular.mock.module(mediaCardDirective));
  beforeEach(angular.mock.module(watchlistService));
  beforeEach(angular.mock.module(Auth));
  beforeEach(angular.mock.module('stateMock'));
  beforeEach(angular.mock.module('ui-notification'));

  let element;
  let scope;
  let $httpBackend;
  let $resource;
  let ctrl;

  let watchlistsResponse = [{
    __v: 0,
    name: 'Watchlist',
    user: {
      _id: '58aa0ff1bb5308ab3ef50499',
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      __v: 0,
      role: 'user'
    },
    _id: '58aa1008bb5308ab3ef504c0',
    movies: []
  }];

  beforeEach(inject(function($rootScope, watchlistService, _$httpBackend_, Notification, $controller, Auth, _$resource_) {
    $httpBackend = _$httpBackend_;
    $resource = _$resource_;
    scope = $rootScope.$new();
    scope.media = {
      _id: '58aa0ff1bb5308ab3ef55555',
      imdbRating: 6.6
    };
  }));


  it('should bind to the media element', inject(function($compile) {
    $httpBackend.expectGET('/api/watchlists/')
      .respond(watchlistsResponse);
    element = angular.element('<media-card-directive media-type="movie" data-media="media"></media-card-directive>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.contain('IMDB: 6.6');
  }));

  it('should have a working +Watchlist button', inject(function($compile, Auth) {
    $httpBackend.expectGET('/api/watchlists/')
      .respond(watchlistsResponse);
    element = angular.element('<media-card-directive media-type="movie" data-media="media"></media-card-directive>');
    element = $compile(element)(scope);
    scope.$apply();
    let watchlistButton = element.find('button');
    watchlistButton.triggerHandler('click');
    scope.$digest();
    $httpBackend.flush();
  }));

  it('should add a media item to the watchlist as a movie', inject(function($compile, $rootScope, watchlistService) {
    $httpBackend.expectGET('/api/watchlists/')
      .respond([{
        _id: '5904d74100e98c0f0a89bad1',
        name: 'Watchlist',
        owner: '5904d74000e98c0f0a89bacf',
        __v: 0,
        shows: [],
        movies: [],
        collaborators: []
      }]);
    let mediaItem = {_id: 12345, guideboxID: 56789, title: 'fake movie'};
    element = angular.element('<media-card-directive media-type="movie" data-media="media"></media-card-directive>');
    element = $compile(element)(scope);
    $rootScope.$digest();

    $httpBackend.expectPATCH('/api/watchlists/5904d74100e98c0f0a89bad1/movies/58aa0ff1bb5308ab3ef55555')
      .respond(200);

    // Grab scope. Depends on type of scope.
    // See angular.element documentation.
    scope = element.isolateScope() || element.scope();
    expect(scope.media.inWatchlist).to.be.undefined;

    scope.modifyWatchlist(mediaItem, true);
    $httpBackend.flush();
    scope.$digest();
    expect(scope.media.inWatchlist).to.be.true;
  }));

  it('should add a media item to the watchlist as a show', inject(function($compile, $rootScope, watchlistService) {
    $httpBackend.expectGET('/api/watchlists/')
      .respond([{
        _id: '5904d74100e98c0f0a89bad1',
        name: 'Watchlist',
        owner: '5904d74000e98c0f0a89bacf',
        __v: 0,
        shows: [],
        movies: [],
        collaborators: []
      }]);
    let mediaItem = {_id: 12345, guideboxID: 56789, title: 'fake show'};
    element = angular.element('<media-card-directive media-type="show" data-media="media"></media-card-directive>');
    element = $compile(element)(scope);
    $rootScope.$digest();

    $httpBackend.expectDELETE('/api/watchlists/5904d74100e98c0f0a89bad1/shows/58aa0ff1bb5308ab3ef55555')
      .respond(200);

    // Grab scope. Depends on type of scope.
    // See angular.element documentation.
    scope = element.isolateScope() || element.scope();
    expect(scope.media.inWatchlist).to.be.undefined;

    scope.modifyWatchlist(mediaItem, false);
    $httpBackend.flush();
    scope.$digest();
    expect(scope.media.inWatchlist).to.be.true;
  }));
});
