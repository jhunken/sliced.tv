import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './movie.routes';

export class MovieController {

  /*@ngInject*/
  constructor($http, $stateParams) {
    this.$http = $http;
    this.$stateParams = $stateParams;
  }

  $onInit() {
    this.$http.get(`/api/movies/${this.$stateParams.id}`).then(response => {
      this.movie = response.data;
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
