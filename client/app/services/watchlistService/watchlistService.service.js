'use strict';

function watchlistService($http) {
  let get = function() {
    return $http.get('/api/watchlists/')
      .then(response => response);
  };

  return {
    get
  };
}

export default angular.module('easierTvApp.watchlistService', [])
  .service('watchlistService', watchlistService)
  .name;
