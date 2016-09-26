'use strict';

export class NavbarComponent {
  menu = [
    {title : 'Popular', state : 'main'},
    {title : 'New', state : 'new'},
    {title : 'Cinema', state : 'cinema'}
  ];

  constructor(Auth) {
    'ngInject';

    this.isLoggedIn     = Auth.isLoggedInSync;
    this.isAdmin        = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
    this.isCollapsed    = true;
  }

}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template   : require('./navbar.html'),
    controller : NavbarComponent
  })
  .name;
