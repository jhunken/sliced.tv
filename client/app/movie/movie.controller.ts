'use strict';

(function(){

class MovieComponent {
  movie: Object;
  constructor($stateParams, $http) {
    this.$stateParams = $stateParams;
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('/api/movies/' + this.$stateParams.id).then(response => {
      this.movie = response.data;
    });
  }
}

angular.module('easierTvApp')
  .component('movie', {
    templateUrl: 'app/movie/movie.html',
    controller: MovieComponent,
    controllerAs: 'movieCtrl'
  });

})();
