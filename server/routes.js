/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';
import config from './config/environment';
import * as auth from './auth/auth.service';

var apicache = require('apicache').options({
  debug           : config.apiCache.debug,
  defaultDuration : config.apiCache.defaultDuration
}).middleware;

export default function (app) {
  // Insert routes below
  app.use('/api/search', auth.isAuthenticated(), apicache(), require('./api/search'));
  app.use('/api/updates', auth.isAuthenticated(), apicache(), require('./api/update'));
  app.use('/api/movies', auth.isAuthenticated(), apicache(), require('./api/movie'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth').default);

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
    });
}
