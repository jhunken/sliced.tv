'use strict';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routes from './watchlist.routes';

export class WatchlistComponent {
  /*@ngInject*/
  constructor(watchlistService, $http) {
    this.$http = $http;
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

  removeMovie(watchlist, index) {
    watchlist.movies.splice(index, 1);
    this.$http.put(`/api/watchlists/${watchlist._id}`, watchlist)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
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
