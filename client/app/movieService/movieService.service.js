'use strict';

function movieService($http) {
  let movies = function(start, limit, sources, platform) {
    return $http.get(`/api/movies/all/${(start && Number.parseInt(start, 10) ? start : '0')}/${(limit && Number.parseInt(limit, 10) ? limit : '25')}/${(sources ? sources : 'all')}/${(platform ? platform : 'all')}`)
      .then(response => response);
  };

  let shows = function(start, limit, sources, platform) {
    return $http.get(`/api/shows/all/${(start && Number.parseInt(start, 10) ? start : '0')}/${(limit && Number.parseInt(limit, 10) ? limit : '25')}/${(sources ? sources : 'all')}/${(platform ? platform : 'all')}`)
      .then(response => response);
  };

  let search = function(query) {
    return $http.get(`/api/search/${query}`);
  };
  return {
    movies,
    shows,
    search
  };
}

export default angular.module('slicedTvApp.movieService', [])
  .service('movieService', movieService)
  .name;
