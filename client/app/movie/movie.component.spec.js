'use strict';

import movie from './movie.component';
import watchlistService from '../services/watchlistService/watchlistService.service';


describe('Component: MovieComponent', function() {
  beforeEach(angular.mock.module(movie));
  beforeEach(angular.mock.module(watchlistService));
  beforeEach(angular.mock.module('stateMock'));

  let scope;
  let movieComponent;
  let $httpBackend;
  let stateparams;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, watchlistService) {
    $httpBackend = _$httpBackend_;
    stateparams = {id: 12345};
    $httpBackend.expectGET('/api/movies/12345')
      .respond({_id: 12345, guideboxID: 56789, title: 'fake movie'});

    scope = $rootScope.$new();
    movieComponent = $componentController('movie', {
      $http,
      $scope: scope,
      $stateParams: stateparams
    });
  }));

  it('should attach a list of movies to the controller', function() {
    movieComponent.$onInit();
    $httpBackend.flush();
    expect(movieComponent.movie.title)
      .to.equal('fake movie');
  });
});
