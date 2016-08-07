'use strict';

function movieService($http) {

  this.movies = function (start, limit, sources, platform) {
    return $http.get('/api/movies/all/'
      + ((start && Number.parseInt(start, 10)) ? start : '0')
      + '/' + ((limit && Number.parseInt(limit, 10)) ? limit : '25')
      + '/' + (sources ? sources : 'all') + '/' + (platform ? platform : 'all'))
      .then(response => {
        return response;
      });
  }
}

export default angular.module('easierTvApp.movieService', [])
  .service('movieService', movieService)
  .name;
