'use strict';

import Movie from '../movie/movie.model';
import Show from '../show/show.model';
const logger = require('../../components/utils').logger;

/***
 * Search database for query. Returns a promise
 * @param mediaType
 * @param query
 * @private
 */
let _createSearchPromise = function(mediaType, query) {
  let model;
  if(mediaType === 'movies') {
    model = Movie;
  }
  if(mediaType === 'shows') {
    model = Show;
  }
  return model.find({title: {$regex: new RegExp(query, 'ig')}})
    .then(results => ({results, totalResults: results.length, mediaType}));
};

/***
 * Search database
 * @param req
 * @param res
 */
export function search(req, res) {
  let query = req.params.query;
  let movies;
  let shows;
  let moviePromise = _createSearchPromise('movies', query);
  let showPromise = _createSearchPromise('shows', query);
  let promises = [moviePromise, showPromise];
  Promise.all(promises)
    .then(results => {
      logger.log('debug', results);
      for(let result of results) {
        if(result.mediaType === 'movies') {
          movies = result;
        }
        if(result.mediaType === 'shows') {
          shows = result;
        }
      }
      return res.json({movies, shows});
    })
    .catch(err => {
      logger.log('error', err);
      res.status(500).send(err);
      return null;
    });
}
