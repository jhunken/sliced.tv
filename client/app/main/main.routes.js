'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('default', {
    url: '/',
    template: '<main></main>'
  });

  $stateProvider.state('main', {
    url: '/{page:[0-9]{1,8}}',
    template: '<main></main>'
  });
}
