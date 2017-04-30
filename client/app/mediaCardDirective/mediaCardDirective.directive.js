'use strict';
import angular from 'angular';
import _ from 'lodash';

export default angular.module('slicedTvApp.mediaCardDirective', [])
  .directive('mediaCardDirective', function(watchlistService, $http, $state, Notification, Auth) {
    'ngInject';
    return {
      template: require('./mediaCardDirective.html'),
      restrict: 'EA',
      scope: {
        media: '=',
      },
      link(scope, element, attributes) {
        scope.mediaType = attributes.mediaType;
        scope.isLoggedIn = Auth.isLoggedInSync();

        scope.goToMediaDetails = function(id) {
          $state.go('media', {mediaType: scope.mediaType, id});
        };

        scope.modifyWatchlist = function(media, add) {
          let action = add ? 'add' : 'remove';
          let notificationText = add ? 'added to watchlist' : 'removed from watchlist';

          if(media) {
            watchlistService[action](scope.media, `${scope.mediaType}s`)
              .then(() => {
                Notification.primary(`${scope.media.title} ${notificationText}`);
                // flip the status
                scope.media.inWatchlist = !scope.media.inWatchlist;
              }, err => {
                console.error(err);
                Notification.error(err.statusText || err.status);
              });
          } else {
            Notification.error('An unexpected error occurred.');
            console.error('mediaCardDirective.modifyWatchlist: missing media');
          }
        };

        let checkIfMediaInWatchlist = function() {
          watchlistService.get()
            .then(watchlistResponse => {
              let watchlists = watchlistResponse.data;
              let watchlist = watchlists[0];
              let inWatchlist = _.findIndex(watchlist[`${scope.mediaType}s`], function(o) {
                return o._id === scope.media._id;
              });
              scope.media.inWatchlist = inWatchlist >= 0;
            });
        };

        scope.$watch('media', newVal => {
          if(newVal) {
            if(scope.isLoggedIn) {
              checkIfMediaInWatchlist();
            }
            scope.thumbnail = scope.media ? scope.media.poster400X570 || scope.media.artwork608X342 : '';
          }
        });
      }
    };
  })
  .name;
