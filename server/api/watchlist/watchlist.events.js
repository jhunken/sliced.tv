/**
 * Watchlist model events
 */

'use strict';

import {EventEmitter} from 'events';
let WatchlistEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
WatchlistEvents.setMaxListeners(0);

// Model events
let events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Watchlist) {
  for(let e in events) {
    let event = events[e];
    Watchlist.post(e, emitEvent(event));
  }
}


function emitEvent(event) {
  return function(doc) {
    WatchlistEvents.emit(`${event}:${doc._id}`, doc);
    WatchlistEvents.emit(event, doc);
  };
}

export {registerEvents};
export default WatchlistEvents;
