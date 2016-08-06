import app from './';
import fs from 'fs';
import mongoose from 'mongoose';
import nock from 'nock';
import config from './server/config/environment';


// Mock external http requests
nock('https://api-public.guidebox.com:443', {"encodedQueryParams" : true})
  .get('/v1.43/US/' + config.guidebox.apiKey + '/movies/all/0/25/all/all')
  .reply(200, JSON.parse(fs.readFileSync(__dirname + '/server/api/movie/movies.mock.json')), {
    'cache-control'         : 'no-cache',
    'content-type'          : 'application/json',
    date                    : 'Sat, 06 Aug 2016 20:04:40 GMT',
    responsetime            : '3.5890538692474',
    server                  : 'nginx/1.4.6 (Ubuntu)',
    'x-ratelimit-limit'     : '240',
    'x-ratelimit-remaining' : '238',
    'content-length'        : '24097',
    connection              : 'Close'
  });

nock('https://api-public.guidebox.com:443', {"encodedQueryParams" : true})
  .get('/v1.43/US/' + config.guidebox.apiKey + '/movies/000000000')
  .reply(200, {}, {
    'cache-control'         : 'no-cache',
    'content-type'          : 'application/json',
    date                    : 'Sat, 06 Aug 2016 22:43:38 GMT',
    responsetime            : '0.06171703338623',
    server                  : 'nginx/1.4.6 (Ubuntu)',
    'x-ratelimit-limit'     : '240',
    'x-ratelimit-remaining' : '238',
    'content-length'        : '2',
    connection              : 'Close'
  });

// Used for recording network requests
//nock.recorder.rec();

after(function (done) {
  app.angularFullstack.on('close', () => done());
  mongoose.connection.close();
  app.angularFullstack.close();
});
