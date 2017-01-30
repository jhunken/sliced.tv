'use strict';

import request from 'request';
import config from '../../config/environment';
import Utils from '../../components/utils';
import Movie from '../movie/movie.model';

function search(req, res, mediaType) {
  // Guidebox api requires TRIPLE url encoded query
  let query = encodeURIComponent(encodeURIComponent(encodeURIComponent(req.params.query)));
  let mediaTypeComponentUrl = mediaType === 'movie' ? '/search/movie/title/' : '/search/title/';
  let fullSearchUrl = `${config.guidebox.baseURL + config.guidebox.apiKey + mediaTypeComponentUrl + query}/`;
  console.log(fullSearchUrl);
  return request(fullSearchUrl,
    function(error, response, body) {
      if(!error && response.statusCode === 200 && body !== {}) {
        let results = JSON.parse(body).results;

        if(results && results.length) {
          let moviesToSave = [];
          results = Utils.normalizeGuideboxFields(results);
          for(let movieToSave of results) {
            moviesToSave.push(new Movie(movieToSave));
          }
          Movie.create(moviesToSave)
            .then(savedMovies => res.json({results: savedMovies, totalResults: JSON.parse(body).total_results}))
            .catch(err => {
              console.error(err);
              return res.status(500).send();
            });
        } else {
          res.status(400).end();
          return null;
        }
      } else {
        console.error('statusCode:', response.statusCode, ', error: ', `${error}, body: `, body);
        res.status(response.statusCode).send(error);
        return null;
      }
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
