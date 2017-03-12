import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './movie.routes';

export class MovieController {

  /*@ngInject*/
  constructor($http, $stateParams, watchlistService) {
    this.$http = $http;
    this.$stateParams = $stateParams;
    this.watchlistService = watchlistService;
  }

  $onInit() {
    this.$http.get(`/api/movies/${this.$stateParams.id}`)
      .then(response => {
        this.movie = response.data;
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
          let mediaType = 'movies';
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

export default angular.module('easierTvApp.movie', [uiRouter])
  .config(routing)
  .component('movie', {
    template: require('./movie.html'),
    controller: MovieController
  })
  .name;
