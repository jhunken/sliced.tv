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
import Utils from '../../components/utils';

function handleMovieRequest(res) {
  return function(entity) {
    if(!entity.overview) {
      // Requires additional lookup -- query remote
      return getContent(`${config.guidebox.baseURL + config.guidebox.apiKey}/movies/${entity.guideboxID}`)
        .then(body => {
          let guideboxMovie = JSON.parse(body);
          if(guideboxMovie && guideboxMovie.id) {
            guideboxMovie = Utils.normalizeGuideboxFields(guideboxMovie);
            if(!guideboxMovie.imdbRating) {
              // Retrieve additional omdb api info
              return getOMDBInfo(guideboxMovie)
                .then(updatedMovie => {
                  updatedMovie._id = entity.id;
                  return res.json(updatedMovie).end();
                });
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

function saveMovie(movieToSave) {
  return new Promise(function(resolve, reject) {
    return Movie.findOne({guideboxID: movieToSave.id}).exec()
      .then(function(entity) {
        if(!entity) {
          // Save new
          let movieModel = new Movie(movieToSave);

          return movieModel.save(function(err, savedMovie) {
            if(err) {
              return reject(err);
            } else {
              console.log('movie saved to db: ', savedMovie.title);
              return resolve(savedMovie);
            }
          });
        } else {
          // Update
          entity.imdbRating = movieToSave.imdbRating;
          entity.imdbVotes = movieToSave.imdbVotes;
          entity.tomatoMeter = movieToSave.tomatoMeter;
          entity.tomatoImage = movieToSave.tomatoImage;
          entity.tomatoRating = movieToSave.tomatoRating;
          entity.tomatoReviews = movieToSave.tomatoReviews;
          entity.tomatoFresh = movieToSave.tomatoFresh;
          entity.tomatoRotten = movieToSave.tomatoRotten;
          entity.tomatoConsensus = movieToSave.tomatoConsensus;
          entity.tomatoUserMeter = movieToSave.tomatoUserMeter;
          entity.tomatoUserRating = movieToSave.tomatoUserRating;
          entity.tomatoUserReviews = movieToSave.tomatoUserReviews;
          entity.tomatoUrl = movieToSave.tomatoUrl;
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
        return reject(new Error(`Failed to load page, status code: ${response.statusCode}`));
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
        movies = Utils.normalizeGuideboxFields(movies);
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
      movie.imdbRating = parsedOMDBMovie.imdbRating;
      movie.imdbVotes = parsedOMDBMovie.imdbVotes;
      movie.tomatoMeter = parsedOMDBMovie.tomatoMeter;
      movie.tomatoImage = parsedOMDBMovie.tomatoImage;
      movie.tomatoRating = parsedOMDBMovie.tomatoRating;
      movie.tomatoReviews = parsedOMDBMovie.tomatoReviews;
      movie.tomatoFresh = parsedOMDBMovie.tomatoFresh;
      movie.tomatoRotten = parsedOMDBMovie.tomatoRotten;
      movie.tomatoConsensus = parsedOMDBMovie.tomatoConsensus;
      movie.tomatoUserMeter = parsedOMDBMovie.tomatoUserMeter;
      movie.tomatoUserRating = parsedOMDBMovie.tomatoUserRating;
      movie.tomatoUserReviews = parsedOMDBMovie.tomatoUserReviews;
      movie.tomatoUrl = parsedOMDBMovie.tomatoURL;
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
 * that will retrieve the additional info from the other api providers.
 * @param guideboxMovie
 * @param savedMovies
 * @returns {Promise<R>|Promise<void>}
 */
function compareArrays(guideboxMovie, savedMovies) {
  for(let element of savedMovies) {
    if(guideboxMovie.id === element.guideboxID) {
      return Promise.resolve(element);
    }
  }
  return getOMDBInfo(guideboxMovie)
    .then(function(omdbMovie) {
      if(omdbMovie) {
        return saveMovie(omdbMovie);
      } else {
        return guideboxMovie;
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
        let guideboxMovie;
        let promises = [];
        let guideboxIDs = [];
        let previouslySavedMovies = [];
        for(let i = 0; i < guideboxMovies.results.length; i++) {
          guideboxIDs.push(guideboxMovies.results[i].guideboxID);
        }
        return Movie.find({
          guideboxID: {
            $in: guideboxIDs
          }
        }).exec()
          .then(entities => {
            for(let j = 0; j < entities.length; j++) {
              previouslySavedMovies.push(entities[j]);
            }
            // Compare the two arrays for any that haven't been saved
            for(let k = 0; k < guideboxMovies.results.length; k++) {
              guideboxMovie = guideboxMovies.results[k];
              promises.push(compareArrays(guideboxMovie, previouslySavedMovies));
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
      return res.json({results, totalResults});
    })
    .catch(errRes => res.status(500).json(errRes.message));
}

// Gets a single Movie from the DB
export function show(req, res) {
  return Movie.findById(req.params.id).exec()
    .then(handleMovieRequest(res, req.params.id))
    .catch(err => {
      console.log(err);
      return res.status(400).json(err.message);
    });
}
