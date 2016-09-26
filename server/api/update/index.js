'use strict';

var express = require('express');
var controller = require('./update.controller');

var router = express.Router();

router.get('/movies/new', controller.newMovies);
router.get('/movies/new/:lastProcessTime', controller.newMovies);
module.exports = router;
