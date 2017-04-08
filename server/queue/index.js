'use strict';
import Utils from '../components/utils';

let Queue = (function(logger) {
  let kue = require('kue');
  let queue = kue.createQueue();
  const defaultDelay = 60 * 60000 * 4; // 4 hours
  //const defaultDelay = 10 * 60000;
  const limit = 250;
  /*
   Currently will run sequentially, first running through all 'movies', then 'shows'. When movies completes, it will set another
   job up with a delay set to `defaultDelay` that will kick off the whole process again.
   */

  queue.on('error', function(err) {
    logger.log('error', err);
  });

  let getGuideboxMediaJob = function(params, done) {
    logger.log('debug', 'creating getGuideboxMediaJob with params %j', params);
    let job = queue.create('getGuideboxMedia', params)
      .on('complete', function() {
        logger.log('debug', 'Job', job.id, ' is done');
        done();
      })
      .on('failed', function() {
        logger.log('error', 'Job', job.id, ' has failed');
        done();
      })
      // Enable exponential backoff using original delay (if set)
      .delay(params.delay)
      .attempts(10)
      .backoff({type: 'exponential'})
      .save();
  };

  let getOMDBRatingsJob = function(params, done) {
    logger.log('debug', 'creating getOMDBRatingsJob with params %j', params);
    let job = queue.create('getOMDBRatings', params)
      .on('complete', function() {
        logger.log('debug', 'Job', job.id, ' is done');
        done();
      })
      .on('failed', function() {
        logger.log('error', 'Job', job.id, ' has failed');
        done();
      })
      // Enable exponential backoff using original delay (if set)
      .delay(params.delay)
      .attempts(10)
      .backoff({type: 'exponential'})
      .save();
  };

  let process = () => {
    queue.process('getGuideboxMedia', (j, done) => {
      if(j.data.done) {
        j.data.done = false;
        done();

        // if mediaType was movies, start shows immediately and queue up another movies job for later. Otherwise we're done for now
        if(j.data.mediaType === 'movies') {
          getGuideboxMediaJob({
            mediaType: 'shows',
            offset: 0,
            limit,
            sources: 'all',
            platform: 'all',
            includePreorders: true,
            includeInTheaters: true,
            delay: 100
          }, function() {
            console.log('done');
          });
          getGuideboxMediaJob({
            mediaType: 'movies',
            offset: 0,
            limit,
            sources: 'all',
            platform: 'all',
            includePreorders: true,
            includeInTheaters: true,
            delay: new Date(Date.now() + defaultDelay)
          }, function() {
            console.log('done');
          });
        }
      } else {
        // still more media to process
        Utils.getGuideboxMedia(j.data.mediaType, j.data.offset, j.data.limit, j.data.sources, j.data.platform, j.data.includePreorders, j.data.includeInTheaters)
          .then(guideboxMedia => {
            if(guideboxMedia) {
              let remaining = guideboxMedia.totalResults - (j.data.offset + guideboxMedia.results.length);

              if(remaining > limit) {
                j.data.offset = j.data.offset + limit;
              } else if(remaining === limit) {
                j.data.offset = j.data.offset + limit;
                j.data.done = true;
              } else if(remaining > 0 && remaining < limit) {
                j.data.offset = j.data.offset + remaining;
                j.data.done = true;
              }
            } else {
              logger.log('error', 'missing guideboxMedia object from job %j', j);
              done();
            }
            getGuideboxMediaJob(j.data, done);
            done();
          })
          .catch(err => {
            logger.log('error', err);
            done();
          });
      }
    });

    queue.process('getOMDBRatings', (j, done) => {
      Utils.getOMDBInfo(j.data.mediaItem, j.data.mediaType)
        .then(updatedMediaItem => {
          Utils.saveMediaItem(updatedMediaItem, j.data.mediaType);
          done();
        })
        .catch(err => {
          logger.log('error', err);
          done();
        });
    });
  };

  let addOMDBJob = (mediaItem, mediaType) => {
    getOMDBRatingsJob({
      mediaItem,
      mediaType,
      delay: 250
    }, function() {
      logger.log('debug', 'done retrieving OMDB Ratings for %s', mediaItem);
    });
  };

  // Check if nothing is queued up, and if not start up an initial job
  // TODO: There might be a small chance one of the jobs with a small delay throws this off
  queue.delayedCount((err, total) => {
    if(err) {
      logger.log('error', err);
    } else if(total === 0) {
      getGuideboxMediaJob({
        mediaType: 'movies',
        offset: 0,
        limit,
        sources: 'all',
        platform: 'all',
        includePreorders: true,
        includeInTheaters: true,
        delay: 100
      }, function() {
        logger.log('debug', 'done retrieving movies');
      });
    }
  });

  return {
    process,
    addOMDBJob,
  };
}(Utils.logger));

module.exports = Queue;
