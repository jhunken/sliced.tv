'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './movies.routes';

export class MoviesComponent {
  /*@ngInject*/
  constructor($http, $scope, movieService, $stateParams, $state, $window, socket, Notification, watchlistService, Auth) {
    this.$http = $http;
    this.socket = socket;
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.movieService = movieService;
    this.watchlistService = watchlistService;
    this.$window = $window;
    this.movies = [];
    this.totalMovies = 0;
    this.moviesPerPage = 20;
    this.pagination = {};
    this.Notification = Notification;
    this.Auth = Auth;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('movie');
    });
  }

  $onInit() {
    let page = parseInt(this.$stateParams.page, 10);
    this.loadMovies(page);
    this.pagination = {
      current: page
    };
    this.loadWatchlist();
  }

  loadMovies(page) {
    page = page || 1;
    this.movieService.movies(page === 1 ? 0 : page * this.moviesPerPage, this.moviesPerPage)
      .then(response => {
        this.movies = response.data.results;
        this.totalMovies = response.data.totalResults;
        this.$state.go('movies', {page}, {notify: false});

        // Scroll to top on page change
        this.$window.scrollTo(0, 0);

        this.socket.unsyncUpdates('movie');
        this.socket.syncUpdates('movie', this.movies, false, (event, movie, array) => {
          this.movies = array;  // item contains the updated array
        });
      }, err => {
        this.Notification.error(err.statusText || err.status.toString());
      });
  }

  loadWatchlist() {
    this.Auth.isLoggedIn(role => {
      this.isLoggedIn = !!role;
      if(this.isLoggedIn) {
        this.watchlistService.get()
          .then(watchlistServiceResponse => {
            this.watchlist = watchlistServiceResponse.data[0];
          });
      }
    });
  }

  // Called from pagination directive on page change click
  pageChanged(newPage) {
    this.loadMovies(newPage);
  }
}

export default angular.module('slicedTvApp.movies', [uiRouter])
  .config(routes)
  .component('movies', {
    template: require('./movies.html'),
    controller: MoviesComponent,
    controllerAs: 'moviesCtrl'
  })
  .name;
