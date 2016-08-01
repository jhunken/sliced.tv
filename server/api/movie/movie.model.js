'use strict';

import mongoose from 'mongoose';

var MovieSchema = new mongoose.Schema({
  guidebox_id        : Number,
  title              : String,
  release_year       : Number,
  themoviedb         : Number,
  original_title     : String,
  alternate_titles   : [
    String
  ],
  imdb               : String,
  pre_order          : Boolean,
  in_theaters        : Boolean,
  release_date       : Date,
  rating             : String,
  rottentomatoes     : Number,
  freebase           : String,
  wikipedia_id       : Number,
  metacritic         : String,
  common_sense_media : String,
  poster_120x171     : String,
  poster_240x342     : String,
  poster_400x570     : String

});

export default mongoose.model('Movie', MovieSchema);
