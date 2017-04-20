'use strict';
import angular from 'angular';

export default angular.module('slicedTvApp.mediaCardDirective', [])
  .directive('mediaCardDirective', function(watchlistService, $http, $state, Notification) {
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
        scope.addToWatchlist = function(media) {
          if(media) {
            watchlistService.add(scope.media, `${scope.mediaType}s`)
              .then(() => {
                Notification.primary(`${scope.media.title} added to watchlist`);
              }, err => {
                console.error(err);
                Notification.error(err.statusText || err.status.toString());
              });
          } else {
            Notification.error('An unexpected error occurred.');
            console.error('mediaCardDirective.addToWatchlist: missing media');
          }
        };
      }
    };
  })
  .name;
