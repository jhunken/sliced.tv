'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './new.routes';

export class NewComponent {
  /*@ngInject*/
  constructor($http) {
    this.$http  = $http;
    this.movies = [];
  }

  $onInit() {

    var lastProcessTime =  Math.floor((new Date(new Date().getTime() - (24 * 60 * 60 * 1000)).getTime()) / 1000); //24 hours ago
    this.$http.get('/api/updates/movies/new/' + lastProcessTime + '?limit=100&page=1').then(response => {
      this.movies = response.data.results;
    });
  }
}

export default angular.module('easierTvApp.new', [uiRouter])
  .config(routes)
  .component('new', {
    templateUrl  : 'app/new/new.html',
    controller   : NewComponent,
    controllerAs : 'newCtrl'
  })
  .name;
