'use strict';

import app from '../..';
import Movie from './movie.model';
import request from 'supertest';

describe('Movie API:', function() {
  // Cleanup movies before testing
  before(function() {
    return Movie.remove();
  });

  // Clears movies after testing
  after(function() {
    return Movie.remove();
  });

  describe('GET /api/movies', function() {
    it('should respond with an array of movies', done => {
      let movies;
      request(app)
        .get('/api/movies')
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
      let movies;
      request(app)
        .get('/api/movies/all/50/10/all/all')
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

    it('should respond with a 500 when "start" param is incorrect', function(done) {
      request(app)
        .get('/api/movies/all/999999999/10/all/all')
        .expect(500)
        .end(done);
    });

    it('should respond with a 500 when using invalid params', function(done) {
      request(app)
        .get('/api/movies/all/invalid/invalid/invalid/invalid')
        .expect(500)
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
              if(movie.title === previouslySavedMovie.title) {
                foundPreviouslySavedMovie = true;
              }
            }
            expect(foundPreviouslySavedMovie).to.be.true;
            done();
          });
      });
    });
  });

  describe('GET /api/movies/:id', function() {
    let movie;
    let newMovie;

    before(done => {
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

    // Clears movies after testing
    after(function(done) {
      return Movie.remove().then(function() {
        done();
      });
    });

    it('should respond with the requested movie', function(done) {
      request(app)
        .get(`/api/movies/${newMovie.id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            done(err);
          }
          movie = res.body;
          expect(movie.title).to.equal('Fake Movie');
          expect(movie.guideboxID).to.equal(newMovie.guideboxID);
          done();
        });
    });

    it('should respond with an error if movie is not found', function(done) {
      request(app)
        .get('/api/movies/0000813f7b83032d4dbb1000')
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
        .expect(400)
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
