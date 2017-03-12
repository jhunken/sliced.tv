'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './watchlist.events';

let WatchlistSchema = new mongoose.Schema({
  name: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  collaborators: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  movies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  }],
  shows: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Show'
  }]
});

registerEvents(WatchlistSchema);
export default mongoose.model('Watchlist', WatchlistSchema);
