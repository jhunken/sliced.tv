'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './search.routes';

export class SearchComponent {
  /*@ngInject*/
  constructor(movieService, $stateParams) {
    this._movieService  = movieService;
    this._$stateParams  = $stateParams;
    this.results        = [];
    this.totalResults   = 0;
    this.resultsPerPage = 50;
  }

  $onInit() {
    this.results = this._movieService.search(this._$stateParams.query, 'movies')
      .then(response => {
        this.results      = response.data.results;
        this.totalResults = response.data.total_results;
      })
      .catch(err => {
        console.info(err);
      })
  }
}

export default angular.module('easierTvApp.search', [uiRouter])
  .config(routes)
  .component('search', {
    templateUrl  : 'app/search/search.html',
    controller   : SearchComponent,
    controllerAs : 'searchCtrl'
  })
  .name;
