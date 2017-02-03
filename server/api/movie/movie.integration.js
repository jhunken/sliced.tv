'use strict';

import app from '../..';
import Movie from './movie.model';
import User from '../user/user.model';
import request from 'supertest';

describe('Movie API:', function() {
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

  describe('GET /api/movies', function() {
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


    it('should respond with an array of movies when authenticated', function(done) {
      let movies;
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

    it('should properly handle a mixture of new and previously saved movies', function(done) {
      // Create newMovie
      let previouslySavedMovie = new Movie({
        guideboxID: 134422,
        title: 'Dirty Grandpa',
        releaseYear: 2016,
        themoviedb: 291870,
        originalTitle: 'Dirty Grandpa (previously saved)',
        alternateTitles: ['Dirty Grandpa (Unrated)', 'Dirty Grandpa (Unrated Version)', 'Dirty Grandpa Unrated'],
        imdb: 'tt1860213',
        preOrder: false,
        inTheaters: false,
        releaseDate: '2016-01-21',
        rating: 'R',
        rottentomatoes: 771388387,
        freebase: '',
        wikipediaID: 0,
        metacritic: 'http://www.metacritic.com/movie/dirty-grandpa',
        commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/dirty-grandpa',
        poster120x171: 'http://static-api.guidebox.com/111615/thumbnails_movies_small/134422-6324042329-7119411346-5142547209-small-120x171-alt-.jpg',
        poster240x342: 'http://static-api.guidebox.com/111615/thumbnails_movies_medium/134422-151683060-177236004-8937469679-medium-240x342-alt-.jpg',
        poster400x570: 'http://static-api.guidebox.com/111615/thumbnails_movies/-alt--134422-6996994163-7736085253-8175344849-large-400x570-alt-.jpg'
      });
      previouslySavedMovie.save().then(function() {
        let movies;
        let foundPreviouslySavedMovie = false;
        request(app)
          .get('/api/movies/all/99/10/all/all')
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
            for(let movie of movies) {
              if(movie.originalTitle === previouslySavedMovie.originalTitle) {
                foundPreviouslySavedMovie = true;
              }
            }
            expect(foundPreviouslySavedMovie).to.be.true;
            done();
          });
      });
    });
  });

  describe('GET /api/movies/:guideboxID', function() {
    let token, movie, newMovie;

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
              guideboxID: '123456789',
              overview: 'This is an overview'
            });
            movie.save().then(function(savedMovie) {
              newMovie = savedMovie;
              done();
            });
          });
        });
    });

    // Clears movies and users after testing
    after(function(done) {
      return Movie.remove().then(function() {
        done();
      });
    });

    it('should respond with the requested movie', function(done) {
      request(app)
        .get(`/api/movies/${newMovie.guideboxID}`)
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
          expect(movie.guideboxID).to.equal(newMovie.guideboxID);
          done();
        });
    });

    it('should respond with an error if movie is not found', function(done) {
      request(app)
        .get('/api/movies/000000000')
        .set('authorization', `Bearer ${token}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with an error if an invalid movie guideboxID is used', function(done) {
      request(app)
        .get('/api/movies/ABCDEFGH')
        .set('authorization', `Bearer ${token}`)
        .expect(400)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
