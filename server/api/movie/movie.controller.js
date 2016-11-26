/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/movies              ->  index
 * POST    /api/movies              ->  create
 * GET     /api/movies/:id          ->  show
 * PUT     /api/movies/:id          ->  update
 * DELETE  /api/movies/:id          ->  destroy
 */

'use strict';
import Movie from './movie.model';
import config from '../../config/environment';
import Promise from 'bluebird';

function handleMovieRequest(res, id) {
  return function(entity) {
    if(!entity || !entity.overview) {
      // Not found locally or requires additional lookup -- query remote
      return getContent(`${config.guidebox.baseURL + config.guidebox.apiKey}/movies/${id}`)
        .then(body => {
          let movie = JSON.parse(body);
          if(movie && movie.id) {
            if(!movie.imdb_rating) {
              // Retrieve additional omdb api info
              return getOMDBInfo(movie)
                .then(updatedMovie => res.json(updatedMovie).end());
            } else {
              // nothing else to retrieve
              return res.json(entity).end();
            }
          } else {
            return res.status(404).send('Not found');
          }
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      // Exists already locally
      console.log('retrieved from mongodb: ', entity.title);
      return res.json(entity).end();
    }
  };
}

function saveMovie(movie) {
  return new Promise(function(resolve, reject) {
    return Movie.findOne({guidebox_id: movie.guidebox_id}).exec()
      .then(function(entity) {
        if(!entity) {
          // Save new
          let newMovie = Movie({
            cast: movie.cast,
            directors: movie.directors,
            genres: movie.genres,
            other_sources: movie.other_sources,
            overview: movie.overview,
            purchase_android_sources: movie.purchase_android_sources,
            purchase_ios_sources: movie.purchase_ios_sources,
            purchase_web_sources: movie.purchase_web_sources,
            social: movie.social,
            tags: movie.tags,
            trailers: movie.trailers,
            writers: movie.writers,
            guidebox_id: movie.guidebox_id,
            title: movie.title,
            release_year: movie.release_year,
            themoviedb: movie.themoviedb,
            original_title: movie.original_title,
            alternate_titles: movie.alternate_titles,
            imdb: movie.imdb,
            pre_order: movie.pre_order,
            in_theaters: movie.in_theaters,
            release_date: movie.release_date,
            rating: movie.rating,
            rottentomatoes: movie.rottentomatoes,
            imdb_rating: movie.imdb_rating,
            imdb_votes: movie.imdb_votes,
            tomato_meter: movie.tomato_meter,
            tomato_image: movie.tomato_image,
            tomato_rating: movie.tomato_rating,
            tomato_reviews: movie.tomato_reviews,
            tomato_fresh: movie.tomato_fresh,
            tomato_rotten: movie.tomato_rotten,
            tomato_consensus: movie.tomato_consensus,
            tomato_user_meter: movie.tomato_user_meter,
            tomato_user_rating: movie.tomato_user_rating,
            tomato_user_reviews: movie.tomato_user_reviews,
            tomato_url: movie.tomato_url,
            freebase: movie.freebase,
            wikipedia_id: movie.wikipedia_id,
            metacritic: movie.metacritic,
            common_sense_media: movie.common_sense_media,
            poster_120x171: movie.poster_120x171,
            poster_240x342: movie.poster_240x342,
            poster_400x570: movie.poster_400x570

          });

          return newMovie.save(function(err, savedMovie) {
            if(err) {
              return reject(err);
            } else {
              console.log('movie saved to db: ', savedMovie.title);
              return resolve(savedMovie);
            }
          });
        } else {
          // Update
          entity.imdb_rating = movie.imdb_rating;
          entity.imdb_votes = movie.imdb_votes;
          entity.tomato_meter = movie.tomato_meter;
          entity.tomato_image = movie.tomato_image;
          entity.tomato_rating = movie.tomato_rating;
          entity.tomato_reviews = movie.tomato_reviews;
          entity.tomato_fresh = movie.tomato_fresh;
          entity.tomato_rotten = movie.tomato_rotten;
          entity.tomato_consensus = movie.tomato_consensus;
          entity.tomato_user_meter = movie.tomato_user_meter;
          entity.tomato_user_rating = movie.tomato_user_rating;
          entity.tomato_user_reviews = movie.tomato_user_reviews;
          entity.tomato_url = movie.tomato_url;
          return entity.save(function(err, savedMovie) {
            if(err) {
              return reject(err);
            } else {
              console.log('movie updated to db: ', savedMovie.title);
              return resolve(savedMovie);
            }
          });
        }
      })
      .catch(function(err) {
        console.error(err);
        return reject(err);
      });
  });
}

const getContent = function(url) {
  // return new pending promise
  return new Promise((resolve, reject) => {
    // select http or https module, depending on reqested url
    const lib = url.startsWith('https') ? require('https') : require('http');
    const request = lib.get(url, response => {
      // handle http errors
      if(response.statusCode < 200 || response.statusCode > 299) {
        return reject(new Error('Failed to load page, status code: ' + response.statusCode));
      }
      // temporary data holder
      const body = [];
      // on every content chunk, push it to the data array
      response.on('data', chunk => body.push(chunk));
      // we are done, resolve promise with those joined chunks
      response.on('end', () => resolve(body.join('')));
    });
    // handle connection errors of the request
    return request.on('error', err => reject(err));
  });
};

function getGuideboxMovies(start, limit, sources, platform) {
  return getContent(`${config.guidebox.baseURL + config.guidebox.apiKey}/movies/all/${start}/${limit}/${sources}/${platform}`)
    .then(body => {
      let movies = JSON.parse(body).results;

      if(movies && movies.length) {
        let m;
        for(let i = 0; i < movies.length; i++) {
          m = movies[i];
          // This conflicts with mongodb id
          m.guidebox_id = m.id;
          delete m.id;
        }
        return {results: movies, totalResults: JSON.parse(body).total_results};
      } else {
        return null;
      }
    })
    .catch(err => {
      console.error(err);
    });
}

/***
 *
 * @param movie
 */
function getOMDBInfo(movie) {
  return getContent(`${config.omdbapi.baseURL}i=${movie.imdb}&tomatoes=true`)
    .then(omdbBody => {
      let parsedOMDBMovie = JSON.parse(omdbBody);
      movie.imdb_rating = parsedOMDBMovie.imdbRating;
      movie.imdb_votes = parsedOMDBMovie.imdbVotes;
      movie.tomato_meter = parsedOMDBMovie.tomatoMeter;
      movie.tomato_image = parsedOMDBMovie.tomatoImage;
      movie.tomato_rating = parsedOMDBMovie.tomatoRating;
      movie.tomato_reviews = parsedOMDBMovie.tomatoReviews;
      movie.tomato_fresh = parsedOMDBMovie.tomatoFresh;
      movie.tomato_rotten = parsedOMDBMovie.tomatoRotten;
      movie.tomato_consensus = parsedOMDBMovie.tomatoConsensus;
      movie.tomato_user_meter = parsedOMDBMovie.tomatoUserMeter;
      movie.tomato_user_rating = parsedOMDBMovie.tomatoUserRating;
      movie.tomato_user_reviews = parsedOMDBMovie.tomatoUserReviews;
      movie.tomato_url = parsedOMDBMovie.tomatoURL;
      console.info('got omdb info for ', movie.title);
      return movie;
    })
    .catch(err => {
      console.error(err);
      return null;
    });
}

/***
 * Checks if given movie is in the savedMovies array. If so just returns the saved entity. Otherwise returns a promise
 * that will retrieve the additonal info from the other api providers.
 * @param movie
 * @param savedMovies
 * @returns {Promise<R>|Promise<void>}
 */
function compareArrays(movie, savedMovies) {
  for(let element of savedMovies) {
    if(movie.guidebox_id === element.guidebox_id) {
      return Promise.resolve(element);
    }
  }
  return getOMDBInfo(movie)
    .then(function(omdbMovie) {
      if(omdbMovie) {
        return saveMovie(omdbMovie);
      } else {
        return movie;
      }
    });
}

/***
 * Get a list of movies from guidebox with given parameters.
 * @param req
 * @param res
 */
export function index(req, res) {
  let start = req.params && req.params.start && Number.parseInt(req.params.start, 10) ? req.params.start : '0';
  let limit = req.params && req.params.limit && Number.parseInt(req.params.limit, 10) ? req.params.limit : '25';
  let sources = req.params && req.params.sources ? req.params.sources : 'all';
  let platform = req.params && req.params.platform ? req.params.platform : 'all';
  let totalResults = 0;

  return getGuideboxMovies(start, limit, sources, platform)
    .then(guideboxMovies => {
      if(guideboxMovies && guideboxMovies.results && guideboxMovies.results.length) {
        totalResults = guideboxMovies.totalResults;
        let m;
        let promises = [];
        let guideboxIDs = [];
        let previouslySavedMovies = [];
        for(let i = 0; i < guideboxMovies.results.length; i++) {
          guideboxIDs.push(guideboxMovies.results[i].guidebox_id);
        }
        return Movie.find({
          guidebox_id: {
            $in: guideboxIDs
          }
        }).exec()
          .then(entities => {
            for(let j = 0; j < entities.length; j++) {
              previouslySavedMovies.push(entities[j]);
            }
            // Compare the two arrays for any that haven't been saved
            for(let k = 0; k < guideboxMovies.results.length; k++) {
              m = guideboxMovies.results[k];
              promises.push(compareArrays(m, previouslySavedMovies));
            }
            return Promise.all(promises);
          });
      } else {
        Promise.reject(new Error('No results from Guidebox')).then(function() {
          // not called
        }, function(error) {
          console.log(error); // Stacktrace
        });
      }
    })
    .then(function(results) {
      return res.json({results, total_results: totalResults});
    })
    .catch(errRes => res.status(500).json(errRes.message));
}

// Gets a single Movie from the DB
export function show(req, res) {
  return Movie.findOne({guidebox_id: req.params.id}).exec()
    .then(handleMovieRequest(res, req.params.id))
    .catch(err => {
      console.log(err);
      return res.status(400).json(err.message);
    });
}
