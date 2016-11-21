/**
 * Update model events
 */

'use strict';

import {EventEmitter} from 'events';
import Update from './update.model';
var UpdateEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
UpdateEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Update.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    UpdateEvents.emit(`${event}:${doc._id}`, doc);
    UpdateEvents.emit(event, doc);
  };
}

export default UpdateEvents;
