import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {


  /*@ngInject*/
  constructor($http, $scope, movieLoader, $stateParams, $state) {
    this.$http        = $http;
    this.$stateParams = $stateParams;
    this.$state       = $state;
    this._movieLoader = movieLoader;

    $scope.$on('$destroy', function () {
      // socket.unsyncUpdates('thing');
    });

    $scope.$on('endlessScroll:next', () => this.nextPage());
    $scope.$on('endlessScroll:previous', () => this.previousPage());

  }

  $onInit() {
    //var params = {page : this.$location.search().page};
    var params = {page : this.$stateParams.page};
    this._movieLoader.init(params).then(() => this.onPageLoad());
  }

  onPageLoadError(page) {
    this.loading = false;
  }

  onPageLoad() {
    this.movies     = this._movieLoader.movies;
    this.pagination = this._movieLoader.pagination;

    this.loading = false;
  }

  nextPage() {
    this.loading = true;
    this.$state.go('main', {page : this.pagination.lastPageLoaded}, {notify : false});
    this._movieLoader.next().then(()=>this.onPageLoad(), ()=>this.onPageLoadError());
  }

  previousPage() {
    this.loading = true;
    this.$state.go('main', {page : this.pagination.lastPageLoaded}, {notify : false});
    this._movieLoader.previous().then(()=>this.onPageLoad(), ()=> this.onPageLoadError());
  }


}

export default angular.module('easierTvApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template   : require('./main.html'),
    controller : MainController
  })
  .name;
