'use strict';
const angular = require('angular');

/*@ngInject*/
export function movieLoaderService($q, movieService) {
  this.init = function (params) {
    params          = angular.extend({page : 1}, params);
    this.pagination = {
      perPage : 20,
      //maxPages : 50
    };
    //this.movies     = this.movies ? this.movies : [];
    this.movies     = [];
    return this.load(params.page);
  };

  this.load = function (page) {
    page       = parseInt(page, 10);
    page       = isNaN(page) ? 1 : page;
    var method = this.pagination.lastPage && page < this.pagination.lastPage ? 'unshift' : 'push';
    if (this.pagination.totalPages) {
      page = Math.min(Math.max(page, 1), this.pagination.totalPages);
    }
    this.pagination.lastPageLoaded = page;
    if (page > this.pagination.lastPage || !this.pagination.lastPage || (page < this.pagination.firstPage || !this.pagination.firstPage)) {
      return this.get(page)
        .then(angular.bind(this, function (response) {

          if (!this.pagination.lastPage || page > this.pagination.lastPage) {
            this.pagination.lastPage = page;
          }
          if (!this.pagination.firstPage || page < this.pagination.firstPage) {
            this.pagination.firstPage = page;
          }
          this.pagination.totalResults = response.data.total_results;
          this.pagination.totalPages = Math.ceil(response.data.total_results / this.pagination.perPage);
          if (this.pagination.maxPages) {
            this.pagination.totalPages = Math.min(this.pagination.totalPages, this.pagination.maxPages);
          }
          this.movies[method].apply(this.movies, response.data.results);
          return response.data.results;
        }));
    } else {
      return $q.reject(page);
    }
  };

  this.next = function () {
    var page = !this.pagination.lastPage ? 1 : this.pagination.lastPage + 1;
    return this.load(page);
  };

  this.previous = function () {
    var page = !this.pagination.firstPage ? 1 : this.pagination.firstPage - 1;
    return this.load(page);
  };

  this.get = function (page) {
    var promise = movieService.movies((page === 1 ? 1 : (page * this.pagination.perPage)), this.pagination.perPage);
    return promise;
  }

}

export default angular.module('easierTvApp.movieLoader', [])
  .service('movieLoader', movieLoaderService)
  .name;
