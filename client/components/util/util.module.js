'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('easierTvApp.util', [])
  .factory('Util', UtilService)
  .name;
