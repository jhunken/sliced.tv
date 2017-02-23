'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('shows', {
      url: '/shows/{page:[0-9]{1,8}}',
      template: '<shows></shows>'
    });
}
