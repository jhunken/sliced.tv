'use strict';

function movieService($http, $q) {
  let _handleResponse = function(res) {
    return res;
  };

  let _handleError = function(err) {
    console.error(err);
    return $q.reject(err);
  };

  let _getStart = function(start) {
    return start && Number.parseInt(start, 10) ? start : '0';
  };
  let _getLimit = function(limit) {
    return limit && Number.parseInt(limit, 10) ? limit : '25';
  };
  let _getSources = function(sources) {
    return sources ? sources : 'all';
  };
  let _getPlatform = function(platform) {
    return platform ? platform : 'all';
  };

  let movies = function(start, limit, sources, platform) {
    let mediaType = 'movies';
    return $http.get(`/api/${mediaType}/all/${_getStart(start)}/${_getLimit(limit)}/${_getSources(sources)}/${_getPlatform(platform)}`)
      .then(_handleResponse, _handleError);
  };

  let shows = function(start, limit, sources, platform) {
    let mediaType = 'shows';
    return $http.get(`/api/${mediaType}/all/${_getStart(start)}/${_getLimit(limit)}/${_getSources(sources)}/${_getPlatform(platform)}`)
      .then(_handleResponse, _handleError);
  };

  let search = function(query) {
    return $http.get(`/api/search/${query}`)
      .then(_handleResponse, _handleError);
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
