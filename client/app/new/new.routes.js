'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('new', {
      url: '/new',
      template: '<new></new>'
    });
}
