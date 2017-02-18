'use strict';
import movieService from '../movieService/movieService.service';
import search from './search.component';

describe('Component: SearchComponent', () => {
  // load the controller's module
  beforeEach(angular.mock.module(search));
  beforeEach(angular.mock.module(movieService));
  beforeEach(angular.mock.module('stateMock'));

  let searchComponent;
  let scope;
  let state;
  let stateparams;
  let $httpBackend;

  describe('success query', () => {
    // Initialize the controller and a mock scope
    beforeEach(inject(function(_$httpBackend_, $componentController, movieService, $rootScope, $state) {
      $httpBackend = _$httpBackend_;
      scope = $rootScope.$new();
      state = $state;
      stateparams = {query: 'batman'};
      searchComponent = $componentController('search', {
        $scope: scope,
        movieService,
        $stateParams: stateparams
      });

      $httpBackend.expectGET('/api/search/movies/batman')
        .respond({
          results: [
            {
              guideboxID: 44024,
              title: 'Batman',
              releaseYear: 1989,
              themoviedb: 268,
              originalTitle: 'Batman',
              alternateTitles: ['Batman (1989)', 'Batman - (1989)', 'Batman 1', 'Batman (Classic) 1'],
              imdb: 'tt0096895',
              preOrder: false,
              inTheaters: false,
              releaseDate: '1989-06-23',
              rating: 'PG-13',
              rottentomatoes: 10483,
              freebase: '/m/01hp5',
              wikipediaID: 4726,
              metacritic: null,
              commonSenseMedia: null,
              poster120x171: 'http://static-api.guidebox.com/120214/thumbnails_movies_small/44024-9535149913-9041338297-7465376756-small-120x171-alt-.jpg',
              poster240x342: 'http://static-api.guidebox.com/120214/thumbnails_movies_medium/44024-3294257154-3619373683-7974530933-medium-240x342-alt-.jpg',
              poster400x570: 'http://static-api.guidebox.com/120214/thumbnails_movies/-alt--44024-8750495747-1073068600-7481942135-large-400x570-alt-.jpg'
            }, {
              guideboxID: 134701,
              title: 'Batman v Superman: Dawn of Justice',
              releaseYear: 2016,
              themoviedb: 209112,
              originalTitle: 'Batman v Superman: Dawn of Justice',
              alternateTitles: ['Batman V. Superman: Dawn Of Justice', 'Batman v Superman: Dawn Of Justice Ultimate Edition Bundle', 'Batman v Superman: Dawn of Justice (Ultimate Edition)', 'Batman v Superman: Dawn of Justice (plus bonus features)', 'Batman v Superman: Dawn of Justice (Extended Cut)', 'Batman v Superman: Dawn Of Justice Ultimate Edition', 'Batman v Superman: Dawn of Justice (Ultimate Edition) (plus bonus features)', 'Batman v Superman: Dawn of Justice + Bonus', 'Batman v Superman: Dawn of Justice (Theatrical)'],
              imdb: 'tt2975590',
              preOrder: false,
              inTheaters: false,
              releaseDate: '2016-03-23',
              rating: 'PG-13',
              rottentomatoes: 771363115,
              freebase: '/m/0wrshm2',
              wikipediaID: 2619910,
              metacritic: 'http://www.metacritic.com/movie/batman-v-superman-dawn-of-justice',
              commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/batman-v-superman-dawn-of-justice',
              poster120x171: 'http://static-api.guidebox.com/111615/thumbnails_movies_small/134701-4814312095-4459750019-4413319947-small-120x171-alt-.jpg',
              poster240x342: 'http://static-api.guidebox.com/111615/thumbnails_movies_medium/134701-3192860480-495980070-6602217480-medium-240x342-alt-.jpg',
              poster400x570: 'http://static-api.guidebox.com/111615/thumbnails_movies/-alt--134701-8375116367-7619700012-3932971675-large-400x570-alt-.jpg'
            }, {
              guideboxID: 51801,
              title: 'Batman Begins',
              releaseYear: 2005,
              themoviedb: 272,
              originalTitle: 'Batman Begins',
              alternateTitles: ['Batman 5: Batman Begins', 'Batman Dark Knight 1: Batman Begins', 'Batman 5 - Batman Begins', 'Batman Begins + Bonus Content: Xbox SmartGlass'],
              imdb: 'tt0372784',
              preOrder: false,
              inTheaters: false,
              releaseDate: '2005-06-14',
              rating: 'PG-13',
              rottentomatoes: 1122,
              freebase: '/m/02fqrf',
              wikipediaID: 481605,
              metacritic: 'http://www.metacritic.com/movie/batman-begins',
              commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/batman-begins',
              poster120x171: 'http://static-api.guidebox.com/thumbnails_movies_small/51801-2868169453-5152096944-3745936682-small-120x171.jpg',
              poster240x342: 'http://static-api.guidebox.com/thumbnails_movies_medium/51801-3506040322-1411033087-2453092267-medium-240x342.jpg',
              poster400x570: 'http://static-api.guidebox.com/thumbnails_movies/51801-3329003332-5124021554-2013295275-large-400x570.jpg'
            }, {
              guideboxID: 25709,
              title: 'Batman Forever',
              releaseYear: 1995,
              themoviedb: 414,
              originalTitle: 'Batman Forever',
              alternateTitles: ['Batman 3 - Batman Forever', 'Batman (Classic) 3 - Batman Forever'],
              imdb: 'tt0112462',
              preOrder: false,
              inTheaters: false,
              releaseDate: '1995-05-31',
              rating: 'PG-13',
              rottentomatoes: 11174,
              freebase: '/m/01hr1',
              wikipediaID: 4730,
              metacritic: 'http://www.metacritic.com/movie/batman-forever',
              commonSenseMedia: null,
              poster120x171: 'http://static-api.guidebox.com/120214/thumbnails_movies_small/25709-389693608-9619818450-4625547803-small-120x171-alt-.jpg',
              poster240x342: 'http://static-api.guidebox.com/120214/thumbnails_movies_medium/25709-8549939771-912015825-3414688385-medium-240x342-alt-.jpg',
              poster400x570: 'http://static-api.guidebox.com/120214/thumbnails_movies/-alt--25709-1741781570-8777569444-1734709945-large-400x570-alt-.jpg'
            }
          ], total_results: 4
        });
    }));

    it('should be able to search', () => {
      searchComponent.$onInit();
      $httpBackend.flush();
      expect(searchComponent.results).to.have.length(4);
    });
  });

  describe('failed query', () => {
    // Initialize the controller and a mock scope
    beforeEach(inject(function(_$httpBackend_, $componentController, movieService, $rootScope, $state) {
      $httpBackend = _$httpBackend_;
      scope = $rootScope.$new();
      state = $state;
      stateparams = {query: 'failquery'};

      $httpBackend.expectGET('/api/search/movies/failquery')
        .respond(500);

      searchComponent = $componentController('search', {
        movieService,
        $scope: scope,
        $stateParams: stateparams,
      });
    }));

    it('should handle rejection', () => {
      searchComponent.$onInit();
      $httpBackend.flush();
      expect(searchComponent.results).to.have.length(0);
    });
  });
  describe('missing query params', () => {
    // Initialize the controller and a mock scope
    beforeEach(inject(function(_$httpBackend_, $componentController, movieService, $rootScope, $state) {
      $httpBackend = _$httpBackend_;
      scope = $rootScope.$new();
      state = $state;
      stateparams = {query: null};

      searchComponent = $componentController('search', {
        movieService,
        $scope: scope,
        $stateParams: stateparams,
      });
    }));

    it('should not perform search', () => {
      searchComponent.$onInit();
      expect(searchComponent.results).to.have.length(0);
    });
  });
});
