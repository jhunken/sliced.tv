'use strict';

describe('Component: MovieComponent', function () {

  // load the controller's module
  beforeEach(module('easierTvApp'));

  var MovieComponent
    , scope
    , state
    , $httpBackend
    , stateparams;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_,
                              $http,
                              $componentController,
                              $rootScope,
                              $state,
                              socket) {
    $httpBackend = _$httpBackend_;
    stateparams = {id: 12345};
    $httpBackend.expectGET('/api/movies/12345')
      .respond({_id: 12345, guidebox_id: 12345, title: 'fake movie'});

    scope = $rootScope.$new();
    state = $state;
    MovieComponent = $componentController('movie', {
      $http: $http,
      $scope: scope,
      socket: socket,
      $stateParams: stateparams
    });
  }));

  it('should attach a movie to the controller', function () {
    MovieComponent.$onInit();
    $httpBackend.flush();
    expect(MovieComponent.movie.title).to.equal('fake movie');
  });
});
