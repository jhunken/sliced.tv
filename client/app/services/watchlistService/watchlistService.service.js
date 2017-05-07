'use strict';

function watchlistService($http, $q) {
  let _handleResponse = function(res) {
    return res;
  };

  let _handleError = function(err) {
    console.error(err);
    return $q.reject(err);
  };

  let modifyWatchlist = function(watchlistID, media, mediaType, add) {
    let httpVerb = add ? 'patch' : 'delete';
    return $http[httpVerb](`/api/watchlists/${watchlistID}/${mediaType}/${media._id}`)
      .then(_handleResponse, _handleError);
  };

  let get = function() {
    return $http.get('/api/watchlists/')
      .then(_handleResponse, _handleError);
  };

  let add = function(watchlistID, media, mediaType) {
    return modifyWatchlist(watchlistID, media, mediaType, true);
  };

  let remove = function(watchlistID, media, mediaType) {
    return modifyWatchlist(watchlistID, media, mediaType, false);
  };

  return {
    get,
    add,
    remove
  };
}

export default angular.module('slicedTvApp.watchlistService', [])
  .service('watchlistService', watchlistService)
  .name;
