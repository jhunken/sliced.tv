'use strict';
import config from '../../config/environment';
import Movie from '../../api/movie/movie.model';
import Show from '../../api/show/show.model';

let Guidebox = require('guidebox')(config.guidebox.apiKey);
let _ = require('lodash');

let utils = (() => {
  /***
   * Maps guidebox fields to Movie/Show model fields
   * @param guideboxMedia
   * @returns {*}
   */
  function normalizeGuideboxFields(guideboxMedia) {
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
   * Handle media request
   * @param res
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
                  if(!guideboxMedia.imdbRating) {
                    // Retrieve additional omdb api info
                    return getOMDBInfo(guideboxMedia)
                      .then(updatedMedia => {
                        // copy updatedMovie properties to entity
                        entity = Object.assign(entity, updatedMedia);
                        // Save updated entity
                        return entity.save(function(err, savedMedia) {
                          if(err) {
                            return res.status(500).end();
                          } else {
                            console.log(`${mediaType} updated to db:  ${savedMedia.title}`);
                            return res.json(savedMedia).end();
                          }
                        });
                      });
                  } else {
                    // Retrieved guidebox info, but not omdb. Nothing else to retrieve at this point.
                    // Save updated entity
                    return entity.save(function(err, savedMedia) {
                      if(err) {
                        return res.status(500).end();
                      } else {
                        console.log(`${mediaType} updated to db:  ${savedMedia.title}`);
                        return res.json(savedMedia).end();
                      }
                    });
                  }
                })
                .catch(err => {
                  console.error(err);
                  return res.status(500).end();
                });
            } else {
              return res.status(404).send('Not found');
            }
          })
          .catch(err => {
            console.error(err);
            return res.status(500).end();
          });
      } else {
        // Exists already locally
        console.log('retrieved from mongodb: ', entity.title);
        return res.json(entity).end();
      }
    };
  }

  function processGuideboxMediaResults(guideboxMediaItems, mediaType) {
    if(guideboxMediaItems && guideboxMediaItems.results && guideboxMediaItems.results.length) {
      let guideboxMediaItem;
      let promises = [];
      let guideboxIds = [];
      let previouslySavedMediaItems = [];
      for(let i = 0; i < guideboxMediaItems.results.length; i++) {
        guideboxIds.push(guideboxMediaItems.results[i].guideboxId);
      }
      let Model;

      switch (mediaType) {
      case 'movies':
        Model = Movie;
        break;
      case 'shows':
        Model = Show;
      }

      return Model.find({
        guideboxId: {
          $in: guideboxIds
        }
      }).exec()
        .then(entities => {
          for(let j = 0; j < entities.length; j++) {
            previouslySavedMediaItems.push(entities[j]);
          }
          // Compare the two arrays for any that haven't been saved
          for(let k = 0; k < guideboxMediaItems.results.length; k++) {
            guideboxMediaItem = guideboxMediaItems.results[k];
            promises.push(compareArrays(guideboxMediaItem, previouslySavedMediaItems, mediaType));
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
  }

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
          media = normalizeGuideboxFields(media);
          return {results: media, totalResults: res.total_results};
        } else {
          return null;
        }
      })
      .catch(function(e) {
        console.log(e);
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
   *
   * @param mediaItem
   */
  function getOMDBInfo(mediaItem) {
    return getContent(`${config.omdbapi.baseURL}i=${mediaItem.imdbId}&tomatoes=true`)
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
        console.info('got omdb info for ', mediaItem.title);
        return mediaItem;
      })
      .catch(err => {
        console.error(err);
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

            return mediaModel.save(function(err, savedMediaItem) {
              if(err) {
                return reject(err);
              } else {
                console.log(`${mediaType} saved to db: ${savedMediaItem.title}`);
                return resolve(savedMediaItem);
              }
            });
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
            return entity.save(function(err, savedMediaItem) {
              if(err) {
                return reject(err);
              } else {
                console.log(`${mediaType} saved to db: ${savedMediaItem.title}`);
                return resolve(savedMediaItem);
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


  /***
   * Checks if given media is in the savedMedia array. If so just returns the saved entity. Otherwise returns a promise
   * that will retrieve the additional info from the other api providers.
   * @param guideboxMedia
   * @param savedMedia
   * @param mediaType 'movies' or 'shows'
   * @returns {Promise<R>|Promise<void>}
   */
  function compareArrays(guideboxMedia, savedMedia, mediaType) {
    for(let element of savedMedia) {
      if(guideboxMedia.guideboxId === element.guideboxId) {
        return Promise.resolve(element);
      }
    }
    return getOMDBInfo(guideboxMedia, mediaType)
      .then(function(omdbMedia) {
        if(omdbMedia) {
          return saveMediaItem(omdbMedia, mediaType);
        } else {
          return guideboxMedia;
        }
      });
  }

  function convertToHTTPS(url) {
    if(url.match('^http://')) {
      return url.replace(/^http:\/\//i, 'https://');
    }
  }

  return {
    normalizeGuideboxFields,
    getGuideboxMedia,
    getOMDBInfo,
    handleMediaRequest,
    processGuideboxMediaResults,
    compareArrays,
    convertToHTTPS
  };
})();

module.exports = utils;
