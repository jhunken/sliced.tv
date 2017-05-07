import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './media.routes';

export class MediaController {

  /*@ngInject*/
  constructor($http, $stateParams, watchlistService, Notification, Auth) {
    this.$http = $http;
    this.$stateParams = $stateParams;
    this.watchlistService = watchlistService;
    this.Notification = Notification;
    this.mediaType = $stateParams.mediaType;
    this.Auth = Auth;
  }

  $onInit() {
    this.loadWatchlist();
    this.loadMedia();
  }

  loadMedia() {
    this.$http.get(`/api/${this.mediaType}s/${this.$stateParams.id}`)
      .then(response => {
        this.media = response.data;
      }, err => {
        this.Notification.error(err.statusText || err.status);
      });
  }

  loadWatchlist() {
    this.Auth.isLoggedIn(role => {
      this.isLoggedIn = !!role;
      if(this.isLoggedIn) {
        this.watchlistService.get()
          .then(watchlistServiceResponse => {
            this.watchlist = watchlistServiceResponse.data[0];
          });
      }
    });
  }
}

export default angular.module('slicedTvApp.media', [uiRouter])
  .config(routing)
  .component('media', {
    template: require('./media.html'),
    controller: MediaController
  })
  .name;
