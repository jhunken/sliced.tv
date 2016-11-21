'use strict';

import movie from './movie.component';
import {
  MovieController
} from './movie.component';

describe('Component: MovieComponent', function() {
  beforeEach(angular.mock.module(movie));
  beforeEach(angular.mock.module('stateMock'));

  var scope;
  var movieComponent;
  var state;
  var $httpBackend;
  var stateparams;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, $state) {
    $httpBackend = _$httpBackend_;
    stateparams = {id: 12345};
    $httpBackend.expectGET('/api/movies/12345')
      .respond({_id: 12345, guidebox_id: 12345, title: 'fake movie'});

    scope = $rootScope.$new();
    state = $state;
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
