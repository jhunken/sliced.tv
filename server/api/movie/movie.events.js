/**
 * Movie model events
 */

'use strict';

import {EventEmitter} from 'events';
let MovieEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MovieEvents.setMaxListeners(0);

// Model events
let events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Movie) {
  for(let e in events) {
    let event = events[e];
    Movie.post(e, emitEvent(event));
  }
}


function emitEvent(event) {
  return function(doc) {
    MovieEvents.emit(`${event}:${doc._id}`, doc);
    MovieEvents.emit(event, doc);
  };
}

export {registerEvents};
export default MovieEvents;
