'use strict';

import mongoose from 'mongoose';

var WatchlistSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Watchlist', WatchlistSchema);
