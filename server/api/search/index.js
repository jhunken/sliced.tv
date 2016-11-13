'use strict';

var express    = require('express');
var controller = require('./search.controller');
import * as auth from '../../auth/auth.service';

var router = express.Router();

router.get('/:query', auth.isAuthenticated(), controller.searchAll);
router.get('/movies/:query', auth.isAuthenticated(), controller.searchMovies);
router.get('/shows/:query', auth.isAuthenticated(), controller.searchShows);


module.exports = router;
