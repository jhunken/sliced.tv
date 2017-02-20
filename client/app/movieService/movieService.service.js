'use strict';

function movieService($http, $q) {
  let movies = function(start, limit, sources, platform) {
    return $http.get(`/api/movies/all/${(start && Number.parseInt(start, 10) ? start : '0')}/${(limit && Number.parseInt(limit, 10) ? limit : '25')}/${(sources ? sources : 'all')}/${(platform ? platform : 'all')}`)
      .then(response => response);
  };

  let search = function(query, type) {
    if(type === 'movies' || type === 'shows') {
      return $http.get(`/api/search/${type}/${query}`);
    } else {
      return $q(function(resolve, reject) {
        reject('invalid search type');
      });
    }
  };
  return {
    movies,
    search
  };
}

export default angular.module('easierTvApp.movieService', [])
  .service('movieService', movieService)
  .name;
