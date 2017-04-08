/**
 * Show model events
 */

'use strict';

import {EventEmitter} from 'events';
let ShowEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ShowEvents.setMaxListeners(0);

// Model events
let events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Show) {
  for(let e in events) {
    let event = events[e];
    Show.post(e, emitEvent(event));
  }
}


function emitEvent(event) {
  return function(doc) {
    ShowEvents.emit(`${event}:${doc._id}`, doc);
    ShowEvents.emit(event, doc);
  };
}

export {registerEvents};
export default ShowEvents;
