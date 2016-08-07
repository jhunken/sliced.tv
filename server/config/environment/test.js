'use strict';
/*eslint no-process-env:0*/

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo     : {
    uri : 'mongodb://localhost/easiertv-test'
  },
  apiCache  : {
    debug           : true,
    defaultDuration : 60000 // 1 min
  }
};
