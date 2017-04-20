'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './show.routes';

export class ShowComponent {
  /*@ngInject*/
  constructor($http, $stateParams, watchlistService, Notification) {
    this.$http = $http;
    this.$stateParams = $stateParams;
    this.watchlistService = watchlistService;
    this.Notification = Notification;
  }

  $onInit() {
    this.$http.get(`/api/shows/${this.$stateParams.id}`)
      .then(response => {
        this.show = response.data;
      }, err => {
        this.Notification.error(err.statusText || err.status.toString());
      });
  }

  addToWatchlist(media) {
    if(media) {
      this.watchlistService.add(media, 'shows')
        .then(() => {
          this.Notification.primary(`${this.show.title} added to watchlist`);
        }, err => {
          this.Notification.error(err.statusText || err.status.toString());
        });
    } else {
      this.Notification.error('An unexpected error occurred.');
      console.error('shows.addToWatchlist: missing media');
    }
  }
}

export default angular.module('slicedTvApp.show', [uiRouter])
  .config(routes)
  .component('show', {
    template: require('./show.html'),
    controller: ShowComponent,
    controllerAs: 'showCtrl'
  })
  .name;
