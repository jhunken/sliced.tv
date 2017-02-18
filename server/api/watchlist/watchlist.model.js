'use strict';

import mongoose from 'mongoose';

let WatchlistSchema = new mongoose.Schema({
  name: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  movies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  }]
});

export default mongoose.model('Watchlist', WatchlistSchema);
