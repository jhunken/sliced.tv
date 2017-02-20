'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [
    {title: 'Popular', state: 'main'},
    {title: 'Watchlist', state: 'watchlist'},
  ];

  constructor(Auth, $state) {
    'ngInject';

    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
    this._$state = $state;
    this.searchQuery = '';
    this.isCollapsed = true;
  }

  search() {
    if(this.searchQuery) {
      this.isCollapsed = true;
      this._$state.go('search', {query: this.searchQuery});
    }
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
  })
  .name;
