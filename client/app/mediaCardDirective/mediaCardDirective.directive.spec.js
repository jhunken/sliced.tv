'use strict';

import mediaCardDirective from './mediaCardDirective.directive';
import watchlistService from '../services/watchlistService/watchlistService.service';

describe('Directive: mediaCardDirective', function() {
  beforeEach(angular.mock.module(mediaCardDirective));
  beforeEach(angular.mock.module(watchlistService));
  beforeEach(angular.mock.module('stateMock'));
  beforeEach(angular.mock.module('ui-notification'));

  let element;
  let scope;
  let $httpBackend;

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

  beforeEach(inject(function($rootScope, watchlistService, _$httpBackend_, Notification) {
    $httpBackend = _$httpBackend_;
    scope = $rootScope.$new();
    scope.media = {
      _id: '58aa0ff1bb5308ab3ef55555',
      imdbRating: 6.6
    };
  }));

  it('should bind to the media element', inject(function($compile) {
    element = angular.element('<media-card-directive media-type="movie"></media-card-directive>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.contain('IMDB: 6.6');
  }));

  it('should have a working +Watchlist button', inject(function($compile) {
    $httpBackend.expectGET('/api/watchlists/')
      .respond(watchlistsResponse);
    element = angular.element('<media-card-directive media-type="movie"></media-card-directive>');
    element = $compile(element)(scope);
    scope.$apply();
    let watchlistButton = element.find('button');
    watchlistButton.triggerHandler('click');
    scope.$digest();
    $httpBackend.flush();
  }));
});
