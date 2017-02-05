'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './search.routes';

export class SearchComponent {
  /*@ngInject*/
  constructor(movieService, $stateParams) {
    this._movieService = movieService;
    this._$stateParams = $stateParams;
    this.results = [];
    this.totalResults = 0;
    this.resultsPerPage = 50;
    this.loading = true;
  }

  $onInit() {
    if(this._$stateParams.query) {
      this._movieService.search(this._$stateParams.query, 'movies')
        .then(response => {
          this.results = response.data.results;
          this.totalResults = response.data.total_results;
          this.loading = false;
        })
        .catch(err => {
          console.info(err);
          this.loading = false;
        });
    } else {
      this.loading = false;
    }
  }
}

export default angular.module('easierTvApp.search', [uiRouter])
  .config(routes)
  .component('search', {
    template: require('./search.html'),
    controller: SearchComponent,
    controllerAs: 'searchCtrl'
  })
  .name;
