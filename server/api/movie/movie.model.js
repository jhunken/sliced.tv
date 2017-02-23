'use strict';

import mongoose from 'mongoose';

let MovieSchema = new mongoose.Schema({
  cast: [{guideboxId: Number, name: String, characterName: String, imdb: String}],
  directors: [{guideboxId: Number, name: String, imdb: String}],
  duration: Number,
  genres: [{guideboxId: Number, title: String}],
  overview: String,
  guideboxId: Number,
  title: String,
  themoviedb: Number,
  originalTitle: String,
  alternateTitles: [
    String
  ],
  imdbId: String,
  imdbRating: String,
  imdbVotes: String,
  preOrder: Boolean,
  inTheaters: Boolean,
  releaseDate: Date,
  releaseYear: Number,
  rating: String,
  rottentomatoes: Number,
  social: {
    facebook: {facebookID: String, link: String}
  },
  tomatoMeter: String,
  tomatoImage: String,
  tomatoRating: String,
  tomatoReviews: String,
  tomatoFresh: String,
  tomatoRotten: String,
  tomatoConsensus: String,
  tomatoUserMeter: String,
  tomatoUserRating: String,
  tomatoUserReviews: String,
  tomatoUrl: String,
  freebase: String,
  wikipediaID: Number,
  metacritic: String,
  commonSenseMedia: String,
  poster120X171: String,
  poster240X342: String,
  poster400X570: String,
  banners: [
    {
      xlarge: {
        url: String,
        width: Number,
        height: Number
      },
      large: {
        url: String,
        width: Number,
        height: Number
      },
      medium: {
        url: String,
        width: Number,
        height: Number
      },
      small: {
        url: String,
        width: Number,
        height: Number
      },
      originalWidth: Number,
      originalHeight: Number,
      imageRating: Number
    }
  ],
  tags: [
    {guideboxId: Number, tag: String}
  ],
  writers: [{guideboxId: Number, name: String, imdb: String}]

});

export default mongoose.model('Movie', MovieSchema);
