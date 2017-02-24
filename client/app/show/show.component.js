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
    this.$http.get(`/api/shows/${this.$stateParams.id}`).then(response => {
      this.show = response.data;
    });
  }
  addToWatchlist(id) {
    // get watchlist
    this.watchlistService.get()
      .then(watchlistResponse => {
        let watchlists = watchlistResponse.data;
        // TODO: This needs to be more thoughtful than assuming the watchlist we want to add to is the first index the
        // array.
        let watchlist = watchlists[0];
        watchlist.shows.push({_id: id});
        this.$http.put(`/api/watchlists/${watchlist._id}`, watchlist)
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.error(err);
          });
      });
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
