'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('search', {
      url: '/search/:query',
      template: '<search></search>'
    });
}
