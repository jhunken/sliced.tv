'use strict';
let utils = (() => {
  /***
   * Maps guidebox fields to Movie model fields
   * @param guideboxMovies
   * @returns {*}
   */
  function normalizeGuideboxFields(guideboxMovies) {
    let mapFields = function(movie) {
      movie.guideboxID = movie.id;
      Reflect.deleteProperty(movie, 'id');
      movie.alternateTitles = movie.alternate_titles;
      Reflect.deleteProperty(movie, 'alternate_titles');
      movie.commonSenseMedia = movie.common_sense_media;
      Reflect.deleteProperty(movie, 'common_sense_media');
      movie.freeAndroidSources = movie.free_android_sources;
      Reflect.deleteProperty(movie, 'free_android_sources');
      movie.freeIOSSources = movie.free_ios_sources;
      Reflect.deleteProperty(movie, 'free_ios_sources');
      movie.freeWebSources = movie.free_web_sources;
      Reflect.deleteProperty(movie, 'free_web_sources');
      movie.inTheaters = movie.in_theaters;
      Reflect.deleteProperty(movie, 'in_theaters');
      movie.originalTitle = movie.original_title;
      Reflect.deleteProperty(movie, 'original_title');
      movie.otherSources = movie.other_sources;
      Reflect.deleteProperty(movie, 'other_sources');
      movie.poster120x171 = convertToHTTPS(movie.poster_120x171);
      Reflect.deleteProperty(movie, 'poster_120x171');
      movie.poster240x342 = convertToHTTPS(movie.poster_240x342);
      Reflect.deleteProperty(movie, 'poster_240x342');
      movie.poster400x570 = convertToHTTPS(movie.poster_400x570);
      Reflect.deleteProperty(movie, 'poster_400x570');
      movie.preoOrder = movie.pre_order;
      Reflect.deleteProperty(movie, 'pre_order');
      movie.purchaseAndroidSources = movie.purchase_android_sources;
      Reflect.deleteProperty(movie, 'purchase_android_sources');
      movie.purchaseIOSSources = movie.purchase_ios_sources;
      Reflect.deleteProperty(movie, 'purchase_ios_sources');
      movie.purchaseWebSources = movie.purchase_web_sources;
      Reflect.deleteProperty(movie, 'purchase_web_sources');
      movie.releaseDate = movie.release_date;
      Reflect.deleteProperty(movie, 'release_date');
      movie.releaseYear = movie.release_year;
      Reflect.deleteProperty(movie, 'release_year');
      movie.subscriptionAndroidSources = movie.subscription_android_sources;
      Reflect.deleteProperty(movie, 'subscription_android_sources');
      movie.subscriptionIOSSources = movie.subscription_ios_sources;
      Reflect.deleteProperty(movie, 'subscription_ios_sources');
      movie.subscriptionWebSources = movie.subscription_web_sources;
      Reflect.deleteProperty(movie, 'subscription_web_sources');
      movie.wikiepediaID = movie.wikipedia_id;
      Reflect.deleteProperty(movie, 'wikipedia_id');
      movie.tvEverywhereAndroidSources = movie.tv_everywhere_android_sources;
      Reflect.deleteProperty(movie, 'tv_everywhere_android_sources');
      movie.tvEverywhereIOSSources = movie.tv_everywhere_ios_sources;
      Reflect.deleteProperty(movie, 'tv_everywhere_ios_sources');
      movie.tvEverywhereWebSources = movie.tv_everywhere_web_sources;
      Reflect.deleteProperty(movie, 'tv_everywhere_web_sources');
      return movie;
    };
    if(guideboxMovies.length) {
      let normalizedMovies = [];
      for(let movie of guideboxMovies) {
        movie = mapFields(movie);
        normalizedMovies.push(movie);
      }
      return normalizedMovies;
    }
    // single movie
    return mapFields(guideboxMovies);
  }

  function convertToHTTPS(url) {
    if(url.match('^http://')) {
      return url.replace(/^http:\/\//i, 'https://');
    }
  }

  return {
    normalizeGuideboxFields,
    convertToHTTPS
  };
})();

module.exports = utils;
