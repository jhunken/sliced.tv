'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

import app from '../..';
import request from 'supertest';
import Movie from '../movie/movie.model';
import User from '../user/user.model';


describe('Watchlist API:', function() {
  let user;
  let token;
  let newWatchlist;

  // Cleanup movies and users before testing
  before(function() {
    return Movie.remove().then(function() {
      return User.remove().then(function() {
        user = new User({
          name: 'Fake User',
          email: 'test@example.com',
          password: 'password'
        });

        return user.save();
      });
    });
  });

  // Clears users after testing
  after(function() {
    return User.remove();
  });

  describe('GET /api/watchlists', function() {


    before(function(done) {
      // Get authenticated user token
      request(app)
        .post('/auth/local')
        .send({
          email: 'test@example.com',
          password: 'password'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            done(err);
          }
          token = res.body.token;
          done();
        });
    });


    it('should respond with JSON array when authenticated', function(done) {
      let watchlists;
      request(app)
        .get('/api/watchlists')
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          watchlists = res.body;
          expect(watchlists).to.be.instanceOf(Array);
          expect(watchlists.length).to.equal(1);
          done();
        });
    });
  });

  it('should respond with a 401 when unauthenticated', function(done) {
    request(app)
      .get('/api/watchlists')
      .expect(401)
      .end(err => {
        if(err) {
          return done(err);
        }
        done();
      });
  });

  describe('POST /api/watchlists', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/watchlists')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'New Watchlist',
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newWatchlist = res.body;
          done();
        });
    });

    it('should respond with the newly created watchlist', function() {
      console.log(newWatchlist);
      expect(newWatchlist.name).to.equal('New Watchlist');
    });
  });

  describe('GET /api/watchlists/:id', function() {
    let watchlist;

    beforeEach(function(done) {
      request(app)
        .get(`/api/watchlists/${newWatchlist._id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          watchlist = res.body;
          done();
        });
    });

    afterEach(function() {
      watchlist = {};
    });

    it('should respond with the requested watchlist', function() {
      expect(watchlist.name).to.equal('New Watchlist');
    });
  });

  describe('PUT /api/watchlists/:id', function() {
    let updatedWatchlist;

    beforeEach(function(done) {
      request(app)
        .put(`/api/watchlists/${newWatchlist._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'Updated Watchlist',
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedWatchlist = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedWatchlist = {};
    });

    it('should respond with the updated watchlist', function() {
      expect(updatedWatchlist.name).to.equal('Updated Watchlist');
    });

    it('should respond with the updated watchlist on a subsequent GET', function(done) {
      request(app)
        .get(`/api/watchlists/${newWatchlist._id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let watchlist = res.body;

          expect(watchlist.name).to.equal('Updated Watchlist');

          done();
        });
    });
  });

  describe('PATCH /api/watchlists/:id', function() {
    let patchedWatchlist;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/watchlists/${newWatchlist._id}`)
        .set('Authorization', `Bearer ${token}`)
        .send([
          {op: 'replace', path: '/name', value: 'Patched Watchlist'},
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedWatchlist = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedWatchlist = {};
    });

    it('should respond with the patched watchlist', function() {
      expect(patchedWatchlist.name).to.equal('Patched Watchlist');
    });
  });

  describe('DELETE /api/watchlists/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/watchlists/${newWatchlist._id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when watchlist does not exist', function(done) {
      request(app)
        .delete(`/api/watchlists/${newWatchlist._id}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
