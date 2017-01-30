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
    this.$http.get(`/api/movies/${this.$stateParams.id}`).then(response => {
      this.movie = response.data;
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
        watchlist.movies.push({_id: id});
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

export default angular.module('easierTvApp.movie', [uiRouter])
  .config(routing)
  .component('movie', {
    template: require('./movie.html'),
    controller: MovieController
  })
  .name;
