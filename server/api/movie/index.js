'use strict';
import * as auth from '../../auth/auth.service';
let express = require('express');
let controller = require('./movie.controller');

let router = express.Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.get('/all/:start/:limit/:sources/:platform', auth.isAuthenticated(), controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);

module.exports = router;
