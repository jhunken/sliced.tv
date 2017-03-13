/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/movies              ->  index
 * GET     /api/movies/:id          ->  show
 */

'use strict';
import Movie from './movie.model';
import Utils from '../../components/utils';
const mediaType = 'movies';
const logger = require('../../components/utils').logger;

/***
 * Get a list of movies from guidebox with given parameters.
 * @param req
 * @param res
 */
export function index(req, res) {
  let offset = req.params && req.params.offset && Number.parseInt(req.params.offset, 10) ? req.params.offset : '0';
  let limit = req.params && req.params.limit && Number.parseInt(req.params.limit, 10) ? req.params.limit : '25';
  let sources = req.params && req.params.sources ? req.params.sources : 'all';
  let platform = req.params && req.params.platform ? req.params.platform : 'all';
  let totalResults;
  return Utils.getGuideboxMedia(mediaType, offset, limit, sources, platform, true, true)
    .then(guideboxMedia => {
      totalResults = guideboxMedia.totalResults;
      return Utils.processGuideboxMediaResults(guideboxMedia, mediaType);
    })
    .then(function(results) {
      return res.json({results, totalResults});
    })
    .catch(errRes => {
      logger.log('error', errRes);
      return res.status(500).json(errRes.message);
    });
}

// Gets a single Movie from the DB
export function show(req, res) {
  return Movie.findById(req.params.id).exec()
    .then(Utils.handleMediaRequest(res, mediaType))
    .catch(err => {
      logger.log('error', err);
      return res.status(500).json(err.message);
    });
}
