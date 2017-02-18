'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('watchlist', {
      url: '/watchlist',
      template: '<watchlist></watchlist>'
    });
}
