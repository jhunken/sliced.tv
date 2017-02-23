/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/shows              ->  index
 * GET     /api/shows/:id          ->  show
 */

'use strict';

import Show from './show.model';
import Utils from '../../components/utils';
const mediaType = 'shows';
/***
 * Get a list of Movies from guidebox with given parameters.
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
    .catch(errRes => res.status(500).json(errRes.message));
}

// Gets a single Show from the DB
export function show(req, res) {
  return Show.findById(req.params.id).exec()
    .then(Utils.handleMediaRequest(res, mediaType))
    .catch(err => {
      console.log(err);
      return res.status(400).json(err.message);
    });
}
