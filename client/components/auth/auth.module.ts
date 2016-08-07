'use strict';

angular.module('easierTvApp.auth', [
  'easierTvApp.constants',
  'easierTvApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
