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
        scope.addToWatchlist = function(mediaID) {
          if(mediaID) {
            // get watchlist
            watchlistService.get()
              .then(watchlistResponse => {
                let watchlists = watchlistResponse.data;
                let mediaType = `${attributes.mediaType}s`;
                let watchlist = watchlists[0];
                watchlistService.add(watchlist._id, mediaID, mediaType)
                  .then(res => {
                    if(res.status === 409) {
                      Notification.error(`${scope.media.title} already in your watchlist`);
                    } else if(res.status > 299) {
                      Notification.error(JSON.stringify(res.statusText));
                    } else {
                      Notification.primary(`${scope.media.title} added to watchlist`);
                    }
                  });
              }, function(err) {
                Notification.error(JSON.stringify(err));
              });
          } else {
            console.error('No id provided');
          }
        };
      }
    };
  })
  .name;
