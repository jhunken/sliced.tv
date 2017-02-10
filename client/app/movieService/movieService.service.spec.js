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

  it('should be defined', function () {
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
      $httpBackend.expectGET('/api/search/movies/query')
        .respond([{_id: 1111, guidebox_id: 2222, title: 'fake movie'}, {
          _id: 3333,
          guidebox_id: 4444,
          title: 'another fake movie'
        }]);

      movieService.search('query', 'movies')
        .then(response => {
          expect(response.data).to.be.instanceOf(Array);
          expect(response.data.length).to.equal(2);
        });
      $httpBackend.flush();
    });
  });
});
