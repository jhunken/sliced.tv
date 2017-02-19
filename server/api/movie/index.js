'use strict';
let express = require('express');
let controller = require('./movie.controller');

let router = express.Router();

router.get('/', controller.index);
router.get('/all/:start/:limit/:sources/:platform', controller.index);
router.get('/:id', controller.show);

module.exports = router;
