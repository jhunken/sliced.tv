'use strict';

import main from './main.component';
import movieService from '../movieService/movieService.service';
import {
  MainController
} from './main.component';

describe('Component: MainComponent', function() {
  beforeEach(angular.mock.module(main));
  beforeEach(angular.mock.module(movieService));
  beforeEach(angular.mock.module('stateMock'));
  beforeEach(angular.mock.module('socketMock'));

  var scope;
  var mainComponent;
  var state;
  var $httpBackend;

  var mockMovies = {
    total_results: 340,
    total_returned: 20,
    results: [
      {
        id: 134701,
        title: 'Batman v Superman: Dawn of Justice',
        release_year: 2016,
        themoviedb: 209112,
        original_title: 'Batman v Superman: Dawn of Justice',
        alternate_titles: [
          'Batman V. Superman: Dawn Of Justice',
          'Batman v Superman: Dawn Of Justice Ultimate Edition Bundle',
          'Batman v Superman: Dawn of Justice (Ultimate Edition)',
          'Batman v Superman: Dawn of Justice (plus bonus features)',
          'Batman v Superman: Dawn of Justice (Extended Cut)',
          'Batman v Superman: Dawn Of Justice Ultimate Edition',
          'Batman v Superman: Dawn of Justice (Ultimate Edition) (plus bonus features)',
          'Batman v Superman: Dawn of Justice + Bonus',
          'Batman v Superman: Dawn of Justice (Theatrical)'
        ],
        imdb: 'tt2975590',
        pre_order: false,
        in_theaters: false,
        release_date: '2016-03-23',
        rating: 'PG-13',
        rottentomatoes: 771363115,
        freebase: '\/m\/0wrshm2',
        wikipedia_id: 2619910,
        metacritic: 'http:\/\/www.metacritic.com\/movie\/batman-v-superman-dawn-of-justice',
        common_sense_media: 'https:\/\/www.commonsensemedia.org\/movie-reviews\/batman-v-superman-dawn-of-justice',
        poster_120x171: 'http:\/\/static-api.guidebox.com\/111615\/thumbnails_movies_small\/134701-4814312095-4459750019-4413319947-small-120x171-alt-.jpg',
        poster_240x342: 'http:\/\/static-api.guidebox.com\/111615\/thumbnails_movies_medium\/134701-3192860480-495980070-6602217480-medium-240x342-alt-.jpg',
        poster_400x570: 'http:\/\/static-api.guidebox.com\/111615\/thumbnails_movies\/-alt--134701-8375116367-7619700012-3932971675-large-400x570-alt-.jpg'
      },
      {
        id: 134704,
        title: 'Zootopia',
        release_year: 2016,
        themoviedb: 269149,
        original_title: 'Zootopia',
        alternate_titles: [
          'Zootopia (plus Bonus Features)',
          'Zootopia + Bonus',
          'Zootopia (Theatrical)'
        ],
        imdb: 'tt2948356',
        pre_order: false,
        in_theaters: false,
        release_date: '2016-02-11',
        rating: 'PG',
        rottentomatoes: 771362371,
        freebase: '',
        wikipedia_id: 0,
        metacritic: 'http:\/\/www.metacritic.com\/movie\/zootopia',
        common_sense_media: null,
        poster_120x171: 'http:\/\/static-api.guidebox.com\/111615\/thumbnails_movies_small\/134704-2485521841-3475374254-6411856697-small-120x171.jpg',
        poster_240x342: 'http:\/\/static-api.guidebox.com\/111615\/thumbnails_movies_medium\/134704-7773225396-1814027522-1959452653-medium-240x342.jpg',
        poster_400x570: 'http:\/\/static-api.guidebox.com\/111615\/thumbnails_movies\/134704-3372640242-2719297041-9311544308-large-400x570.jpg'
      },
      {
        id: 49876,
        title: 'Ghostbusters',
        release_year: 1984,
        themoviedb: 620,
        original_title: 'Ghostbusters',
        alternate_titles: [
          'Ghostbusters 1',
          'Ghost Busters',
          'Ghostbusters (1984 Original)'
        ],
        imdb: 'tt0087332',
        pre_order: false,
        in_theaters: false,
        release_date: '1984-06-07',
        rating: 'PG',
        rottentomatoes: 12000,
        freebase: '\/m\/01d2v1',
        wikipedia_id: 205013,
        metacritic: 'http:\/\/www.metacritic.com\/movie\/ghostbusters',
        common_sense_media: null,
        poster_120x171: 'http:\/\/static-api.guidebox.com\/thumbnails_movies_small\/49876-4213426854-3153858748-7712044157-small-120x171.jpg',
        poster_240x342: 'http:\/\/static-api.guidebox.com\/thumbnails_movies_medium\/49876-8117577131-7521309722-1223502355-medium-240x342.jpg',
        poster_400x570: 'http:\/\/static-api.guidebox.com\/thumbnails_movies\/49876-1256520069-5749816964-1189235682-large-400x570.jpg'
      }
    ]
  };
  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, $state,
                              socket, movieService) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/movies/all/0/20/all/all')
      .respond(mockMovies);

    scope = $rootScope.$new();
    state = $state;
    mainComponent = $componentController('main', {
      $http,
      $scope: scope,
      socket,
      movieService
    });
  }));

  it('should attach a list of movies to the controller', function() {
    state.expectTransitionTo('main');
    mainComponent.loadMovies(1);
    $httpBackend.flush();
    state.expectTransitionTo('main/1');
    expect(mainComponent.movies).to.have.lengthOf(3);
  });
});
