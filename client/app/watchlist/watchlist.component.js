'use strict';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routes from './watchlist.routes';

export class WatchlistComponent {
  /*@ngInject*/
  constructor(watchlistService, $http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.watchlists = [];
    this.watchlistService = watchlistService;
    // this.collaboratorToAddEmail = '';
    $scope.$on('$destroy', () => {
      socket.unsyncUpdates('watchlist');
    });
  }

  $onInit() {
    this.loadWatchlists();
  }

  loadWatchlists() {
    this.watchlistService.get()
      .then(response => {
        this.watchlists = response.data;
        this.watchlist = response.data[0];
        this.socket.syncUpdates('watchlist', this.watchlists, true);
      }, err => {
        console.error(err);
      });
  }
}

export default angular.module('slicedTvApp.watchlist', [uiRouter])
  .config(routes)
  .component('watchlist', {
    template: require('./watchlist.html'),
    controller: WatchlistComponent,
    controllerAs: 'watchlistCtrl'
  })
  .name;
