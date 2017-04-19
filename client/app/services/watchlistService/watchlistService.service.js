'use strict';

let _handleResponse = function(res) {
  return res;
};

let _handleError = function(err) {
  console.error(err);
  return err;
};

function watchlistService($http) {
  let get = function() {
    return $http.get('/api/watchlists/')
      .then(_handleResponse, _handleError);
  };

  let add = function(watchlistID, mediaID, mediaType) {
    return $http.patch(`/api/watchlists/${watchlistID}/${mediaType}/${mediaID}`)
      .then(_handleResponse, _handleError);
  };

  let removeMedia = function(watchlistID, mediaID, mediaType) {
    return $http.delete(`/api/watchlists/${watchlistID}/${mediaType}/${mediaID}`)
      .then(_handleResponse, _handleError);
  };

  return {
    get,
    add,
    removeMedia
  };
}

export default angular.module('slicedTvApp.watchlistService', [])
  .service('watchlistService', watchlistService)
  .name;
