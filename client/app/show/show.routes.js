'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider.state('show', {
    url: '/show/:id',
    template: '<show></show>'
  });
}
