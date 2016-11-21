'use strict';

import app from '../..';
import Movie from './movie.model';
import User from '../user/user.model';
import request from 'supertest';

describe('Movie API:', function() {
  var user;

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

  describe('GET /api/movies', function() {
    var token;

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


    it('should respond with an array of movies when authenticated', function(done) {
      var movies;
      request(app)
        .get('/api/movies')
        .set('authorization', `Bearer ${token}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            done(err);
          }
          movies = res.body.results;
          expect(movies).to.be.instanceOf(Array);
          done();
        });
    });

    it('should respond with an array of movies using params', function(done) {
      var movies;
      request(app)
        .get('/api/movies/all/50/10/all/all')
        .set('authorization', `Bearer ${token}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            done(err);
          }
          movies = res.body.results;
          expect(movies).to.be.instanceOf(Array);
          expect(movies.length).to.equal(10);
          done();
        });
    });

    it('should respond with a 200 when "start" param is incorrect', function(done) {
      request(app)
        .get('/api/movies/all/999999999/10/all/all')
        .set('authorization', `Bearer ${token}`)
        .expect(200)
        .end(done);
    });

    it('should respond with a 200 when using invalid params', function(done) {
      request(app)
        .get('/api/movies/all/invalid/invalid/invalid/invalid')
        .set('authorization', `Bearer ${token}`)
        .expect(200)
        .end(done);
    });

    it('should respond with a 401 when not authenticated', function(done) {
      request(app)
        .get('/api/movies')
        .expect(401)
        .end(done);
    });
  });

  describe('GET /api/movies/:id', function() {
    var token, movie, newMovie;

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
            console.error(err);
          }
          token = res.body.token;

          user.save().then(function() {
            // Create newMovie
            movie = new Movie({
              title: 'Fake Movie',
              guidebox_id: '123456789',
              overview: 'This is an overview'
            });
            movie.save().then(function(savedMovie) {
              newMovie = savedMovie;
              done();
            });
          });
        });
    });

    it('should respond with the requested movie', function(done) {
      request(app)
        .get(`/api/movies/${newMovie.guidebox_id}`)
        .set('authorization', `Bearer ${token}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            done(err);
          }
          console.log('in should respond with the requested movie', res.body);
          movie = res.body;
          expect(movie.title).to.equal('Fake Movie');
          expect(movie.guidebox_id).to.equal(newMovie.guidebox_id);
          done();
        });
    });

    it('should respond with an error if movie is not found', function(done) {
      request(app)
        .get('/api/movies/' + '000000000')
        .set('authorization', `Bearer ${token}`)
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
