'use strict';

import main from './main.component';
import {
  MainController
} from './main.component';

describe('Component: MainComponent', function () {

  beforeEach(angular.mock.module(main));
  beforeEach(angular.mock.module('stateMock'));
  beforeEach(angular.mock.module('socketMock'));

  var scope;
  var mainComponent;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $http, $componentController, $rootScope, $state,
                              socket) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/movies')
      .respond([]);

    scope         = $rootScope.$new();
    state         = $state;
    mainComponent = $componentController('main', {
      $http  : $http,
      $scope : scope,
      socket : socket
    });
  }));

  it('should attach a list of movies to the controller', function () {
    mainComponent.$onInit();
    $httpBackend.flush();
    expect(mainComponent.movies.length)
      .to.equal(0);
  });
});
