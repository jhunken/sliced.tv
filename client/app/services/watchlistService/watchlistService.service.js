'use strict';

function watchlistService($http, $q) {
  let _handleResponse = function(res) {
    return res;
  };

  let _handleError = function(err) {
    console.error(err);
    return $q.reject(err);
  };

  let modifyWatchlist = function(media, mediaType, add) {
    let httpVerb = add ? 'patch' : 'delete';
    return get()
      .then(watchlistResponse => {
        let watchlists = watchlistResponse.data;
        let watchlist = watchlists[0];
        return $http[httpVerb](`/api/watchlists/${watchlist._id}/${mediaType}/${media._id}`)
          .then(_handleResponse, _handleError);
      }, _handleError);
  };

  let get = function() {
    return $http.get('/api/watchlists/')
      .then(_handleResponse, _handleError);
  };

  let add = function(media, mediaType) {
    return modifyWatchlist(media, mediaType, true);
  };

  let remove = function(media, mediaType) {
    return modifyWatchlist(media, mediaType, false);
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
