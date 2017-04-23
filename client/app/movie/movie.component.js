import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './movie.routes';

export class MovieController {

  /*@ngInject*/
  constructor($http, $stateParams, watchlistService, Notification) {
    this.$http = $http;
    this.$stateParams = $stateParams;
    this.watchlistService = watchlistService;
    this.Notification = Notification;
  }

  $onInit() {
    this.$http.get(`/api/movies/${this.$stateParams.id}`)
      .then(response => {
        this.movie = response.data;
      }, err => {
        this.Notification.error(err.statusText || err.status);
      });
  }

  addToWatchlist(media) {
    if(media) {
      this.watchlistService.add(media, 'movies')
        .then(() => {
          this.Notification.primary(`${this.movie.title} added to watchlist`);
        }, err => {
          this.Notification.error(err.statusText || err.status);
        });
    } else {
      this.Notification.error('An unexpected error occurred.');
      console.error('movie.addToWatchlist: missing media');
    }
  }
}

export default angular.module('slicedTvApp.movie', [uiRouter])
  .config(routing)
  .component('movie', {
    template: require('./movie.html'),
    controller: MovieController
  })
  .name;
