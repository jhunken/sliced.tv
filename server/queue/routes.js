'use strict';
import kue from 'kue';
import kueUIExpress from 'kue-ui-express';
import Queue from './index';

// Kue
export default function(app) {
  kue.createQueue();
  kueUIExpress(app, '/kue/', '/api/kue');
  app.use('/api/kue', kue.app);
  Queue.process();
}
