'use strict';

import request from 'request';
import config from '../../config/environment';

function search(req, res, mediaType) {

  // Guidebox api requires TRIPLE url encoded query
  var query                 = encodeURIComponent(encodeURIComponent(encodeURIComponent(req.params.query)));
  var mediaTypeComponentUrl = mediaType === 'movie' ? '/search/movie/title/' : '/search/title/';
  var fullSearchUrl         = config.guidebox.baseURL + config.guidebox.apiKey + mediaTypeComponentUrl + query + '/';
  console.log(fullSearchUrl);
  return request(fullSearchUrl,
    function (error, response, body) {
      if (!error && response.statusCode === 200 && body !== {}) {
        var results = JSON.parse(body).results;

        if (results && results.length) {
          res.json(JSON.parse(body)).end();
          return results;
        } else {
          res.status(400).send().end();
          return null;
        }
      } else {
        console.error('statusCode:', response.statusCode, ', error: ', error + ', body: ', body);
        res.status(response.statusCode).send(error).end();
        return null;
      }
    });
}

export function searchAll(req, res) {
  // TODO
  // return search(req, res, 'all');
  return res.status(500).send('not implemented').end();
}
//
export function searchMovies(req, res) {
  return search(req, res, 'movie');
}

export function searchShows(req, res) {
  return search(req, res, 'show');
}
