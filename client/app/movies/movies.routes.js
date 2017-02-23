'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('movies', {
      url: '/movies/{page:[0-9]{1,8}}',
      template: '<movies></movies>'
    });
}
