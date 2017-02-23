'use strict';

import show from './show.component';
import watchlistService from '../services/watchlistService/watchlistService.service';


describe('Component: ShowComponent', function() {
  beforeEach(angular.mock.module(show));
  beforeEach(angular.mock.module(watchlistService));
  beforeEach(angular.mock.module('stateMock'));

  let scope;
  let showComponent;
  let $httpBackend;
  let stateparams;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, watchlistService) {
    $httpBackend = _$httpBackend_;
    stateparams = {id: 12345};
    $httpBackend.expectGET('/api/shows/12345')
      .respond({_id: 12345, guideboxID: 56789, title: 'fake show'});

    scope = $rootScope.$new();
    showComponent = $componentController('show', {
      $http,
      $scope: scope,
      $stateParams: stateparams
    });
  }));

  it('should attach a show to the controller', function() {
    showComponent.$onInit();
    $httpBackend.flush();
    expect(showComponent.show.title)
      .to.equal('fake show');
  });
});
