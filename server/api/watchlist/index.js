'use strict';

let express = require('express');
let controller = require('./watchlist.controller');
import * as auth from '../../auth/auth.service';


let router = express.Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.upsert);
router.patch('/:id', auth.isAuthenticated(), controller.patch);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);

// Collaborators
router.get('/:id/collaborators', auth.isAuthenticated(), controller.getCollaborators);
router.put('/:id/collaborators', auth.isAuthenticated(), controller.addCollaborator);

// Media (movies and shows)
router.patch('/:id/:mediatype/:mediaid', auth.isAuthenticated(), controller.addMedia);
router.delete('/:id/:mediatype/:mediaid', auth.isAuthenticated(), controller.removeMedia);
module.exports = router;
