'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('movie', {
    url: '/movie/:id',
    template: '<movie></movie>'
  });
};
