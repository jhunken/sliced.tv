'use strict';
import movieService from '../movieService/movieService.service';
import search from './search.component';
import {SearchComponent} from './search.component';


describe('Component: SearchComponent', function () {
  // load the controller's module
  beforeEach(angular.mock.module(search));
  beforeEach(angular.mock.module(movieService));
  beforeEach(angular.mock.module('stateMock'));

  var SearchComponent;
  var scope;
  var state;
  var stateparams;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $componentController, movieService, $rootScope, $state) {
    $httpBackend = _$httpBackend_;
    scope        = $rootScope.$new();
    state        = $state;
    stateparams  = {query : 'batman'};

    $httpBackend.expectGET('/api/search/movies/batman')
      .respond({
        "results"          : [
          {
            "id"                 : 44024,
            "title"              : "Batman",
            "release_year"       : 1989,
            "themoviedb"         : 268,
            "original_title"     : "Batman",
            "alternate_titles"   : ["Batman (1989)", "Batman - (1989)", "Batman 1", "Batman (Classic) 1"],
            "imdb"               : "tt0096895",
            "pre_order"          : false,
            "in_theaters"        : false,
            "release_date"       : "1989-06-23",
            "rating"             : "PG-13",
            "rottentomatoes"     : 10483,
            "freebase"           : "/m/01hp5",
            "wikipedia_id"       : 4726,
            "metacritic"         : null,
            "common_sense_media" : null,
            "poster_120x171"     : "http://static-api.guidebox.com/120214/thumbnails_movies_small/44024-9535149913-9041338297-7465376756-small-120x171-alt-.jpg",
            "poster_240x342"     : "http://static-api.guidebox.com/120214/thumbnails_movies_medium/44024-3294257154-3619373683-7974530933-medium-240x342-alt-.jpg",
            "poster_400x570"     : "http://static-api.guidebox.com/120214/thumbnails_movies/-alt--44024-8750495747-1073068600-7481942135-large-400x570-alt-.jpg"
          }, {
            "id"                 : 134701,
            "title"              : "Batman v Superman: Dawn of Justice",
            "release_year"       : 2016,
            "themoviedb"         : 209112,
            "original_title"     : "Batman v Superman: Dawn of Justice",
            "alternate_titles"   : ["Batman V. Superman: Dawn Of Justice", "Batman v Superman: Dawn Of Justice Ultimate Edition Bundle", "Batman v Superman: Dawn of Justice (Ultimate Edition)", "Batman v Superman: Dawn of Justice (plus bonus features)", "Batman v Superman: Dawn of Justice (Extended Cut)", "Batman v Superman: Dawn Of Justice Ultimate Edition", "Batman v Superman: Dawn of Justice (Ultimate Edition) (plus bonus features)", "Batman v Superman: Dawn of Justice + Bonus", "Batman v Superman: Dawn of Justice (Theatrical)"],
            "imdb"               : "tt2975590",
            "pre_order"          : false,
            "in_theaters"        : false,
            "release_date"       : "2016-03-23",
            "rating"             : "PG-13",
            "rottentomatoes"     : 771363115,
            "freebase"           : "/m/0wrshm2",
            "wikipedia_id"       : 2619910,
            "metacritic"         : "http://www.metacritic.com/movie/batman-v-superman-dawn-of-justice",
            "common_sense_media" : "https://www.commonsensemedia.org/movie-reviews/batman-v-superman-dawn-of-justice",
            "poster_120x171"     : "http://static-api.guidebox.com/111615/thumbnails_movies_small/134701-4814312095-4459750019-4413319947-small-120x171-alt-.jpg",
            "poster_240x342"     : "http://static-api.guidebox.com/111615/thumbnails_movies_medium/134701-3192860480-495980070-6602217480-medium-240x342-alt-.jpg",
            "poster_400x570"     : "http://static-api.guidebox.com/111615/thumbnails_movies/-alt--134701-8375116367-7619700012-3932971675-large-400x570-alt-.jpg"
          }, {
            "id"                 : 51801,
            "title"              : "Batman Begins",
            "release_year"       : 2005,
            "themoviedb"         : 272,
            "original_title"     : "Batman Begins",
            "alternate_titles"   : ["Batman 5: Batman Begins", "Batman Dark Knight 1: Batman Begins", "Batman 5 - Batman Begins", "Batman Begins + Bonus Content: Xbox SmartGlass"],
            "imdb"               : "tt0372784",
            "pre_order"          : false,
            "in_theaters"        : false,
            "release_date"       : "2005-06-14",
            "rating"             : "PG-13",
            "rottentomatoes"     : 1122,
            "freebase"           : "/m/02fqrf",
            "wikipedia_id"       : 481605,
            "metacritic"         : "http://www.metacritic.com/movie/batman-begins",
            "common_sense_media" : "https://www.commonsensemedia.org/movie-reviews/batman-begins",
            "poster_120x171"     : "http://static-api.guidebox.com/thumbnails_movies_small/51801-2868169453-5152096944-3745936682-small-120x171.jpg",
            "poster_240x342"     : "http://static-api.guidebox.com/thumbnails_movies_medium/51801-3506040322-1411033087-2453092267-medium-240x342.jpg",
            "poster_400x570"     : "http://static-api.guidebox.com/thumbnails_movies/51801-3329003332-5124021554-2013295275-large-400x570.jpg"
          }, {
            "id"                 : 25709,
            "title"              : "Batman Forever",
            "release_year"       : 1995,
            "themoviedb"         : 414,
            "original_title"     : "Batman Forever",
            "alternate_titles"   : ["Batman 3 - Batman Forever", "Batman (Classic) 3 - Batman Forever"],
            "imdb"               : "tt0112462",
            "pre_order"          : false,
            "in_theaters"        : false,
            "release_date"       : "1995-05-31",
            "rating"             : "PG-13",
            "rottentomatoes"     : 11174,
            "freebase"           : "/m/01hr1",
            "wikipedia_id"       : 4730,
            "metacritic"         : "http://www.metacritic.com/movie/batman-forever",
            "common_sense_media" : null,
            "poster_120x171"     : "http://static-api.guidebox.com/120214/thumbnails_movies_small/25709-389693608-9619818450-4625547803-small-120x171-alt-.jpg",
            "poster_240x342"     : "http://static-api.guidebox.com/120214/thumbnails_movies_medium/25709-8549939771-912015825-3414688385-medium-240x342-alt-.jpg",
            "poster_400x570"     : "http://static-api.guidebox.com/120214/thumbnails_movies/-alt--25709-1741781570-8777569444-1734709945-large-400x570-alt-.jpg"
          }
        ], "total_results" : 4
      });

    SearchComponent = $componentController('search', {
      movieService : movieService,
      $scope       : scope,
      $stateParams : stateparams,
    });
  }));

  it('should be able to search', function () {
    SearchComponent.$onInit();
    $httpBackend.flush();
    expect(SearchComponent.results).to.have.length(4);
  });
});
