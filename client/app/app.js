'use strict';

import angular from 'angular';
import 'angular-utils-pagination';
import 'angular-ui-notification';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import 'angular-socket-io';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import MoviesComponent from './movies/movies.component';
import ShowsComponent from './shows/shows.component';
import MediaComponent from './media/media.component';
import search from './search/search.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';
import movieService from './movieService/movieService.service';
import WatchlistComponent from './watchlist/watchlist.component';
import watchlistService from './services/watchlistService/watchlistService.service';
import MediaCardDirective from './mediaCardDirective/mediaCardDirective.directive';
import AngularLoadingBar from 'angular-loading-bar';

import './app.scss';

angular.module('slicedTvApp', [
  ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter, uiBootstrap, _Auth, account, admin, navbar,
  footer, search, movieService, MediaComponent, constants, socket, util, 'angularUtils.directives.dirPagination',
  WatchlistComponent, watchlistService, MediaCardDirective, AngularLoadingBar, MoviesComponent, ShowsComponent, 'ui-notification'
])
  .config(routeConfig)
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }])
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['slicedTvApp'], {
      strictDi: true
    });
  });
