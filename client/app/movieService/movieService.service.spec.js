'use strict';

import movieServiceModule from './movieService.service';

describe('Service: movieService', () => {
  // load the service's module
  beforeEach(angular.mock.module(movieServiceModule));

  let $httpBackend;

  // instantiate service
  let movieService;
  beforeEach(inject((_movieService_, _$httpBackend_) => {
    movieService = _movieService_;
    $httpBackend = _$httpBackend_;
  }));

  it('should be defined', () => {
    expect(!!movieService).to.be.true;
  });

  describe('movies function', () => {

    it('should use default parameters', () => {
      $httpBackend.expectGET('/api/movies/all/0/25/all/all')
        .respond([{_id: 12345, guidebox_id: 12345, title: 'fake movie'}, {
          _id: 6789,
          guidebox_id: 6789,
          title: 'another fake movie'
        }]);
      movieService.movies()
        .then(response => {
          expect(response.data).to.be.instanceOf(Array);
          expect(response.data.length).to.equal(2);
        });
      $httpBackend.flush();
    });

    it('should accept parameters', () => {
      $httpBackend.expectGET('/api/movies/all/15/50/all/all')
        .respond([{_id: 1111, guidebox_id: 2222, title: 'fake movie'}, {
          _id: 3333,
          guidebox_id: 4444,
          title: 'another fake movie'
        }]);

      movieService.movies(15, 50, 'all', 'all')
        .then(response => {
          expect(response.data).to.be.instanceOf(Array);
        });
      $httpBackend.flush();
    });
  });

  describe('search function', () => {
    it('should return an error with invalid search type params', () => {
      movieService.search()
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          expect(err).to.equal('invalid search type');
        });
    });

    it('should accept parameters', () => {
      $httpBackend.expectGET('/api/search/query')
        .respond({
          movies: {
            results: [
              {_id: 1111, guidebox_id: 1111, title: 'fake movie 1111'},
              {_id: 2222, guidebox_id: 2222, title: 'fake movie 2222'},
            ],
            totalResults: 2
          },
          shows: {
            results: [
              {_id: 6666, guidebox_id: 6666, title: 'fake show 6666'},
            ],
            totalResults: 1
          }
        });

      movieService.search('query')
        .then(response => {
          expect(response.data.movies.results).to.be.instanceOf(Array);
          expect(response.data.movies.results.length).to.equal(2);
          expect(response.data.shows.results).to.be.instanceOf(Array);
          expect(response.data.shows.results.length).to.equal(1);
        });
      $httpBackend.flush();
    });
  });
});
