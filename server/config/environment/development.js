'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo : {
    uri : 'mongodb://localhost/easiertv-dev'
  },

  // Seed database on startup
  seedDB : true,

  apiCache : {
    debug           : true,
    defaultDuration : 60000 // 1 min
  }

};
