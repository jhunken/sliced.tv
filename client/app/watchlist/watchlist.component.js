'use strict';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routes from './watchlist.routes';

export class WatchlistComponent {
  /*@ngInject*/
  constructor(watchlistService) {
    this.watchlists = [];
    this.watchlistService = watchlistService;
  }

  $onInit() {
    this.loadWatchlists();
  }

  loadWatchlists() {
    this.watchlistService.get()
      .then(response => {
        this.watchlists = response.data;
      });
  }
}

export default angular.module('easierTvApp.watchlist', [uiRouter])
  .config(routes)
  .component('watchlist', {
    template: require('./watchlist.html'),
    controller: WatchlistComponent,
    controllerAs: 'watchlistCtrl'
  })
  .name;
