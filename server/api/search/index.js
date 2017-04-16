'use strict';

let express = require('express');
let controller = require('./search.controller');

let router = express.Router();

router.get('/:query', controller.search);

module.exports = router;
