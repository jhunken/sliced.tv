'use strict';

describe('Component: mainComponent', function() {

  // load the controller's module
  beforeEach(module('easierTvApp'));
  beforeEach(module('stateMock'));
  beforeEach(module('socketMock'));

  var scope;
  var mainComponent;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(
    _$httpBackend_,
    $http,
    $componentController,
    $rootScope,
    $state,
    socket) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/api/movies')
        .respond([]);

      scope = $rootScope.$new();
      state = $state;
      mainComponent = $componentController('main', {
        $http: $http,
        $scope: scope,
        socket: socket
      });
  }));

  it('should attach an array of movies to the controller', function() {
    mainComponent.$onInit();
    $httpBackend.flush();
    expect(mainComponent.movies.length).to.equal(0);
  });
});
