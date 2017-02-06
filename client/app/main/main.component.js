import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {


  /*@ngInject*/
  constructor($http, $scope, movieService, $stateParams, $state, $window, socket) {
    this.$http = $http;
    this.socket = socket;
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.movieService = movieService;
    this.$window = $window;
    this.movies = [];
    this.totalMovies = 0;
    this.moviesPerPage = 20;
    this.pagination = {};


    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('movie');
    });
  }

  $onInit() {
    var page = parseInt(this.$stateParams.page, 10);
    this.loadMovies(page);
    this.pagination = {
      current: page
    };
  }

  loadMovies(page) {
    page = page || 1;
    this.movieService.movies(page === 1 ? 0 : page * this.moviesPerPage, this.moviesPerPage)
      .then(response => {
        this.movies = response.data.results;
        this.totalMovies = response.data.total_results;
        this.$state.go('main', {page}, {notify: false});

        // Scroll to top on page change
        this.$window.scrollTo(0, 0);

        this.socket.syncUpdates('movie', this.movies, (event, movie, array) => {
          // console.log(array);
          this.movies = array;  // item contains the updated array
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  // Called from pagination directive on page change click
  pageChanged(newPage) {
    this.loadMovies(newPage);
  }

}

export default angular.module('easierTvApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController
  })
  .name;
