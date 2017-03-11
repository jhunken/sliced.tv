'use strict';

function watchlistService($http) {
  let get = function() {
    return $http.get('/api/watchlists/')
      .then(response => response)
      .catch(err => {
        console.error(err);
      });
  };

  let add = function(watchlistID, mediaID, mediaType) {
    return $http.patch(`/api/watchlists/${watchlistID}/${mediaType}/${mediaID}`)
      .then(response => response)
      .catch(err => {
        console.error(err);
      });
  };

  let removeMedia = function(watchlistID, mediaID, mediaType) {
    return $http.delete(`/api/watchlists/${watchlistID}/${mediaType}/${mediaID}`)
      .then(response => response)
      .catch(err => {
        console.error(err);
      });
  };

  return {
    get,
    add,
    removeMedia
  };
}

export default angular.module('easierTvApp.watchlistService', [])
  .service('watchlistService', watchlistService)
  .name;
