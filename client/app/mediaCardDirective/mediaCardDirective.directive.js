'use strict';
import angular from 'angular';

export default angular.module('slicedTvApp.mediaCardDirective', [])
  .directive('mediaCardDirective', function(watchlistService, $http, $state) {
    'ngInject';
    return {
      template: require('./mediaCardDirective.html'),
      restrict: 'EA',
      link(scope, element, attributes) {
        scope.thumbnail = scope.media.poster400X570 || scope.media.artwork608X342;
        scope.mediaType = attributes.mediaType;
        scope.goToMediaDetails = function(id) {
          $state.go(scope.mediaType, {id});
        };
        scope.addToWatchlist = function(mediaID) {
          if(mediaID) {
            // get watchlist
            watchlistService.get()
              .then(watchlistResponse => {
                let watchlists = watchlistResponse.data;
                let mediaType = attributes.mediaType + 's';
                // TODO: This needs to be more thoughtful than assuming the watchlist we want to add to is the first index the
                // array.
                let watchlist = watchlists[0];
                watchlistService.add(watchlist._id, mediaID, mediaType);
              });
          } else {
            console.error('No id provided');
          }
        };
      }
    };
  })
  .name;
