'use strict';

angular.module('easierTvApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('movie', {
        url: '/movie/:id',
        template: '<movie></movie>'
      });
  });
