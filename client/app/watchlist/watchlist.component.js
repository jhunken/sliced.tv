'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './watchlist.routes';

export class WatchlistComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('easierTvApp.watchlist', [uiRouter])
  .config(routes)
  .component('watchlist', {
    templateUrl: 'app/watchlist/watchlist.html',
    controller: WatchlistComponent,
    controllerAs: 'watchlistCtrl'
  })
  .name;
