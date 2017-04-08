'use strict';
import kue from 'kue';
import kueUIExpress from 'kue-ui-express';
import Queue from './index';
import config from '../config/environment';

// Kue
export default function(app) {
  kue.createQueue({
    redis: config.redis.url
  });
  kueUIExpress(app, '/kue/', '/api/kue');
  app.use('/api/kue', kue.app);
  Queue.process();
}
