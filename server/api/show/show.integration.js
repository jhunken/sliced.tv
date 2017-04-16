'use strict';

import app from '../..';
import Show from './show.model';
import request from 'supertest';

describe('Show API:', function() {
  describe('GET /api/shows', function() {
    it('should respond with a 400 if missing params', done => {
      request(app)
        .get('/api/shows')
        .expect(400)
        .end(done);
    });

    it('should respond with an array of shows using params', function(done) {
      let shows;
      request(app)
        .get('/api/shows/all/10/10/all/all')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            done(err);
          }
          shows = res.body.results;
          expect(shows).to.be.instanceOf(Array);
          expect(shows.length).to.equal(10);
          done();
        });
    });

    it('should respond with an empty array when "start" param is incorrect', function(done) {
      let shows;
      request(app)
        .get('/api/shows/all/999999999/10/all/all')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            done(err);
          }
          shows = res.body.results;
          expect(shows).to.be.instanceOf(Array);
          expect(shows.length).to.equal(0);
          done();
        });
    });

    it('should respond with a 400 when using invalid params', function(done) {
      request(app)
        .get('/api/shows/all/invalid/invalid/invalid/invalid')
        .expect(400)
        .end(done);
    });
  });

  describe('GET /api/shows/:id', function() {
    let show;
    let newShow;

    before(done => {
      // Create newShow
      show = new Show({
        title: 'Fake Show',
        guideboxID: '123456789',
        overview: 'This is an overview'
      });
      show.save().then(function(savedShow) {
        newShow = savedShow;
        done();
      });
    });

    // Clears shows after testing
    after(function() {
      return Show.findByIdAndRemove(newShow.id);
    });

    it('should respond with the requested show', function(done) {
      request(app)
        .get(`/api/shows/${newShow.id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            done(err);
          }
          show = res.body;
          expect(show.title).to.equal('Fake Show');
          expect(show.guideboxID).to.equal(show.guideboxID);
          done();
        });
    });

    it('should respond with an error if show is not found', function(done) {
      request(app)
        .get('/api/shows/0000813f7b83032d4dbb1000')
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
})
;
