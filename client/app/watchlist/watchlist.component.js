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
    this.collaboratorToAddEmail = '';
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
        this.socket.syncUpdates('watchlist', this.watchlists);
      });
  }

  removeMovie(watchlist, movie) {
    this.watchlistService.removeMedia(watchlist._id, movie._id, 'movies');
  }

  removeShow(watchlist, show) {
    this.watchlistService.removeMedia(watchlist._id, show._id, 'shows');
  }

  addCollaborator(email) {
    this.$http.put(`/api/watchlists/${this.watchlists[0]._id}/collaborators?email=${encodeURIComponent(email)}`)
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
