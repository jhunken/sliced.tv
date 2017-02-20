'use strict';

import request from 'request';
import config from '../../config/environment';
import Utils from '../../components/utils';
import Movie from '../movie/movie.model';
let Guidebox = require('guidebox')(config.guidebox.apiKey);

function search(req, res, type) {
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
        Movie.create(moviesToSave)
          .then(savedMovies => res.json({results: savedMovies, totalResults: searchRes.total_results}))
          .catch(err => {
            console.error(err);
            return res.status(500).send();
          });
      } else {
        res.status(500).end();
        return null;
      }
    })
    .catch(e => {
      console.error(e);
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
