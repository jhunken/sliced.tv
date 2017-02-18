'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

import app from '../..';
import request from 'supertest';
import Movie from '../movie/movie.model';
import User from '../user/user.model';


describe('Watchlist API:', function() {
  let user;

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

  // Clears movies and users after testing
  after(function() {
    return Movie.remove().then(function() {
      return User.remove();
    });
  });

  describe('GET /api/watchlists', function() {
    let token;

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

    // beforeEach(function(done) {
    //   request(app)
    //     .get('/api/watchlists')
    //     .expect(200)
    //     .expect('Content-Type', /json/)
    //     .end((err, res) => {
    //       if(err) {
    //         return done(err);
    //       }
    //       watchlists = res.body;
    //       done();
    //     });
    // });

    // it('should respond with JSON array when authenticated', function(done) {
    //   let watchlists;
    //   request(app)
    //     .get('/api/watchlists')
    //     .expect(200)
    //     .expect('Content-Type', /json/)
    //     .end((err, res) => {
    //       if(err) {
    //         return done(err);
    //       }
    //       watchlists = res.body;
    //       expect(watchlists).to.be.instanceOf(Array);
    //       done();
    //     });
    // });
  });

  // it('should respond with a 401 when unauthenticated', function(done) {
  //   request(app)
  //     .get('/api/watchlists')
  //     .expect(401)
  //     .end(err => {
  //       if(err) {
  //         return done(err);
  //       }
  //       done();
  //     });
  // });

  // describe('POST /api/watchlists', function() {
  //   beforeEach(function(done) {
  //     request(app)
  //       .post('/api/watchlists')
  //       .send({
  //         name: 'New Watchlist',
  //         info: 'This is the brand new watchlist!!!'
  //       })
  //       .expect(201)
  //       .expect('Content-Type', /json/)
  //       .end((err, res) => {
  //         if(err) {
  //           return done(err);
  //         }
  //         newWatchlist = res.body;
  //         done();
  //       });
  //   });
  //
  //   it('should respond with the newly created watchlist', function() {
  //     expect(newWatchlist.name).to.equal('New Watchlist');
  //     expect(newWatchlist.info).to.equal('This is the brand new watchlist!!!');
  //   });
  // });

  // describe('GET /api/watchlists/:id', function() {
  //   let watchlist;
  //
  //   beforeEach(function(done) {
  //     request(app)
  //       .get(`/api/watchlists/${newWatchlist._id}`)
  //       .expect(200)
  //       .expect('Content-Type', /json/)
  //       .end((err, res) => {
  //         if(err) {
  //           return done(err);
  //         }
  //         watchlist = res.body;
  //         done();
  //       });
  //   });
  //
  //   afterEach(function() {
  //     watchlist = {};
  //   });
  //
  //   it('should respond with the requested watchlist', function() {
  //     expect(watchlist.name).to.equal('New Watchlist');
  //     expect(watchlist.info).to.equal('This is the brand new watchlist!!!');
  //   });
  // });
  //
  // describe('PUT /api/watchlists/:id', function() {
  //   let updatedWatchlist;
  //
  //   beforeEach(function(done) {
  //     request(app)
  //       .put(`/api/watchlists/${newWatchlist._id}`)
  //       .send({
  //         name: 'Updated Watchlist',
  //         info: 'This is the updated watchlist!!!'
  //       })
  //       .expect(200)
  //       .expect('Content-Type', /json/)
  //       .end(function(err, res) {
  //         if(err) {
  //           return done(err);
  //         }
  //         updatedWatchlist = res.body;
  //         done();
  //       });
  //   });
  //
  //   afterEach(function() {
  //     updatedWatchlist = {};
  //   });
  //
  //   it('should respond with the updated watchlist', function() {
  //     expect(updatedWatchlist.name).to.equal('Updated Watchlist');
  //     expect(updatedWatchlist.info).to.equal('This is the updated watchlist!!!');
  //   });
  //
  //   it('should respond with the updated watchlist on a subsequent GET', function(done) {
  //     request(app)
  //       .get(`/api/watchlists/${newWatchlist._id}`)
  //       .expect(200)
  //       .expect('Content-Type', /json/)
  //       .end((err, res) => {
  //         if(err) {
  //           return done(err);
  //         }
  //         let watchlist = res.body;
  //
  //         expect(watchlist.name).to.equal('Updated Watchlist');
  //         expect(watchlist.info).to.equal('This is the updated watchlist!!!');
  //
  //         done();
  //       });
  //   });
  // });
  //
  // describe('PATCH /api/watchlists/:id', function() {
  //   var patchedWatchlist;
  //
  //   beforeEach(function(done) {
  //     request(app)
  //       .patch(`/api/watchlists/${newWatchlist._id}`)
  //       .send([
  //         {op: 'replace', path: '/name', value: 'Patched Watchlist'},
  //         {op: 'replace', path: '/info', value: 'This is the patched watchlist!!!'}
  //       ])
  //       .expect(200)
  //       .expect('Content-Type', /json/)
  //       .end(function(err, res) {
  //         if(err) {
  //           return done(err);
  //         }
  //         patchedWatchlist = res.body;
  //         done();
  //       });
  //   });
  //
  //   afterEach(function() {
  //     patchedWatchlist = {};
  //   });
  //
  //   it('should respond with the patched watchlist', function() {
  //     expect(patchedWatchlist.name).to.equal('Patched Watchlist');
  //     expect(patchedWatchlist.info).to.equal('This is the patched watchlist!!!');
  //   });
  // });
  //
  // describe('DELETE /api/watchlists/:id', function() {
  //   it('should respond with 204 on successful removal', function(done) {
  //     request(app)
  //       .delete(`/api/watchlists/${newWatchlist._id}`)
  //       .expect(204)
  //       .end(err => {
  //         if(err) {
  //           return done(err);
  //         }
  //         done();
  //       });
  //   });
  //
  //   it('should respond with 404 when watchlist does not exist', function(done) {
  //     request(app)
  //       .delete(`/api/watchlists/${newWatchlist._id}`)
  //       .expect(404)
  //       .end(err => {
  //         if(err) {
  //           return done(err);
  //         }
  //         done();
  //       });
  //   });
  // });
});
