'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.movies = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('movie');
    });
  }

  $onInit() {
    this.$http.get('/api/movies').then(response => {
      this.movies = response.data;
      this.socket.syncUpdates('movie', this.movies);
    });
  }
}

angular.module('easierTvApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
