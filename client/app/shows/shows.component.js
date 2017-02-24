'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './shows.routes';

export class ShowsComponent {
  /*@ngInject*/
  constructor($http, $scope, movieService, $stateParams, $state, $window, socket) {
    this.$http = $http;
    this.socket = socket;
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.movieService = movieService;
    this.$window = $window;
    this.shows = [];
    this.totalShows = 0;
    this.showsPerPage = 20;
    this.pagination = {};


    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('show');
    });
  }

  $onInit() {
    let page = parseInt(this.$stateParams.page, 10);
    this.loadShows(page);
    this.pagination = {
      current: page
    };
  }

  loadShows(page) {
    page = page || 1;
    this.movieService.shows(page === 1 ? 0 : page * this.showsPerPage, this.showsPerPage)
      .then(response => {
        this.shows = response.data.results;
        this.totalShows = response.data.totalResults;
        this.$state.go('shows', {page}, {notify: false});

        // Scroll to top on page change
        this.$window.scrollTo(0, 0);

        this.socket.syncUpdates('show', this.shows, (event, show, array) => {
          // console.log(array);
          this.shows = array;  // item contains the updated array
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  // Called from pagination directive on page change click
  pageChanged(newPage) {
    this.loadShows(newPage);
  }
}

export default angular.module('easierTvApp.shows', [uiRouter])
  .config(routes)
  .component('shows', {
    template: require('./shows.html'),
    controller: ShowsComponent,
    controllerAs: 'showsCtrl'
  })
  .name;
