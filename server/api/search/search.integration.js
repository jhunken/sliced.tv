'use strict';

let app = require('../..');
import request from 'supertest';

describe('Search API:', function() {

  describe('GET /api/search', function() {

    it('should respond with search results', function(done) {
      request(app)
        .get('/api/search/batman')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            done(err);
          }
          expect(res.body.movies.results).to.be.instanceOf(Array);
          expect(res.body.shows.results).to.be.instanceOf(Array);
          done();
        });
    });
  });
});
