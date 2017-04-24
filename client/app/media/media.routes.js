'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('default', {
    url: '/',
    template: '<movies></movies>'
  });
  $stateProvider.state('media', {
    url: '/{mediaType:(?:movie|show)}/:id',
    template: '<media></media>'
  });
}
