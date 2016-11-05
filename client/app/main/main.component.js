import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  /*@ngInject*/
  constructor($http, $scope, socket, movieService) {
    this.$http        = $http;
    this.socket       = socket;
    this.movieService = movieService;
    this.movies       = [];
    this.start        = 0;
    this.limit        = 25;
    this.source       = 'all';
    this.platform     = 'all';
    this.busy         = false;

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('movie');
    });
  }

  loadMoreMovies() {
    if (this.busy) return;
    this.busy  = true;
    this.movieService.movies(this.start, this.limit, this.source, this.platform)
      .then(response => {
        this.movies = this.movies.concat(response.data);
        this.socket.syncUpdates('movie', this.movies);
        this.busy = false;
      })
      .catch(err => {
        console.error(err);
        this.busy = false;
      });
    this.start = this.start + this.limit;
  }
}

export default angular.module('easierTvApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template   : require('./main.html'),
    controller : MainController
  })
  .name;
