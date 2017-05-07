'use strict';

import angular from 'angular';
import constants from '../../app/app.constants';
import util from '../util/util.module';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import {
  authInterceptor
} from './interceptor.service';
import {
  routerDecorator
} from './router.decorator';
import {
  AuthService
} from './auth.service';
import {
  UserResource
} from './user.service';

import uiRouter from 'angular-ui-router';

function addInterceptor($httpProvider) {
  'ngInject';

  $httpProvider.interceptors.push('authInterceptor');
}

export default angular.module('slicedTvApp.auth', [constants, util, ngCookies, uiRouter, ngResource])
  .factory('authInterceptor', authInterceptor)
  .run(routerDecorator)
  .factory('Auth', AuthService)
  .factory('User', UserResource)
  .config(['$httpProvider', addInterceptor])
  .name;
