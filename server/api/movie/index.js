'use strict';
import * as auth from '../../auth/auth.service';
var express    = require('express');
var controller = require('./movie.controller');

var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.get('/all/:start/:limit/:sources/:platform', auth.isAuthenticated(), controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);

module.exports = router;
