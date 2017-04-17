'use strict';
import kue from 'kue';
import kueUIExpress from 'kue-ui-express';
import Queue from './index';
import config from '../config/environment';
import KueCleanup from './cleanup';

// Kue Cleanup
// const CLEANUP_MAX_COMPLETE_TIME = 24 * 60 * 60 * 1000; // 1 day
const CLEANUP_MAX_COMPLETE_TIME = 1 * 60 * 1000; // 1 mins
const PERIODIC_CLEANUP_INTERVAL = 5 * 60 * 1000; // 5 mins

KueCleanup.init({redis: config.redis.url, cleanupMaxCompleteTime: CLEANUP_MAX_COMPLETE_TIME});
KueCleanup.periodicCleanup(PERIODIC_CLEANUP_INTERVAL);

// Kue
export default function(app) {
  kue.createQueue({
    redis: config.redis.url
  });
  kueUIExpress(app, '/kue/', '/api/kue');
  app.use('/api/kue', kue.app);
  Queue.process();
}
