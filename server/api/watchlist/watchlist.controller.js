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
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
    }
    return entity;
  };
}
function checkPermissions(req, res) {
  let userIdObj = req.user._id;
  let userId = req.user.id;

  return function(entity) {
    return User.findOne({_id: userIdObj}, '-salt -password').exec()
      .then(user => { // don't ever give out the password or salt
        if(!user) {
          res.status(401).end();
        }
        if(user.id !== userId) {
          res.status(403).end();
        } else if(!entity.length) {
            // create default watchlist
          let watchlist = new Watchlist({name: 'Watchlist', user});
          return watchlist.save()
              .then(function(savedWatchlist) {
                return [savedWatchlist];
              })
              .catch(err => {
                console.error(err);
                res.status(500).end();
              });
        } else {
          return entity;
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).end();
      });
  };
}


function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
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
      return Watchlist.find({user})
        .populate('movies')
        .populate('shows')
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
    return Watchlist.findOne({_id: req.params.id})
      .populate('user', '-salt -password')
      .populate('movies')
      .populate('shows')
      .exec()
      .then(handleEntityNotFound(res))
      .then(checkPermissions(req, res))
      .then(respondWithResult(res))
      .catch(handleError(res));
  } else {
    res.status(404).end();
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

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Watchlist in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Watchlist.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Watchlist from the DB
export function destroy(req, res) {
  return Watchlist.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
