'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo    : {
    uri : 'mongodb://localhost/easiertv-dev'
  },
  apiCache : {
    debug           : true,
    defaultDuration : 60000 // 1 min
  },
  // Seed database on startup
  seedDB   : true

};
