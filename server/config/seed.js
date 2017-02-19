/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Movie from '../api/movie/movie.model';
import Watchlist from '../api/watchlist/watchlist.model';

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'a@a.com',
      password: 'a'
    })
      .then(() => {
        console.log('finished populating users');
        User.create({
          provider: 'local',
          name: 'Test User',
          email: 'test@example.com',
          password: 'test'
        });
          // .then(user => {
          //   let watchlist = new Watchlist({name: 'Watchlist', user});
          //   watchlist.save()
          //     .then(function() {
          //       console.log('finished adding users');
          //     })
          //     .catch(err => {
          //       console.error(err);
          //     });
          // });
      });
  });

Movie.find({}).remove()
  .then(() => {
    Movie.create({
      title: 'Arrival (previously saved)',
      themoviedb: 329865,
      imdb: 'tt2543164',
      rating: 'PG-13',
      rottentomatoes: 771445196,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/arrival',
      overview: 'When mysterious spacecraft touch down across the globe, an elite team - led by expert codebreaker Louise Banks - is brought together to investigate. As mankind teeters on the verge of global war, Banks and the team race against time for answers – and to find them, she will take a chance that could threaten her life, and quite possibly humanity.',
      social: {facebook: {facebook_id: 603342966496310, link: 'https://www.facebook.com/ArrivalMovie/'}},
      genres: [{id: 9, title: 'Drama'}, {id: 17, title: 'Mystery'}, {id: 21, title: 'Science-Fiction'}],
      tags: [{id: 6494, tag: 'based on short story'}, {id: 6953, tag: 'linguistics'}, {
        id: 1856,
        tag: 'alien contact'
      }, {id: 29320, tag: 'linguist'}, {id: 373199, tag: 'seeing the future'}],
      duration: 6960,
      trailers: {web: [], ios: [], android: []},
      writers: [{id: 95090, name: 'Eric Heisserer', imdb: 'nm2104063'}],
      directors: [{id: 290121, name: 'Denis Villeneuve', imdb: 'nm0898288'}],
      cast: [{id: 48065, name: 'Amy Adams', character_name: 'Dr. Louise Banks', imdb: 'nm0010736'}, {
        id: 544849,
        name: 'Jeremy Renner',
        character_name: 'Ian Donnelly',
        imdb: 'nm0719637'
      }, {id: 300835, name: 'Forest Whitaker', character_name: 'Colonel Weber', imdb: 'nm0001845'}, {
        id: 79723,
        name: 'Michael Stuhlbarg',
        character_name: 'Agent Halpern',
        imdb: 'nm0836121'
      }, {id: 326456, name: 'Tzi Ma', character_name: 'General Shang', imdb: 'nm0002245'}, {
        id: 53228,
        name: 'Mark O\'Brien',
        character_name: 'Captain Marks',
        imdb: 'nm2945980'
      }, {id: 410549, name: 'Russell Yuen', character_name: 'Chinese Scientist', imdb: 'nm0004067'}, {
        id: 714357,
        name: 'Nathaly Thibault',
        character_name: 'Gala Guest',
        imdb: 'nm6582569'
      }, {id: 361201, name: 'Joe Cobden', character_name: 'Cryptographer #1', imdb: 'nm0167859'}, {
        id: 244739,
        name: 'Julian Casey',
        character_name: 'Australian Scientist',
        imdb: 'nm0143456'
      }, {id: 151539, name: 'Pat Kiely', character_name: 'Environmental Tech', imdb: ''}, {
        id: 116666,
        name: 'Larry Day',
        character_name: 'Deputy Director of the CIA Dan Ryder',
        imdb: 'nm0206479'
      }, {id: 674887, name: 'Mustafa Haidari', character_name: 'Foreign Correspondent', imdb: 'nm2860410'}, {
        id: 965451,
        name: 'Abigail Pniowsky',
        character_name: 'Hannah (8 yrs. old)',
        imdb: ''
      }, {id: 842027, name: 'Julia Scarlett Dan', character_name: 'Hannah (12 yrs. old)', imdb: ''}, {
        id: 597037,
        name: 'Philippe Hartmann',
        character_name: 'Halpern\'s Deputy Director',
        imdb: 'nm4555299'
      }, {id: 170465, name: 'Andrew Shaver', character_name: 'Environmental Tech', imdb: 'nm2359380'}, {
        id: 965454,
        name: 'Carmela Nozza Guizzo',
        character_name: 'Hannah (4 yrs. old)',
        imdb: ''
      }, {id: 799969, name: 'Anana Rydvald', character_name: 'Danish Scientist', imdb: 'nm0753202'}, {
        id: 965455,
        name: 'Jadyn Malone',
        character_name: 'Hannah',
        imdb: ''
      }, {id: 868422, name: 'Bineyam Girma', character_name: 'Sudanese representative', imdb: 'nm4107928'}, {
        id: 245860,
        name: 'Shawn Campbell',
        character_name: 'News Reporter',
        imdb: 'nm1341268'
      }, {id: 325597, name: 'Ruth Chiang', character_name: 'Chinese Scientist', imdb: 'nm1122078'}, {
        id: 965456,
        name: 'Leisa Reid',
        character_name: 'Nurse',
        imdb: ''
      }, {id: 965457, name: 'Brittany Teo', character_name: 'Student with Smartphone', imdb: ''}, {
        id: 965459,
        name: 'Chistian Jadah',
        character_name: 'Private Combs',
        imdb: ''
      }, {id: 965461, name: 'Genevieve Sirois', character_name: 'Cryptographer #3', imdb: ''}, {
        id: 965463,
        name: 'Tammie Sutherland',
        character_name: 'Newscaster 4',
        imdb: ''
      }, {id: 965464, name: 'Daniel Esteban', character_name: 'Venezuelan Representative', imdb: ''}, {
        id: 965465,
        name: 'Kathleen Stavert',
        character_name: 'Communications Operator #4',
        imdb: ''
      }, {id: 965466, name: 'Hal Roberts', character_name: 'American TV News Anchor', imdb: 'nm2664273'}, {
        id: 965467,
        name: 'Leslie Baker',
        character_name: 'Middle aged woman',
        imdb: 'nm7546909'
      }, {id: 965468, name: 'Michael Nangreaves', character_name: 'Science Team Member #2', imdb: ''}, {
        id: 537249,
        name: 'Frank Schorpion',
        character_name: 'Dr. Kettler',
        imdb: 'nm0774891'
      }, {id: 631345, name: 'Sonia Vigneault', character_name: 'Dr. J. Bydwell', imdb: 'nm0897060'}, {
        id: 130298,
        name: 'Mark Camacho',
        character_name: 'Richard Riley',
        imdb: 'nm0131117'
      }, {id: 585026, name: 'Tony Robinow', character_name: 'British Scientist', imdb: 'nm0732274'}, {
        id: 200861,
        name: 'Lorne Brass',
        character_name: 'Cryptographer #2',
        imdb: 'nm0105435'
      }, {id: 971131, name: 'Sangita Patel', character_name: 'TV Anchor', imdb: ''}, {
        id: 588291,
        name: 'Max Walker',
        character_name: 'TV Anchor',
        imdb: 'nm1448653'
      }, {id: 246061, name: 'John Sanford Moore', character_name: 'TV Anchor', imdb: 'nm0601402'}, {
        id: 158655,
        name: 'Abdelghafour Elaaziz',
        character_name: 'African Representative',
        imdb: ''
      }, {
        id: 607299,
        name: 'Abdul Ayoola',
        character_name: 'Sierra Leone Representative',
        imdb: 'nm1553362'
      }, {
        id: 597354,
        name: 'Victor Andres Turgeon-Trelles',
        character_name: 'Science Team Member',
        imdb: 'nm3588633'
      }, {id: 234165, name: 'Albert Kwan', character_name: 'Chinese Man', imdb: 'nm1429920'}, {
        id: 366672,
        name: 'Reda Guerinik',
        character_name: 'Communication Ops',
        imdb: 'nm2893571'
      }, {id: 808496, name: 'Adrien Benn', character_name: 'Communication Ops', imdb: 'nm3598237'}, {
        id: 360027,
        name: 'Sasha Samar',
        character_name: 'Communication Ops',
        imdb: 'nm1866393'
      }, {id: 766669, name: 'Kattia Thony', character_name: 'Nurse', imdb: ''}, {
        id: 292319,
        name: 'Brent Skagford',
        character_name: 'Lieutenant',
        imdb: 'nm2287876'
      }, {id: 1044087, name: 'Brian dunstan', character_name: 'TV Anchor', imdb: ''}, {
        id: 45120,
        name: 'Dan Duran',
        character_name: 'TV Anchor',
        imdb: ''
      }, {id: 569213, name: 'Ola Sturik', character_name: 'TV Anchor', imdb: 'nm0836380'}],
      guideboxID: 147232,
      alternateTitles: ['Arrival Bundle', 'Story of Your Life'],
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/arrival',
      freeAndroidSources: [],
      freeIOSSources: [],
      freeWebSources: [],
      inTheaters: true,
      originalTitle: 'Arrival (previously Saved)',
      otherSources: {
        movie_theater: [{
          source: 'fandango',
          source_type: 'purchase',
          display_name: 'Fandango',
          link: 'http://www.fandango.com/arrival_194802/movieoverview',
          platform: 'Movie Theater'
        }]
      },
      poster120x171: 'http://static-api.guidebox.com/091716/thumbnails_movies_small/147232-9867285997-6028612861-1102585225-small-120x171-alt-.jpg',
      poster240x342: 'http://static-api.guidebox.com/091716/thumbnails_movies_medium/147232-1491943053-1310606436-524138231-medium-240x342-alt-.jpg',
      poster400x570: 'http://static-api.guidebox.com/091716/thumbnails_movies/-alt--147232-2317507062-7811895022-3038267978-large-400x570-alt-.jpg',
      preoOrder: false,
      purchaseAndroidSources: [{
        source: 'vudu',
        display_name: 'VUDU',
        link: 'vuduapp://826376',
        app_name: 'VUDU',
        app_link: 1,
        app_required: 1,
        app_download_link: 'https://play.google.com/store/apps/details?id=air.com.vudu.air.DownloaderTablet',
        formats: [{price: '4.99', format: 'SD', type: 'rent', pre_order: false}, {
          price: '17.96',
          format: 'SD',
          type: 'purchase',
          pre_order: false
        }, {price: '5.99', format: 'HDX', type: 'rent', pre_order: false}, {
          price: '19.96',
          format: 'HDX',
          type: 'purchase',
          pre_order: false
        }]
      }, {
        source: 'google_play',
        display_name: 'Google Play',
        link: 'https://play.google.com/store/movies/details/Arrival?id=SUiavMWW5Vo',
        app_name: 'Google Play',
        app_link: 0,
        app_required: 0,
        app_download_link: 'https://play.google.com/store',
        formats: [{price: '3.99', format: 'SD', type: 'rent', pre_order: false}, {
          price: '14.99',
          format: 'SD',
          type: 'purchase',
          pre_order: false
        }, {price: '4.99', format: 'HD', type: 'rent', pre_order: false}, {
          price: '19.99',
          format: 'HD',
          type: 'purchase',
          pre_order: false
        }]
      }],
      purchaseIOSSources: [{
        source: 'itunes',
        display_name: 'iTunes',
        link: 'itms://itunes.apple.com/us/movie/arrival/id1166395905?uo=4&at=10laHb',
        app_name: 'iTunes',
        app_link: 1,
        app_required: 1,
        app_download_link: 'itms-apps://',
        formats: [{price: '4.99', format: 'SD', type: 'rent', pre_order: false}, {
          price: '12.99',
          format: 'SD',
          type: 'purchase',
          pre_order: false
        }, {price: '5.99', format: 'HD', type: 'rent', pre_order: false}, {
          price: '14.99',
          format: 'HD',
          type: 'purchase',
          pre_order: false
        }]
      }, {
        source: 'vudu',
        display_name: 'VUDU',
        link: 'http://click.linksynergy.com/fs-bin/click?id=Pz66xbzAbFo&subid=&offerid=251672.1&type=10&tmpid=9417&RD_PARM1=http%3A%2F%2Fwww.vudu.com%2Fmovies%2F%23%21content%2F826376%2FArrival',
        app_name: 'VUDU',
        app_link: 0,
        app_required: 0,
        app_download_link: 'itms-apps://itunes.apple.com/app/vudu-player-movies-tv/id487285735',
        formats: [{price: '4.99', format: 'SD', type: 'rent', pre_order: false}, {
          price: '17.96',
          format: 'SD',
          type: 'purchase',
          pre_order: false
        }, {price: '5.99', format: 'HDX', type: 'rent', pre_order: false}, {
          price: '19.96',
          format: 'HDX',
          type: 'purchase',
          pre_order: false
        }]
      }],
      purchaseWebSources: [{
        source: 'itunes',
        display_name: 'iTunes',
        link: 'https://itunes.apple.com/us/movie/arrival/id1166395905?uo=4&at=10laHb',
        formats: [{price: '4.99', format: 'SD', type: 'rent', pre_order: false}, {
          price: '12.99',
          format: 'SD',
          type: 'purchase',
          pre_order: false
        }, {price: '5.99', format: 'HD', type: 'rent', pre_order: false}, {
          price: '14.99',
          format: 'HD',
          type: 'purchase',
          pre_order: false
        }]
      }, {
        source: 'amazon_buy',
        display_name: 'Amazon',
        link: 'http://www.amazon.com/gp/product/B01MDTXM2T',
        formats: [{price: '3.99', format: 'SD', type: 'rent', pre_order: false}, {
          price: '12.99',
          format: 'SD',
          type: 'purchase',
          pre_order: false
        }, {price: '4.99', format: 'HD', type: 'rent', pre_order: false}, {
          price: '14.99',
          format: 'HD',
          type: 'purchase',
          pre_order: false
        }]
      }, {
        source: 'vudu',
        display_name: 'VUDU',
        link: 'http://click.linksynergy.com/fs-bin/click?id=Pz66xbzAbFo&subid=&offerid=251672.1&type=10&tmpid=9417&RD_PARM1=http%3A%2F%2Fwww.vudu.com%2Fmovies%2F%23%21content%2F826376%2FArrival',
        formats: [{price: '4.99', format: 'SD', type: 'rent', pre_order: false}, {
          price: '17.96',
          format: 'SD',
          type: 'purchase',
          pre_order: false
        }, {price: '5.99', format: 'HDX', type: 'rent', pre_order: false}, {
          price: '19.96',
          format: 'HDX',
          type: 'purchase',
          pre_order: false
        }]
      }, {
        source: 'google_play',
        display_name: 'Google Play',
        link: 'https://play.google.com/store/movies/details/Arrival?id=SUiavMWW5Vo',
        formats: [{price: '3.99', format: 'SD', type: 'rent', pre_order: false}, {
          price: '14.99',
          format: 'SD',
          type: 'purchase',
          pre_order: false
        }, {price: '4.99', format: 'HD', type: 'rent', pre_order: false}, {
          price: '19.99',
          format: 'HD',
          type: 'purchase',
          pre_order: false
        }]
      }, {
        source: 'mgo',
        display_name: 'FandangoNOW',
        link: 'https://www.mgo.com/details/MMV1DCBABCE91DE0FD4EDB16B9D13E955D50',
        formats: [{price: '13.99', format: 'SD', type: 'purchase', pre_order: false}, {
          price: '14.99',
          format: 'HD',
          type: 'purchase',
          pre_order: false
        }]
      }, {
        source: 'cinemanow',
        display_name: 'CinemaNow',
        link: 'http://www.cinemanow.com/title/687498',
        formats: [{price: '4.99', format: 'SD', type: 'rent', pre_order: false}, {
          price: '14.99',
          format: 'SD',
          type: 'purchase',
          pre_order: false
        }, {price: '5.99', format: 'HD', type: 'rent', pre_order: false}, {
          price: '15.99',
          format: 'HD',
          type: 'purchase',
          pre_order: false
        }]
      }, {
        source: 'youtube_purchase',
        display_name: 'YouTube',
        link: 'https://www.youtube.com/watch?v=SUiavMWW5Vo',
        formats: [{price: '3.99', format: 'SD', type: 'rent', pre_order: false}, {
          price: '14.99',
          format: 'SD',
          type: 'purchase',
          pre_order: false
        }, {price: '4.99', format: 'HD', type: 'rent', pre_order: false}, {
          price: '19.99',
          format: 'HD',
          type: 'purchase',
          pre_order: false
        }]
      }, {
        source: 'sony',
        display_name: 'Sony Entertainment Network',
        link: 'https://store.sonyentertainmentnetwork.com/#!/en-us/movies/cid=UV0001-NPVB29564_CN-0000000000333918',
        formats: [{price: '4.99', format: 'SD', type: 'rent', pre_order: false}, {
          price: '12.99',
          format: 'SD',
          type: 'purchase',
          pre_order: false
        }, {price: '5.99', format: 'HD', type: 'rent', pre_order: false}, {
          price: '14.99',
          format: 'HD',
          type: 'purchase',
          pre_order: false
        }]
      }, {
        source: 'paramount_movies',
        display_name: 'Paramount Movies',
        link: 'https://www.paramountmovies.com/#/bundle/arrivalmovie',
        formats: [{price: '4.99', format: 'SD', type: 'rent', pre_order: false}, {
          price: '12.99',
          format: 'SD',
          type: 'purchase',
          pre_order: false
        }, {price: '5.99', format: 'HD', type: 'rent', pre_order: false}, {
          price: '14.99',
          format: 'HD',
          type: 'purchase',
          pre_order: false
        }]
      }, {
        source: 'verizon_on_demand',
        display_name: 'Verizon On Demand',
        link: 'https://www.verizon.com/Ondemand/Movies/MovieDetails/movie/VUBM0000000056411301',
        formats: []
      }],
      releaseDate: '2016-11-10',
      releaseYear: 2016,
      subscriptionAndroidSources: [],
      subscriptionIOSSources: [],
      subscriptionWebSources: [],
      wikiepediaID: 43991244,
      tvEverywhereAndroidSources: [],
      tvEverywhereIOSSources: [],
      tvEverywhereWebSources: [],
      imdbRating: '8.1',
      imdbVotes: '204,081',
      tomatoMeter: '94',
      tomatoImage: 'certified',
      tomatoRating: '8.4',
      tomatoReviews: '302',
      tomatoFresh: '284',
      tomatoRotten: '18',
      tomatoConsensus: 'Arrival delivers a must-see experience for fans of thinking person\'s sci-fi that anchors its heady themes with genuinely affecting emotion and a terrific performance from Amy Adams.',
      tomatoUserMeter: '83',
      tomatoUserRating: '4.1',
      tomatoUserReviews: '66754',
      tomatoUrl: 'http://www.rottentomatoes.com/m/story_of_your_life/'
    });
    console.log('finished removing movies');
  });

Watchlist.find({}).remove()
  .then(() => {
    console.log('finished removing watchlists');
  });
