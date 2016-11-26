/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/updates              ->  index
 */

'use strict';

import request from 'request';
import config from '../../config/environment';

// Gets a list of New Movies
export function newMovies(req, res) {
  var limit = req.query && req.query.limit && Number.parseInt(req.query.limit, 10) ? req.query.limit : '25';
  var page = req.query && req.query.page && Number.parseInt(req.query.page, 10) ? req.query.page : '0';
  var lastProcessTime = req.params && req.params.lastProcessTime ? req.params.lastProcessTime : Math.floor(new Date(new Date().getTime() - 24 * 60 * 60 * 1000).getTime() / 1000); //24 hours ago
  var requestUrl = `${config.guidebox.baseURL + config.guidebox.apiKey}/updates/movies/new/${lastProcessTime}?limit=${limit}&page=${page}`;
  return request(requestUrl,
    function(error, response, body) {
      if(!error && response.statusCode === 200 && body !== {}) {
        try {
          var parasedRes = JSON.parse(body);
          return res.json(parasedRes);
        } catch(e) {
          console.error(e);
          return res.status(500).send();
        }
      } else {
        console.error('statusCode:', response.statusCode, ', error: ', `${error}, body: `, body);
        return res.status(response.statusCode).send(error);
      }
    });
}

