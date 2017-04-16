/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/watchlists              ->  index
 * POST    /api/watchlists              ->  create
 * GET     /api/watchlists/:id          ->  show
 * PUT     /api/watchlists/:id          ->  upsert
 * PATCH   /api/watchlists/:id          ->  patch
 * DELETE  /api/watchlists/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Watchlist from './watchlist.model';
import User from '../user/user.model';
import mongoose from 'mongoose';
import _ from 'lodash';
const logger = require('../../components/utils').logger;

/***
 * Gets a watchlist by id with sensitive user info removed, and shows and movies populated.
 * @param id
 * @returns {Promise}
 */
let getFullWatchlistById = function(id, req, res) {
  return Watchlist.findById(id)
    .populate('owner', '-salt -password')
    .populate('movies')
    .populate('shows')
    .populate('collaborators')
    .exec()
    .then(handleEntityNotFound(res))
    .then(checkPermissions(req, res));
};

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.remove()
        .then(() => res.status(204).end());
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}
function checkPermissions(req, res) {
  let userIdObj = req.user._id;
  let userId = req.user.id;

  return function(entity) {
    if(entity) {
      return User.findOne({_id: userIdObj}, '-salt -password').exec()
        .then(user => { // don't ever give out the password or salt
          if(!user) {
            return res.status(401).end();
          }
          if(user.id !== userId) {
            return res.status(403).end();
          } else if(Array.isArray(entity) && !entity.length) {
            // create default watchlist
            let watchlist = new Watchlist({name: 'Watchlist', owner: user});
            return watchlist.save()
              .then(function(savedWatchlist) {
                return [savedWatchlist];
              })
              .catch(err => {
                logger.log('error %j', err);
                return res.status(500).end();
              });
          } else {
            return entity;
          }
        })
        .catch(err => {
          logger.log('error', err);
          return res.status(500).end();
        });
    }
  };
}


function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    logger.log('error', err);
    return res.status(statusCode).send(err);
  };
}

// Gets a list of Watchlists
export function index(req, res) {
  let userId = req.user._id;

  return User.findOne({_id: userId}, '-salt -password').exec()
    .then(user => { // don't ever give out the password or salt
      if(!user) {
        return res.status(401).end();
      }
      return Watchlist.find({owner: user})
        .populate('movies')
        .populate('shows')
        .populate('collaborators')
        .exec()
        .then(checkPermissions(req, res))
        .then(respondWithResult(res))
        .catch(handleError(res));
    })
    .catch(handleError(res));
}

// Gets a single Watchlist from the DB
export function show(req, res) {
  if(mongoose.Types.ObjectId.isValid(req.params.id)) {
    return getFullWatchlistById(req.params.id, req, res)
      .then(respondWithResult(res))
      .catch(handleError(res));
  } else {
    return res.status(404).end();
  }
}

// Gets the collaborators for a given watchlist
export function getCollaborators(req, res) {
  if(mongoose.Types.ObjectId.isValid(req.params.id)) {
    return Watchlist.findOne({_id: req.params.id})
      .populate('collaborators')
      .exec()
      .then(handleEntityNotFound(res))
      .then(checkPermissions(req, res))
      .then(respondWithResult(res))
      .catch(handleError(res));
  } else {
    return res.status(404).end();
  }
}

// Creates a new Watchlist in the DB
export function create(req, res) {
  return Watchlist.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Watchlist in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Watchlist.findOneAndUpdate({_id: req.params.id}, req.body, {
    new: true,
    upsert: true,
    setDefaultsOnInsert: true,
    runValidators: true
  }).exec()
    .then(checkPermissions(req, res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Watchlist in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return getFullWatchlistById(req.params.id, req, res)
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Adds a collaborator to the given Watchlist
export function addCollaborator(req, res) {
  if(mongoose.Types.ObjectId.isValid(req.params.id)) {
    if(req.query.email) {
      // Find user by email
      let collaboratorEmail = req.query.email;
      return User.findOne({email: collaboratorEmail}, '-salt -password').exec()
        .then(user => { // don't ever give out the password or salt
          if(!user) {
            // TODO: How to handle new users that don't yet exist
            return res.status(400).end();
          }
          return Watchlist.findById({_id: req.params.id})
            .populate('collaborators')
            .exec()
            .then(watchlist => {
              watchlist.collaborators.push(user);
              logger.log('debug', 'added', collaboratorEmail, 'to', watchlist.id);
              return watchlist.save();
            })
            //TODO
            // .then(checkPermissions(req, res))
            .then(respondWithResult(res))
            .catch(handleError(res));
        })
        .catch(handleError(res));


      // return Watchlist.findOne({_id: req.params.id})
      //   .populate('collaborators')
      //   .exec()
      //   .then(handleEntityNotFound(res))
      //   .then(checkPermissions(req, res))
      //   .then(respondWithResult(res))
      //   .catch(handleError(res));
    } else {
      return res.status(400).end();
    }
  } else {
    return res.status(404).end();
  }
}

// Deletes a Watchlist from the DB
export function destroy(req, res) {
  return getFullWatchlistById(req.params.id, req, res)
    .then(removeEntity(res))
    .catch(handleError(res));
}

export function removeMedia(req, res) {
  if(mongoose.Types.ObjectId.isValid(req.params.id) && mongoose.Types.ObjectId.isValid(req.params.mediaid) && req.params.mediatype) {
    let mediaID = req.params.mediaid;
    let mediaType = req.params.mediatype;
    return Watchlist.findById(req.params.id)
      .populate('shows')
      .populate('movies')
      .exec()
      .then(handleEntityNotFound(res))
      .then(watchlist => {
        let mediaToDeleteIndex = _.findIndex(watchlist[mediaType], function(o) {
          return o.id === mediaID;
        });
        if(mediaToDeleteIndex >= 0) {
          watchlist[mediaType].splice(mediaToDeleteIndex, 1);
          return watchlist.save()
            .then(() => {
              logger.log('debug', '%s removed from watchlist %s', mediaID, watchlist.id);
              return res.status(200).end();
            })
            .catch(handleError(res));
        } else {
          logger.log('warn', 'media not found in watchlist', mediaID, watchlist.id);
          return res.status(400).end();
        }
      })
      .catch(handleError(res));
  } else {
    return res.status(404).end();
  }
}

export function addMedia(req, res) {
  if(mongoose.Types.ObjectId.isValid(req.params.id) && mongoose.Types.ObjectId.isValid(req.params.mediaid) && req.params.mediatype) {
    let mediaID = req.params.mediaid;
    let mediaType = req.params.mediatype;
    return Watchlist.findById(req.params.id)
      .populate(mediaType)
      .exec()
      .then(handleEntityNotFound(res))
      .then(watchlist => {
        let foundMediaIndex = _.findIndex(watchlist[mediaType], function(o) {
          return o.id === mediaID;
        });
        if(foundMediaIndex >= 0) {
          // don't add duplicates
          logger.log('debug', 'media already exists in watchlist', mediaID, watchlist.id);
          return res.status(409).end();
        } else {
          watchlist[mediaType].push(mediaID);
          return watchlist.save()
            .then(() => {
              logger.log('debug', '%s added to watchlist %s', mediaID, watchlist.id);
              return res.status(200).end();
            })
            .catch(handleError(res));
        }
      })
      .catch(handleError(res));
  } else {
    return res.status(404).end();
  }
}
