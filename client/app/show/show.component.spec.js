'use strict';

import show from './show.component';
import watchlistService from '../services/watchlistService/watchlistService.service';
import 'angular-ui-notification';

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

  it('should attach a show to the controller', function() {
    showComponent.$onInit();
    $httpBackend.flush();
    expect(showComponent.show.title)
      .to.equal('fake show');
  });
});
