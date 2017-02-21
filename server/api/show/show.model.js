'use strict';

import mongoose from 'mongoose';

let ShowSchema = new mongoose.Schema({
  guideboxId: Number,
  title: String,
  alternateTitles: [String],
  status: String,
  type: String,
  network: String,
  channels: [
    {
      id: Number,
      name: String,
      shortName: String,
      channelType: String,
      artwork208x117: String,
      artwork304x171: String,
      artwork448x252: String,
      artwork608x342: String,
      externalIds: {
        imdb: String,
        wikipediaId: Number
      },
      social: {
        facebook: {
          facebookId: Number,
          link: String
        },
        twitter: {
          twitterId: Number,
          link: String
        }
      },
      liveStream: {
        web: [],
        ios: [],
        android: []
      },
      isPrimary: Boolean
    }
  ],
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
  overview: String,
  containerShow: Number,
  firstAired: String,
  imdbId: String,
  imdb: String,
  imdbRating: String,
  imdbVotes: String,
  tvdb: Number,
  themoviedb: Number,
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
  tvrage: {
    tvrageID: Number,
    link: String
  },
  artwork208X117: String,
  artwork304X171: String,
  artwork448X252: String,
  artwork608X342: String
});

export default mongoose.model('Show', ShowSchema);
