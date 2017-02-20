'use strict';

import mongoose from 'mongoose';

let MovieSchema = new mongoose.Schema({
  cast: [{guideboxID: Number, name: String, characterName: String, imdb: String}],
  directors: [{guideboxID: Number, name: String, imdb: String}],
  duration: Number,
  genres: [{guideboxID: Number, title: String}],
  overview: String,
  guideboxID: Number,
  title: String,
  themoviedb: Number,
  originalTitle: String,
  alternateTitles: [
    String
  ],
  imdb: String,
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
  poster120x171: String,
  poster240x342: String,
  poster400x570: String,
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
    {guideboxID: Number, tag: String}
  ],

  writers: [{guideboxID: Number, name: String, imdb: String}]

  // TODO add missing attributes
  // purchase_android_sources : [
  //   {
  //     app_download_link : String,
  //     app_link          : Number,
  //     app_name          : String,
  //     app_required      : Boolean,
  //     display_name      : String,
  //     formats           : [
  //       {format : String, preOrder : Boolean, price : String, type : String}
  //     ],
  //     link              : String,
  //     source            : String
  //   }
  // ],
  // purchase_ios_sources     : [
  //   {
  //     app_download_link : String,
  //     app_link          : Number,
  //     app_name          : String,
  //     app_required      : Boolean,
  //     display_name      : String,
  //     formats           : [
  //       {format : String, preOrder : Boolean, price : String, type : String}
  //     ],
  //     link              : String,
  //     source            : String
  //   }
  // ],
  // purchase_web_sources     : [
  //   {
  //     display_name : String,
  //     formats      : [
  //       {format : String, preOrder : Boolean, price : String, type : String}
  //     ],
  //     link         : String,
  //     source       : String
  //   }
  // ],
  // other_sources            : {
  //   tv_on_demand : [
  //     {
  //       source       : String,
  //       source_type  : String,
  //       display_name : String,
  //       platform     : String,
  //       link         : String,
  //       formats      : [
  //         {
  //           price     : String,
  //           format    : String,
  //           type      : String,
  //           preOrder : Boolean
  //         }
  //       ]
  //     }
  //   ]
  // },
  // trailers           : {
  //   android : [{type : String, source : String, display_name : String, embed : String, link : String}],
  //   ios     : [{type : String, source : String, display_name : String, embed : String, link : String}],
  //   web     : [{type : String, source : String, display_name : String, embed : String, link : String}]
  // },
  // tv_everywhere_android_sources
  //   :
  //   []
  // tv_everywhere_ios_sources
  //   :
  //   []
  // tv_everywhere_web_sources
  //   :
  //   []
  // free_android_sources : [String],
  // free_ios_sources     : [String],
  // free_web_sources     : [String],
  // subscription_android_sources
  //   :
  //   []
  // subscription_ios_sources
  //   :
  //   []
  // subscription_web_sources
  //   :
  //   []

});

export default mongoose.model('Movie', MovieSchema);
