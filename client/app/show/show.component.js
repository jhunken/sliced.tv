'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './show.routes';

export class ShowComponent {
  /*@ngInject*/
  constructor($http, $stateParams, watchlistService) {
    this.$http = $http;
    this.$stateParams = $stateParams;
    this.watchlistService = watchlistService;
  }

  $onInit() {
    this.$http.get(`/api/shows/${this.$stateParams.id}`)
      .then(response => {
        this.show = response.data;
      })
      .catch(err => {
        console.error(err);
      });
  }

  addToWatchlist(mediaID) {
    if(mediaID) {
      // get watchlist
      this.watchlistService.get()
        .then(watchlistResponse => {
          let watchlists = watchlistResponse.data;
          let mediaType = 'shows';
          // TODO: This needs to be more thoughtful than assuming the watchlist we want to add to is the first index the
          // array.
          let watchlist = watchlists[0];
          this.watchlistService.add(watchlist._id, mediaID, mediaType);
        });
    } else {
      console.error('No id provided');
    }
  }
}

export default angular.module('easierTvApp.show', [uiRouter])
  .config(routes)
  .component('show', {
    template: require('./show.html'),
    controller: ShowComponent,
    controllerAs: 'showCtrl'
  })
  .name;
