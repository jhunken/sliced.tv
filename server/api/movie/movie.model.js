'use strict';

import mongoose from 'mongoose';

var MovieSchema = new mongoose.Schema({
  cast: [{id: Number, name: String, character_name: String, imdb: String}],
  directors: [{id: Number, name: String, imdb: String}],
  duration: Number,
  genres: [{id: Number, title: String}],
  overview: String,
  guidebox_id: Number,
  title: String,
  themoviedb: Number,
  original_title: String,
  alternate_titles: [
    String
  ],
  imdb: String,
  imdb_rating: String,
  imdb_votes: String,
  pre_order: Boolean,
  in_theaters: Boolean,
  release_date: Date,
  release_year: Number,
  rating: String,
  rottentomatoes: Number,
  social: {
    facebook: {facebook_id: String, link: String}
  },
  tomato_meter: String,
  tomato_image: String,
  tomato_rating: String,
  tomato_reviews: String,
  tomato_fresh: String,
  tomato_rotten: String,
  tomato_consensus: String,
  tomato_user_meter: String,
  tomato_user_rating: String,
  tomato_user_reviews: String,
  tomato_url: String,
  freebase: String,
  wikipedia_id: Number,
  metacritic: String,
  common_sense_media: String,
  poster_120x171: String,
  poster_240x342: String,
  poster_400x570: String,
  tags: [
    {id: Number, tag: String}
  ],

  writers: [{id: Number, name: String, imdb: String}]

  // TODO add missing attributes
  // purchase_android_sources : [
  //   {
  //     app_download_link : String,
  //     app_link          : Number,
  //     app_name          : String,
  //     app_required      : Boolean,
  //     display_name      : String,
  //     formats           : [
  //       {format : String, pre_order : Boolean, price : String, type : String}
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
  //       {format : String, pre_order : Boolean, price : String, type : String}
  //     ],
  //     link              : String,
  //     source            : String
  //   }
  // ],
  // purchase_web_sources     : [
  //   {
  //     display_name : String,
  //     formats      : [
  //       {format : String, pre_order : Boolean, price : String, type : String}
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
  //           pre_order : Boolean
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
