'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('default', {
    url: '/',
    template: '<movies></movies>'
  });
  $stateProvider.state('movie', {
    url: '/movie/:id',
    template: '<movie></movie>'
  });
}
