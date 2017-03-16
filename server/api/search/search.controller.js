'use strict';

import config from '../../config/environment';
import Utils from '../../components/utils';
import Movie from '../movie/movie.model';
const logger = require('../../components/utils').logger;

let Guidebox = require('guidebox')(config.guidebox.apiKey);

function search(req, res, type) {
  let todo = type;
  todo;
  let query = req.params.query;
  return Guidebox.search.movies({query})
    .then(searchRes => {
      let results = searchRes.results;
      if(results && results.length) {
        let moviesToSave = [];
        results = Utils.normalizeGuideboxFields(results);
        for(let movieToSave of results) {
          moviesToSave.push(new Movie(movieToSave));
        }
        return Movie.create(moviesToSave)
          .then(savedMovies => res.json({results: savedMovies, totalResults: searchRes.total_results}))
          .catch(err => {
            logger.log('error', err);
            return res.status(500).send();
          });
      } else {
        logger.log('warn', `no search results found: ${query}`);
        res.status(404).end();
        return null;
      }
    })
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
