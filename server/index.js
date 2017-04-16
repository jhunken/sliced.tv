'use strict';
// Set default node environment to development
let env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(env === 'production') {
  require('newrelic');
}

if(env === 'development' || env === 'test') {
  // Register the Babel require hook
  require('babel-register');
}

// Export the application
exports = module.exports = require('./app');
