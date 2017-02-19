'use strict';

let express = require('express');
let controller = require('./search.controller');

let router = express.Router();

router.get('/:query', controller.searchAll);
router.get('/movies/:query', controller.searchMovies);
router.get('/shows/:query', controller.searchShows);


module.exports = router;
