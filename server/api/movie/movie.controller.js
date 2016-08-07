/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/movies              ->  index
 * POST    /api/movies              ->  create
 * GET     /api/movies/:id          ->  show
 * PUT     /api/movies/:id          ->  update
 * DELETE  /api/movies/:id          ->  destroy
 */

'use strict';

import request from 'request';
import Movie from './movie.model';
import config from '../../config/environment';
import Promise from 'bluebird';

function handleMovieRequest(res, id) {

  return function (entity) {
    if (!entity) {
      // Not found locally -- query remote
      return request(config.guidebox.baseURL + config.guidebox.apiKey + '/movies/' + id,
        function (error, response, body) {
          if (!error && response.statusCode === 200 && body !== {}) {
            var movie = JSON.parse(body);
            if (movie && movie.id) {
              res.json(movie).end();
              return saveMovie(movie)
                .then(function (savedMovie) {
                  return savedMovie;
                })
                .catch(function (err) {
                  console.error(err);
                  return null;
                });
            } else {
              res.status(404).send().end();
              return null;
            }
          } else {
            // Not found locally or remotely
            res.status(response.statusCode).send(error).end();
            return null;
          }
        })
    } else {
      // Exists already locally
      console.log('retrieved from mongodb: ', entity.title);
      res.json(entity).end();
      return entity;
    }
  };
}

function saveMovie(movie) {
  return new Promise(function (resolve, reject) {
    return Movie.findOne({guidebox_id : movie.id}).exec()
      .then(function (entity) {
        if (!entity) {
          var newMovie = Movie({
            cast                     : movie.cast,
            directors                : movie.directors,
            genres                   : movie.genres,
            other_sources            : movie.other_sources,
            overview                 : movie.overview,
            purchase_android_sources : movie.purchase_android_sources,
            purchase_ios_sources     : movie.purchase_ios_sources,
            purchase_web_sources     : movie.purchase_web_sources,
            social                   : movie.social,
            tags                     : movie.tags,
            trailers                 : movie.trailers,
            writers                  : movie.writers,
            guidebox_id              : movie.id,
            title                    : movie.title,
            release_year             : movie.release_year,
            themoviedb               : movie.themoviedb,
            original_title           : movie.original_title,
            alternate_titles         : movie.alternate_titles,
            imdb                     : movie.imdb,
            pre_order                : movie.pre_order,
            in_theaters              : movie.in_theaters,
            release_date             : movie.release_date,
            rating                   : movie.rating,
            rottentomatoes           : movie.rottentomatoes,
            freebase                 : movie.freebase,
            wikipedia_id             : movie.wikipedia_id,
            metacritic               : movie.metacritic,
            common_sense_media       : movie.common_sense_media,
            poster_120x171           : movie.poster_120x171,
            poster_240x342           : movie.poster_240x342,
            poster_400x570           : movie.poster_400x570

          });

          return newMovie.save(function (err, savedMovie) {
            if (err) {
              reject(err);
            } else {
              console.log('movie saved to db: ', savedMovie.title);
              resolve(savedMovie);
            }

          })
        }

      })
      .catch(function (err) {
        console.error(err);
        reject(err);
      });

  });

}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Movies
export function index(req, res) {
  return request(config.guidebox.baseURL + config.guidebox.apiKey + '/movies/all/0/25/all/all',
    function (error, response, body) {
      if (!error && response.statusCode === 200 && body !== {}) {
        var movies = JSON.parse(body).results;

        if (movies && movies.length) {
          res.json(movies).end();
          return movies;
        } else {
          res.status(400).send().end();
          return null;
        }
      } else {
        console.error('statusCode:', response.statusCode, ', error: ', error);
        res.status(response.statusCode).send(error).end();
        return null;
      }
    })
}

// Gets a single Movie from the DB
export function show(req, res) {
  return Movie.findOne({guidebox_id : req.params.id}).exec()
    .then(handleMovieRequest(res, req.params.id))
    .catch(handleError(res));
}
