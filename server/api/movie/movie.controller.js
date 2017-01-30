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

function handleMovieRequest(res) {
  return function(entity) {
    if(!entity.overview) {
      // Requires additional lookup -- query remote
      return getContent(`${config.guidebox.baseURL + config.guidebox.apiKey}/movies/${entity.guideboxID}`)
        .then(body => {
          let guideboxMovie = JSON.parse(body);
          if(guideboxMovie && guideboxMovie.id) {
            guideboxMovie = normalizeGuideboxFields(guideboxMovie);
            if(!guideboxMovie.imdbRating) {
              // Retrieve additional omdb api info
              return getOMDBInfo(guideboxMovie)
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

function saveMovie(movieToSave) {
  return new Promise(function(resolve, reject) {
    return Movie.findOne({guideboxID: movieToSave.id}).exec()
      .then(function(entity) {
        if(!entity) {
          // Save new
          let movieModel = Movie({
            cast: movieToSave.cast,
            directors: movieToSave.directors,
            genres: movieToSave.genres,
            // other_sources: movie.other_sources,
            overview: movieToSave.overview,
            // purchase_android_sources: movie.purchase_android_sources,
            // purchase_ios_sources: movie.purchase_ios_sources,
            // purchase_web_sources: movie.purchase_web_sources,
            social: movieToSave.social,
            tags: movieToSave.tags,
            trailers: movieToSave.trailers,
            writers: movieToSave.writers,
            guideboxID: movieToSave.id,
            title: movieToSave.title,
            releaseYear: movieToSave.releaseYear,
            themoviedb: movieToSave.themoviedb,
            originalTitle: movieToSave.originalTitle,
            alternateTitles: movieToSave.alternateTitles,
            imdb: movieToSave.imdb,
            preOrder: movieToSave.preOrder,
            inTheaters: movieToSave.inTheaters,
            releaseDate: movieToSave.releaseDate,
            rating: movieToSave.rating,
            rottentomatoes: movieToSave.rottentomatoes,
            imdbRating: movieToSave.imdbRating,
            imdbVotes: movieToSave.imdbVotes,
            tomatoMeter: movieToSave.tomatoMeter,
            tomatoImage: movieToSave.tomatoImage,
            tomatoRating: movieToSave.tomatoRating,
            tomatoReviews: movieToSave.tomatoReviews,
            tomatoFresh: movieToSave.tomatoFresh,
            tomatoRotten: movieToSave.tomatoRotten,
            tomatoConsensus: movieToSave.tomatoConsensus,
            tomatoUserMeter: movieToSave.tomatoUserMeter,
            tomatoUserRating: movieToSave.tomatoUserRating,
            tomatoUserReviews: movieToSave.tomatoUserReviews,
            tomatoUrl: movieToSave.tomatoUrl,
            freebase: movieToSave.freebase,
            wikipediaID: movieToSave.wikipediaID,
            metacritic: movieToSave.metacritic,
            commonSenseMedia: movieToSave.commonSenseMedia,
            poster120x171: movieToSave.poster120x171,
            poster240x342: movieToSave.poster240x342,
            poster400x570: movieToSave.poster400x570

          });

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

/***
 * Maps guidebox fields to Movie model fields
 * @param guideboxMovies
 * @returns {*}
 */
function normalizeGuideboxFields(guideboxMovies) {
  let mapFields = function(movie) {
    movie.alternateTitles = movie.alternate_titles;
    Reflect.deleteProperty(movie, 'alternate_titles');
    movie.commonSenseMedia = movie.common_sense_media;
    Reflect.deleteProperty(movie, 'common_sense_media');
    movie.freeAndroidSources = movie.free_android_sources;
    Reflect.deleteProperty(movie, 'free_android_sources');
    movie.freeIOSSources = movie.free_ios_sources;
    Reflect.deleteProperty(movie, 'free_ios_sources');
    movie.freeWebSources = movie.free_web_sources;
    Reflect.deleteProperty(movie, 'free_web_sources');
    movie.inTheaters = movie.in_theaters;
    Reflect.deleteProperty(movie, 'in_theaters');
    movie.originalTitle = movie.original_title;
    Reflect.deleteProperty(movie, 'original_title');
    movie.otherSources = movie.other_sources;
    Reflect.deleteProperty(movie, 'other_sources');
    movie.poster120x171 = movie.poster_120x171;
    Reflect.deleteProperty(movie, 'poster_120x171');
    movie.poster240x342 = movie.poster_240x342;
    Reflect.deleteProperty(movie, 'poster_240x342');
    movie.poster400x570 = movie.poster_400x570;
    Reflect.deleteProperty(movie, 'poster_400x570');
    movie.preoOrder = movie.pre_order;
    Reflect.deleteProperty(movie, 'pre_order');
    movie.purchaseAndroidSources = movie.purchase_android_sources;
    Reflect.deleteProperty(movie, 'purchase_android_sources');
    movie.purchaseIOSSources = movie.purchase_ios_sources;
    Reflect.deleteProperty(movie, 'purchase_ios_sources');
    movie.purchaseWebSources = movie.purchase_web_sources;
    Reflect.deleteProperty(movie, 'purchase_web_sources');
    movie.releaseDate = movie.release_date;
    Reflect.deleteProperty(movie, 'release_date');
    movie.releaseYear = movie.release_year;
    Reflect.deleteProperty(movie, 'release_year');
    movie.subscriptionAndroidSources = movie.subscription_android_sources;
    Reflect.deleteProperty(movie, 'subscription_android_sources');
    movie.subscriptionIOSSources = movie.subscription_ios_sources;
    Reflect.deleteProperty(movie, 'subscription_ios_sources');
    movie.subscriptionWebSources = movie.subscription_web_sources;
    Reflect.deleteProperty(movie, 'subscription_web_sources');
    movie.wikiepediaID = movie.wikipedia_id;
    Reflect.deleteProperty(movie, 'wikipedia_id');
    movie.tvEverywhereAndroidSources = movie.tv_everywhere_android_sources;
    Reflect.deleteProperty(movie, 'tv_everywhere_android_sources');
    movie.tvEverywhereIOSSources = movie.tv_everywhere_ios_sources;
    Reflect.deleteProperty(movie, 'tv_everywhere_ios_sources');
    movie.tvEverywhereWebSources = movie.tv_everywhere_web_sources;
    Reflect.deleteProperty(movie, 'tv_everywhere_web_sources');
    return movie;
  };
  if(guideboxMovies.length) {
    let normalizedMovies = [];
    for(let movie of guideboxMovies) {
      movie = mapFields(movie);
      normalizedMovies.push(movie);
    }
    return normalizedMovies;
  }
  // single movie
  return mapFields(guideboxMovies);
}

function getGuideboxMovies(start, limit, sources, platform) {
  return getContent(`${config.guidebox.baseURL + config.guidebox.apiKey}/movies/all/${start}/${limit}/${sources}/${platform}`)
    .then(body => {
      let movies = JSON.parse(body).results;
      if(movies && movies.length) {
        movies = normalizeGuideboxFields(movies);
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
          guideboxIDs.push(guideboxMovies.results[i].id);
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
