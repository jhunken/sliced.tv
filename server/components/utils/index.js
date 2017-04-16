'use strict';
import config from '../../config/environment';
import Movie from '../../api/movie/movie.model';
import Show from '../../api/show/show.model';
// import Queue from '../../queue';

const winston = require('winston');

let Guidebox = require('guidebox')(config.guidebox.apiKey);
let _ = require('lodash');

let utils = (() => {
  /***
   * Maps guidebox fields to Movie/Show model fields
   * @param guideboxMedia
   * @returns {*}
   */
  function normalizeGuideboxFields(guideboxMedia) {
    /***
     * Converts banner URL to https
     * @param banner
     * @param size
     */
    let convertBannerURLToHTTPS = function(banner, size) {
      if(banner[size] && banner[size].url) {
        banner[size].url = convertToHTTPS(banner[size].url);
      }
    };

    let mapFields = function(media) {
      media.guideboxId = media.id;
      Reflect.deleteProperty(media, 'id');
      // movies return 'imdb' while shows return 'imdb_id'
      if(media.imdb) {
        media.imdbID = media.imdb;
      }
      // convert all properties to camel-case
      let keys = Object.keys(media);
      for(let i in keys) {
        media[_.camelCase(keys[i])] = media[keys[i]];
      }

      // convert all images to https
      if(media.poster120X171) {
        media.poster120X171 = convertToHTTPS(media.poster120X171);
      }
      if(media.poster240X342) {
        media.poster240X342 = convertToHTTPS(media.poster240X342);
      }
      if(media.poster400X570) {
        media.poster400X570 = convertToHTTPS(media.poster400X570);
      }

      // shows
      if(media.artwork208X117) {
        media.artwork208X117 = convertToHTTPS(media.artwork208X117);
      }
      if(media.artwork304X171) {
        media.artwork304X171 = convertToHTTPS(media.artwork304X171);
      }
      if(media.artwork448X252) {
        media.artwork448X252 = convertToHTTPS(media.artwork448X252);
      }
      if(media.artwork608X342) {
        media.artwork608X342 = convertToHTTPS(media.artwork608X342);
      }
      if(media.poster) {
        media.poster = convertToHTTPS(media.poster);
      }
      if(media.banners && media.banners.length) {
        let banner;
        for(let bIdx in media.banners) {
          banner = media.banners[bIdx];
          convertBannerURLToHTTPS(banner, 'small');
          convertBannerURLToHTTPS(banner, 'medium');
          convertBannerURLToHTTPS(banner, 'large');
          convertBannerURLToHTTPS(banner, 'xlarge');
          media.banners[bIdx] = banner;
        }
      }

      return media;
    };
    if(guideboxMedia.length) {
      let normalizedMedia = [];
      for(let media of guideboxMedia) {
        media = mapFields(media);
        normalizedMedia.push(media);
      }
      return normalizedMedia;
    }
    // single movie
    return mapFields(guideboxMedia);
  }

  /***
   * Save given entity to database. If resolve/reject are present will use promises, otherwise will return res
   * @param entity
   * @param mediaType
   * @param res
   * @param resolve
   * @param reject
   * @private
   */
  let _saveEntity = function(entity, mediaType, res, resolve, reject) {
    return entity.save(function(err, savedMedia) {
      if(err) {
        if(reject) {
          return reject(err);
        } else {
          return res.status(500).end();
        }
      } else {
        logger.log('debug', `${mediaType} saved to db:  ${savedMedia.title}`);
        if(resolve) {
          return resolve(savedMedia);
        } else {
          return res.json(savedMedia).end();
        }
      }
    });
  };

  /***
   * Handle media request
   * @param res express response object
   * @param mediaType 'movies' or 'shows'
   * @returns {Function}
   */
  function handleMediaRequest(res, mediaType) {
    return function(entity) {
      if(!entity) {
        return res.status(404).send('Not found');
      } else if(!entity.overview) {
        // Requires additional lookup -- query remote
        return Guidebox[mediaType].retrieve(entity.guideboxId)
          .then(guideboxMedia => {
            if(guideboxMedia && guideboxMedia.id) {
              // Retrieve additional images
              return Guidebox[mediaType].images(entity.guideboxId)
                .then(imagesRes => {
                  guideboxMedia.banners = imagesRes.results.banners;
                  guideboxMedia = normalizeGuideboxFields(guideboxMedia);
                  // copy new guideboxMedia properties to entity
                  entity = Object.assign(entity, guideboxMedia);
                  if(!entity.imdbRating) {
                    // Retrieve additional omdb api info
                    return getOMDBInfo(guideboxMedia)
                      .then(updatedMedia => {
                        // copy updatedMovie properties to entity
                        entity = Object.assign(entity, updatedMedia);
                        // Save updated entity
                        return _saveEntity(entity, mediaType, res);
                      });
                  } else {
                    // Retrieved guidebox info, but not omdb. Nothing else to retrieve at this point.
                    // Save updated entity
                    return _saveEntity(entity, mediaType, res);
                  }
                })
                .catch(err => {
                  logger.log('error', err);
                  return res.status(500).end();
                });
            } else {
              return res.status(404).send('Not found');
            }
          })
          .catch(err => {
            logger.log('error', err);
            return res.status(500).end();
          });
      } else {
        // Exists already locally
        logger.log('debug', 'retrieved from mongodb: ', entity.title);
        return res.json(entity).end();
      }
    };
  }

  /***
   * Use Guidebox Client
   * @param mediaType
   * @param offset
   * @param limit
   * @param sources
   * @param platform
   * @param includePreorders
   * @param includeInTheaters
   */
  function getGuideboxMedia(mediaType, offset, limit, sources, platform, includePreorders, includeInTheaters) {
    return Guidebox[mediaType].list({
      offset,
      limit,
      sources,
      platform,
      include_preorders: includePreorders,
      include_in_theaters: includeInTheaters
    })
      .then(function(res) {
        let media = res.results;
        if(media && media.length) {
          let promises = [];
          let mediaToSave;
          media = normalizeGuideboxFields(media);
          for(let i = 0; i < media.length; i++) {
            mediaToSave = media[i];
            // capture the order it was received from Guidebox since it returns results based on popularity
            mediaToSave.popularity = offset + i;
            promises.push(saveMediaItem(mediaToSave, mediaType));
          }
          return Promise.all(promises)
            .then(savedMedia => ({results: savedMedia, totalResults: res.total_results}))
            .catch(err => {
              logger.log('error', err);
              return {results: media, totalResults: res.total_results};
            });
          // return {results: media, totalResults: res.total_results};
        } else {
          return null;
        }
      })
      .catch(function(e) {
        logger.log('error', e);
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
          logger.log('error', 'Failed to load %s, status code %s', url, response.statusCode);
          return reject(new Error(`Failed to load ${url}, status code: ${response.statusCode}`));
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
   *
   * @param mediaItem
   */
  function getOMDBInfo(mediaItem, mediaType) {
    return getContent(`${config.omdbapi.baseURL}i=${mediaItem.imdbId}&tomatoes=true&type=${mediaType === 'movies' ? 'movies' : 'series'}`)
      .then(omdbBody => {
        let parsedOMDBMediaItem = JSON.parse(omdbBody);
        mediaItem.imdbRating = parsedOMDBMediaItem.imdbRating;
        mediaItem.imdbVotes = parsedOMDBMediaItem.imdbVotes;
        mediaItem.tomatoMeter = parsedOMDBMediaItem.tomatoMeter;
        mediaItem.tomatoImage = parsedOMDBMediaItem.tomatoImage;
        mediaItem.tomatoRating = parsedOMDBMediaItem.tomatoRating;
        mediaItem.tomatoReviews = parsedOMDBMediaItem.tomatoReviews;
        mediaItem.tomatoFresh = parsedOMDBMediaItem.tomatoFresh;
        mediaItem.tomatoRotten = parsedOMDBMediaItem.tomatoRotten;
        mediaItem.tomatoConsensus = parsedOMDBMediaItem.tomatoConsensus;
        mediaItem.tomatoUserMeter = parsedOMDBMediaItem.tomatoUserMeter;
        mediaItem.tomatoUserRating = parsedOMDBMediaItem.tomatoUserRating;
        mediaItem.tomatoUserReviews = parsedOMDBMediaItem.tomatoUserReviews;
        mediaItem.tomatoUrl = parsedOMDBMediaItem.tomatoURL;
        mediaItem.omdbUpdated = new Date();
        logger.log('debug', 'got omdb info for ', mediaItem.title);
        return mediaItem;
      })
      .catch(err => {
        logger.log('error', err);
        return null;
      });
  }

  function saveMediaItem(mediaItemToSave, mediaType) {
    return new Promise(function(resolve, reject) {
      let Model;
      switch (mediaType) {
      case 'movies':
        Model = Movie;
        break;
      case 'shows':
        Model = Show;
      }
      return Model.findOne({guideboxId: mediaItemToSave.guideboxId}).exec()
        .then(function(entity) {
          if(!entity) {
            // Save new
            let mediaModel = new Model(mediaItemToSave);
            return _saveEntity(mediaModel, mediaType, null, resolve, reject);
          } else {
            // Update
            entity.imdbRating = mediaItemToSave.imdbRating;
            entity.imdbVotes = mediaItemToSave.imdbVotes;
            entity.tomatoMeter = mediaItemToSave.tomatoMeter;
            entity.tomatoImage = mediaItemToSave.tomatoImage;
            entity.tomatoRating = mediaItemToSave.tomatoRating;
            entity.tomatoReviews = mediaItemToSave.tomatoReviews;
            entity.tomatoFresh = mediaItemToSave.tomatoFresh;
            entity.tomatoRotten = mediaItemToSave.tomatoRotten;
            entity.tomatoConsensus = mediaItemToSave.tomatoConsensus;
            entity.tomatoUserMeter = mediaItemToSave.tomatoUserMeter;
            entity.tomatoUserRating = mediaItemToSave.tomatoUserRating;
            entity.tomatoUserReviews = mediaItemToSave.tomatoUserReviews;
            entity.tomatoUrl = mediaItemToSave.tomatoUrl;
            entity.omdbUpdated = mediaItemToSave.omdbUpdated;
            return _saveEntity(entity, mediaType, null, resolve, reject);
          }
        })
        .catch(function(err) {
          logger.log('error', err);
          return reject(err);
        });
    });
  }

  function convertToHTTPS(url) {
    if(typeof url === 'string' && url.match('^http://')) {
      return url.replace(/^http:\/\//i, 'https://');
    }
    return url;
  }

  let logger = new winston.Logger({
    level: config.winston.level,
    transports: [
      new winston.transports.Console({
        timestamp() {
          return Date.now();
        },
        formatter(options) {
          // Return string will be passed to logger.
          return `${options.timestamp()} ${options.level.toUpperCase()} ${options.message ? options.message : ''
            }${options.meta && Object.keys(options.meta).length ? `\n\t${JSON.stringify(options.meta)}` : ''}`;
        }
      })
    ]
  });
  winston.handleExceptions(new winston.transports.Console({colorize: true, json: true}));

  return {
    normalizeGuideboxFields,
    getGuideboxMedia,
    getOMDBInfo,
    handleMediaRequest,
    saveMediaItem,
    convertToHTTPS,
    logger
  };
})();

module.exports = utils;
