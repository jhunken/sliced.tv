'use strict';
const angular = require('angular');

/*@ngInject*/
export function watchlistServiceService($http) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  let get = function() {
    return $http.get('/api/watchlists/')
      .then(response => response);
  };

  return {
    get
  };
}

export default angular.module('easierTvApp.watchlistService', [])
  .service('watchlistService', watchlistServiceService)
  .name;
