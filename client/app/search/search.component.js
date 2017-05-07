'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './search.routes';

export class SearchComponent {
  /*@ngInject*/
  constructor(movieService, $stateParams, watchlistService) {
    this._movieService = movieService;
    this._$stateParams = $stateParams;
    this.movies = [];
    this.shows = [];
    this.totalResults = 0;
    this.resultsPerPage = 50;
    this.loading = true;
    this.watchlistService = watchlistService;
  }

  $onInit() {
    if(this._$stateParams.query) {
      this._movieService.search(this._$stateParams.query)
        .then(response => {
          this.movies = response.data.movies.results;
          this.shows = response.data.shows.results;
          this.loading = false;
        })
        .catch(err => {
          console.info(err);
          this.loading = false;
        });
      this.watchlistService.get()
        .then(watchlistServiceResponse => {
          this.watchlist = watchlistServiceResponse.data[0];
        });
    } else {
      this.loading = false;
    }
  }
}

export default angular.module('slicedTvApp.search', [uiRouter])
  .config(routes)
  .component('search', {
    template: require('./search.html'),
    controller: SearchComponent,
    controllerAs: 'searchCtrl'
  })
  .name;
