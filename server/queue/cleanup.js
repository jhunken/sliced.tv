let kue = require('kue');
let util = require('util');
let noop = function() {
};
let jobs;
const CLEANUP_MAX_FAILED_TIME = 30 * 24 * 60 * 60 * 1000; // 30 days
const CLEANUP_MAX_ACTIVE_TIME = 5 * 60 * 1000; // 5 minutes
const CLEANUP_MAX_COMPLETE_TIME = 5 * 24 * 60 * 60 * 1000; // 5 days
const CLEANUP_INTERVAL = 5 * 60 * 1000; // 5 minutes

export class KueCleanup {
  constructor(config) {
    this.intervalHandle = {};

    this.config = config || {};

    jobs = kue.createQueue(this.config);

    KueCleanup.setupJobs(this.config);
  }

  /**
   * Basic configurations
   * @author Dariel Noel <darielnoel@gmail.com>
   * @since  2014-09-29
   * @param  {object}   config Basic config
   * @return {undefined}
   */
  static setupJobs(config) {
    jobs.maxFailedTime = config.maxFailedTime
      || CLEANUP_MAX_FAILED_TIME;
    jobs.cleanupMaxActiveTime = config.cleanupMaxActiveTime
      || CLEANUP_MAX_ACTIVE_TIME;
    jobs.cleanupMaxCompleteTime = config.cleanupMaxCompleteTime
      || CLEANUP_MAX_COMPLETE_TIME;
    jobs.cleanupInterval = config.cleanupInterval
      || CLEANUP_INTERVAL;
  }

  /**
   * Clear all Kue jobs
   * @author Dariel Noel <darielnoel@gmail.com>
   * @since  2014-09-29
   * @param  {Function} callback Function to be executed after all jobs
   *                             are removed
   */
  cleanupAll(callback) {
    performCleanup(callback);
  }

  /**
   * Clear al jobs periodically
   * @author Dariel Noel <darielnoel@gmail.com>
   * @since  2014-09-29
   * @param  {[type]}   cleanupInterval The interval amount
   */
  periodicCleanup(cleanupInterval) {
    let currentCleanupInterval = cleanupInterval || jobs.cleanupInterval;
    this.stopCleanup();
    this.intervalHandle = setInterval(performCleanup, currentCleanupInterval);
  }

  /**
   * Stop de periodically cleanup
   * @author Dariel Noel <darielnoel@gmail.com>
   * @since  2014-09-29
   */
  stopCleanup() {
    clearInterval(this.intervalHandle);
  }
}

/**
 * Simple log action
 * @author Dariel Noel <darielnoel@gmail.com>
 * @since  2014-09-29
 * @param  {string}   message Message to print
 */
function QueueActionLog(message) {
  this.message = message || 'queueActionLog :: got an action for job id(%s)';

  this.apply = function(job) {
    console.log(util.format(this.message, job.id));
    return true;
  };
}

/**
 * Simple log action
 * @author Dariel Noel <darielnoel@gmail.com>
 * @since  2014-09-29
 */
function QueueActionRemove() {
  this.apply = function(job) {
    job.remove(noop);
    return true;
  };
}

/**
 * Filter by age
 * @author Dariel Noel <darielnoel@gmail.com>
 * @since  2014-09-29
 * @param  {[type]}   age Milleseconds
 */
function QueueFilterAge(age) {
  this.now = new Date();
  this.age = age;

  this.test = function(job) {
    let created = new Date(parseInt(job.created_at, 10));
    let _age = parseInt(this.now - created, 10);

    return _age > this.age;
  };
}

/**
 * The queue iterator
 * @author Dariel Noel <darielnoel@gmail.com>
 * @since  2014-09-29
 * @param  {[type]}   ids              Jobs ids
 * @param  {[type]}   queueFilterChain Filter Chain
 * @param  {[type]}   queueActionChain Action Chain
 * @param  {Function} callback         callback
 */
function queueIterator(ids, queueFilterChain, queueActionChain, callback) {
  let count = ids.length;
  ids.forEach(function(id) {
    // get the kue job
    kue.Job.get(id, function(err, job) {
      if(err || !job) return;
      let filterIterator = function(filter) {
        return filter.test(job);
      };
      let actionIterator = function(filter) {
        return filter.apply(job);
      };

      // apply filter chain
      if(queueFilterChain.every(filterIterator)) {
        // apply action chain
        queueActionChain.every(actionIterator);
      }
      count--;
      if(count === 0) {
        return callback();
      }
    });
  });
  if(count === 0) {
    return callback();
  }
}

/**
 * Clear all
 * @author Dariel Noel <darielnoel@gmail.com>
 * @since  2014-09-29
 * @param  {Function} callback callback
 */
function performCleanup(callback) {
  clearState('failed', jobs, function() {
    clearState('active', jobs, function() {
      clearState('complete', jobs, function() {
        clearState('inactive', jobs, function() {
          callback && callback();
        });
      });
    });
  });
}

/**
 * ClearState
 * @author Dariel Noel <darielnoel@gmail.com>
 * @since  2014-09-29
 * @param  {[type]}   state
 * @param  {[type]}   ki
 * @param  {Function} callback
 */
function clearState(state, ki, callback) {
  ki[state](function(err, ids) {
    if(err) {
      return callback(err);
    }
    if(!ids || ids.length === 0) {
      return callback();
    } else {
      queueIterator(
        ids,
        [new QueueFilterAge(jobs.cleanupMaxActiveTime)],
        [
          new QueueActionLog('Going to remove job id(%s) for being active too long'),
          new QueueActionRemove()
        ],
        function() {
          callback();
        }
      );
    }
  });
}
