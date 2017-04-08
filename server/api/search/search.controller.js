'use strict';

import Movie from '../movie/movie.model';
const logger = require('../../components/utils').logger;


function search(req, res, type) {
  let todo = type;
  todo;
  let query = req.params.query;
  return Movie.find({title: {$regex: new RegExp(query, 'ig')}})
    .then(results => res.json({results, totalResults: results.length}))
    .catch(e => {
      logger.log('error', e);
      res.status(500).send(e);
      return null;
    });
}

export function searchAll(req, res) {
  // TODO
  // return search(req, res, 'all');
  return res.status(500).send('not implemented');
}
//
export function searchMovies(req, res) {
  return search(req, res, 'movie');
}

export function searchShows(req, res) {
  return search(req, res, 'show');
}
