'use strict';

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
  },
  sequelize : {
    uri     : 'sqlite://',
    options : {
      logging : false,
      storage : 'test.sqlite',
      define  : {
        timestamps : false
      }
    }
  }
};
