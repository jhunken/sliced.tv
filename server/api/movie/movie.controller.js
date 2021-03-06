/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/movies              ->  index
 * GET     /api/movies/:id          ->  show
 */

'use strict';
import Movie from './movie.model';
import Utils from '../../components/utils';
import Queue from '../../queue';
const mediaType = 'movies';
const logger = require('../../components/utils').logger;

/***
 * Get a list of movies from guidebox with given parameters.
 * @param req
 * @param res
 */
export function index(req, res) {
  let offset = req.params && req.params.offset && !Number.isNaN(Number.parseInt(req.params.offset, 10)) ? Number.parseInt(req.params.offset, 10) : -1;
  let limit = req.params && req.params.limit && !Number.isNaN(Number.parseInt(req.params.limit, 10)) ? Number.parseInt(req.params.limit, 10) : -1;

  if(offset < 0 || limit < 0) {
    logger.log('debug', 'req.params.offset: %s', req.params.offset);
    logger.log('debug', 'req.params.limit: %s', req.params.limit);
    return res.status(400).json('invalid offset or limit');
  }

  let options = {
    sort: {popularity: 1},
    lean: true,
    offset,
    limit,
  };

  return Movie.paginate({}, options)
    .then(function(results) {
      // send to Queue to asynchronously update OMDB rating so we don't block main request. Socket.io will be used to
      // update UI
      let mediaItem;
      const ONE_DAY = 60 * 60 * 1000 * 24;
      for(let i = 0; i < results.docs.length; i++) {
        mediaItem = results.docs[i];
        // check if omdbUpdated is more than a day old
        if(!mediaItem.omdbUpdated || new Date().getTime() - mediaItem.omdbUpdated > ONE_DAY) {
          Queue.addOMDBJob(mediaItem, mediaType);
        }
      }
      logger.debug(JSON.stringify(results));
      return res.json({results: results.docs, totalResults: results.total});
    })
    .catch(errRes => {
      logger.log('error', errRes);
      return res.status(400).json(errRes.message);
    });
}

// Gets a single Movie from the DB
export function show(req, res) {
  return Movie.findById(req.params.id)
    .exec()
    .then(Utils.handleMediaRequest(res, mediaType))
    .catch(err => {
      logger.log('warn', err);
      return res.status(404).json(err.message);
    });
}
