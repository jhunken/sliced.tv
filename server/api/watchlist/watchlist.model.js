'use strict';

import mongoose from 'mongoose';

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

export default mongoose.model('Watchlist', WatchlistSchema);
