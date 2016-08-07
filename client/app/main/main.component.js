import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  /*@ngInject*/
  constructor($http, $scope, socket, movieService) {
    this.$http        = $http;
    this.socket       = socket;
    this.movieService = movieService;
    this.start        = 0;
    this.limit        = 25;
    this.source       = 'all';
    this.platform     = 'all';

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('movie');
    });
  }

  $onInit() {
    this.movieService.movies(this.start, this.limit, this.source, this.platform)
      .then(response => {
        this.movies = response.data;
        this.socket.syncUpdates('movie', this.movies);
      })
      .catch(err => {
        console.error(err);
      });
  }
}

export default angular.module('easierTvApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template   : require('./main.html'),
    controller : MainController
  })
  .name;
