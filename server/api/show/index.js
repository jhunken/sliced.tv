'use strict';

let express = require('express');
let controller = require('./show.controller');

let router = express.Router();

router.get('/', controller.index);
router.get('/all/:offset/:limit/:sources/:platform', controller.index);
router.get('/:id', controller.show);

module.exports = router;
