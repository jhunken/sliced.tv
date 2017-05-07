'use strict';

import media from './media.component';
import watchlistService from '../services/watchlistService/watchlistService.service';
import 'angular-ui-notification';


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
    scope = $rootScope.$new();
    mediaComponent = $componentController('media', {
      $http,
      $scope: scope,
      $stateParams: stateparams,
      Notification
    });
  }));

  it('should attach a movie to the controller', function() {
    $httpBackend.expectGET('/api/movies/12345')
      .respond({_id: 12345, guideboxID: 56789, title: 'fake movie'});
    mediaComponent.$onInit();
    $httpBackend.flush();
    expect(mediaComponent.media.title)
      .to.equal('fake movie');
  });
});
