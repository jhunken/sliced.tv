import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './media.routes';
import _ from 'lodash';

export class MediaController {

  /*@ngInject*/
  constructor($http, $stateParams, watchlistService, Notification) {
    this.$http = $http;
    this.$stateParams = $stateParams;
    this.watchlistService = watchlistService;
    this.Notification = Notification;
    this.mediaType = $stateParams.mediaType;
  }

  $onInit() {
    this.$http.get(`/api/${this.mediaType}s/${this.$stateParams.id}`)
      .then(response => {
        this.media = response.data;
        this.checkIfMediaInWatchlist();
      }, err => {
        this.Notification.error(err.statusText || err.status);
      });
  }

  addToWatchlist(media) {
    if(media) {
      this.watchlistService.add(media, `${this.mediaType}s`)
        .then(() => {
          this.Notification.primary(`${this.media.title} added to watchlist`);
          // flip the status
          this.media.inWatchlist = !this.media.inWatchlist;
        }, err => {
          this.Notification.error(err.statusText || err.status);
        });
    } else {
      this.Notification.error('An unexpected error occurred.');
      console.error(`${this.mediaType}.addToWatchlist: missing media`);
    }
  }

  removeFromWatchlist(media) {
    if(media) {
      this.watchlistService.remove(media, `${this.mediaType}s`)
        .then(() => {
          this.Notification.primary(`${this.media.title} removed from watchlist`);
          // flip the status
          this.media.inWatchlist = !this.media.inWatchlist;
        }, err => {
          console.error(err);
          this.Notification.error(err.statusText || err.status);
        });
    } else {
      this.Notification.error('An unexpected error occurred.');
      console.error('media.component.addToWatchlist: missing media');
    }
  };

  checkIfMediaInWatchlist() {
    this.watchlistService.get()
      .then(watchlistResponse => {
        let watchlists = watchlistResponse.data;
        let watchlist = watchlists[0];
        let media = this.media;
        let inWatchlist = _.findIndex(watchlist[`${this.mediaType}s`], function(o) {
          return o._id === media._id;
        });
        this.media.inWatchlist = inWatchlist >= 0;
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
