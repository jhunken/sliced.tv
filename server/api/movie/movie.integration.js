'use strict';

import app from '../..';
import Movie from './movie.model';
import request from 'supertest';

describe('Movie API:', function() {
  describe('GET /api/movies', function() {
    it('should respond with a 400 if missing params', done => {
      request(app)
        .get('/api/movies')
        .expect(400)
        .end(done);
    });

    it('should respond with an array of movies using params', function(done) {
      let movies;
      request(app)
        .get('/api/movies/all/10/10/all/all')
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

    it('should respond with an empty array when "start" param is incorrect', function(done) {
      let movies;
      request(app)
        .get('/api/movies/all/999999999/10/all/all')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            done(err);
          }
          movies = res.body.results;
          expect(movies).to.be.instanceOf(Array);
          expect(movies.length).to.equal(0);
          done();
        });
    });

    it('should respond with a 400 when using invalid params', function(done) {
      request(app)
        .get('/api/movies/all/invalid/invalid/invalid/invalid')
        .expect(400)
        .end(done);
    });
  });

  describe('GET /api/movies/:id', function() {
    let movie;
    let newMovie;

    before(done => {
      // Create newMovie
      media = new Movie({
        title: 'Fake Movie',
        guideboxID: '123456789',
        overview: 'This is an overview'
      });
      media.save().then(function(savedMovie) {
        newMovie = savedMovie;
        done();
      });
    });

    // Clears new movie after testing
    after(function() {
      return Movie.findByIdAndRemove(newMovie.id);
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
          media = res.body;
          expect(media.title).to.equal('Fake Movie');
          expect(media.guideboxID).to.equal(newMovie.guideboxID);
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

  });
})
;
