/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Movie from '../api/movie/movie.model';
// import Watchlist from '../api/watchlist/watchlist.model';
import Show from '../api/show/show.model';

const logger = require('../components/utils').logger;
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
        logger.log('info', 'finished populating users');
        User.create({
          provider: 'local',
          name: 'Test User',
          email: 'test@example.com',
          password: 'test'
        });
      });
  });


if(process.env.NODE_ENV === 'test') {
  let movies = [
    {

      title: 'Beauty and the Beast (2017)',
      themoviedb: 321612,
      rating: 'NR',
      rottentomatoes: 771412920,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/beauty-and-the-beast-2017',
      guideboxId: 147370,
      releaseYear: 2017,
      originalTitle: 'Beauty and the Beast (2017)',
      preOrder: true,
      inTheaters: true,
      releaseDate: '2017-03-15T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/beauty-and-the-beast-2017',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/147370-8616821062-3566068933-4100597501-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/147370-7774040117-8178759743-7708998113-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-alt--147370-3655718216-5021144394-6444465439-large-400x570-alt-.jpg',
      imdbId: 'tt2771200',
      popularity: 0,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [
        'Beauty and the Beast',
        'Beauty and the Beast (2017) (Plus Bonus Features)',
        'Beauty and the Beast (2017) (Theatrical Version)'
      ],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '6.1',
      imdbVotes: '2,126',
      omdbUpdated: '2017-04-06T01:44:55.618Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/771412920/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Saban\'s Power Rangers',
      themoviedb: 305470,
      rating: 'PG-13',
      rottentomatoes: 0,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/power-rangers',
      guideboxId: 150839,
      releaseYear: 2017,
      originalTitle: 'Saban\'s Power Rangers',
      preOrder: true,
      inTheaters: true,
      releaseDate: '2017-03-23T00:00:00.000Z',
      commonSenseMedia: null,
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/150839-6946542896-8835508064-3667811933-small-120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/150839-4762841123-4618305415-8486799197-medium-240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/150839-3571768641-3526470070-8390518324-large-400x570.jpg',
      imdbId: 'tt3717490',
      popularity: 1,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [
        'Power Rangers',
        'Power/Rangers'
      ],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '7.1',
      imdbVotes: '4,531',
      omdbUpdated: '2017-04-06T01:44:55.907Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/power_rangers_2017/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Logan',
      themoviedb: 263115,
      rating: 'R',
      rottentomatoes: 771377307,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/logan-2017',
      guideboxId: 147509,
      releaseYear: 2017,
      originalTitle: 'Logan',
      preOrder: true,
      inTheaters: true,
      releaseDate: '2017-03-01T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/logan',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/147509-3243831280-7351722787-1628463990-small-120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/147509-258486937-7093431549-9741400210-medium-240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-147509-5610169363-9357369802-1857244270-large-400x570.jpg',
      imdbId: 'tt3315342',
      popularity: 2,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [
        'Wolverine 3',
        'Untitled The Wolverine Sequel',
        'Wolverine 3: Logan',
        'Logan (2017)'
      ],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '8.5',
      imdbVotes: '181,361',
      omdbUpdated: '2017-04-06T01:44:56.201Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'https://www.rottentomatoes.com/m/logan_2017',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Life',
      themoviedb: 395992,
      rating: 'R',
      rottentomatoes: 0,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/life-2017',
      guideboxId: 150842,
      releaseYear: 2017,
      originalTitle: 'Life',
      preOrder: true,
      inTheaters: true,
      releaseDate: '2017-03-23T00:00:00.000Z',
      commonSenseMedia: null,
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/150842-8164194296-2660023822-9085977375-small-120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/150842-9380988669-1043422362-6573181292-medium-240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/150842-7064399174-9867181424-3504030821-large-400x570.jpg',
      imdbId: 'tt5442430',
      popularity: 3,
      writers: [
        {
          name: 'Rhett Reese',
          imdb: 'nm1014201',

        },
        {
          name: 'Paul Wernick',
          imdb: 'nm1116660',

        }
      ],
      tags: [
        {
          tag: 'space',

        },
        {
          tag: 'mars',

        },
        {
          tag: 'extraterrestrial life',

        },
        {
          tag: 'international space station',

        },
        {
          tag: 'space probe',

        }
      ],
      alternateTitles: [
        'Life (2017)'
      ],
      genres: [
        {
          title: 'Horror',

        },
        {
          title: 'Science-Fiction',

        },
        {
          title: 'Thriller',

        }
      ],
      directors: [
        {
          name: 'Daniel Espinosa',
          imdb: 'nm1174251',

        }
      ],
      cast: [
        {
          name: 'Jake Gyllenhaal',
          imdb: 'nm0350453',

        },
        {
          name: 'Rebecca Ferguson',
          imdb: 'nm0272581',

        },
        {
          name: 'Ryan Reynolds',
          imdb: 'nm0005351',

        },
        {
          name: 'Hiroyuki Sanada',
          imdb: 'nm0760796',

        },
        {
          name: 'Ariyon Bakare',
          imdb: 'nm0048159',

        },
        {
          name: 'Alexandre Nguyen',
          imdb: 'nm6620183',

        },
        {
          name: 'Naoko Mori',
          imdb: 'nm0605283',

        },
        {
          name: 'Olga Dykhovichnaya',
          imdb: 'nm1194399',

        }
      ],

      duration: 6180,
      overview: 'An international space crew discovers life on Mars.',
      social: {
        facebook: {
          link: null
        }
      },
      banners: [],
      imdbRating: 'N/A',
      imdbVotes: 'N/A',
      omdbUpdated: '2017-04-06T01:44:56.632Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/life_2017',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Kong: Skull Island',
      themoviedb: 293167,
      rating: 'PG-13',
      rottentomatoes: 771385708,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/kong-skull-island',
      guideboxId: 149109,
      releaseYear: 2017,
      originalTitle: 'Kong: Skull Island',
      preOrder: true,
      inTheaters: true,
      releaseDate: '2017-03-08T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/kong-skull-island',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/149109-4061062178-2747548921-8733621700-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/149109-2874498032-8503289008-6407000115-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-alt--149109-548633552-3160004309-4346201546-large-400x570-alt-.jpg',
      imdbId: 'tt3731562',
      popularity: 4,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [
        'Untitled 2016 Event Project'
      ],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '7.1',
      imdbVotes: '40,240',
      omdbUpdated: '2017-04-06T01:44:56.913Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/kong_skull_island/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Get Out',
      themoviedb: 419430,
      rating: 'R',
      rottentomatoes: 771454573,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/get-out',
      guideboxId: 150256,
      releaseYear: 2017,
      originalTitle: 'Get Out',
      preOrder: false,
      inTheaters: true,
      releaseDate: '2017-02-24T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/get-out',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/150256-5373039334-411085994-8243788355-small-120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/150256-7056620540-3585752407-6435934985-medium-240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/150256-9492488033-3712476581-8713726657-large-400x570.jpg',
      imdbId: 'tt5052448',
      popularity: 5,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '8.3',
      imdbVotes: '17,125',
      omdbUpdated: '2017-04-06T01:44:57.637Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/771454573',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'War Room',
      themoviedb: 323272,
      rating: 'PG',
      rottentomatoes: 771413235,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/war-room',
      guideboxId: 130292,
      releaseYear: 2015,
      originalTitle: 'War Room',
      preOrder: false,
      inTheaters: false,
      releaseDate: '2015-08-28T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/war-room',
      poster120X171: 'https://static-api.guidebox.com/060515/thumbnails_movies_small/130292-5750904274-9731095284-2122397563-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/060515/thumbnails_movies_medium/130292-1141974368-8875474711-2946272376-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/060515/thumbnails_movies/-alt--130292-812585331-5672315396-2592170057-large-400x570-alt-.jpg',
      imdbId: 'tt4405668',
      popularity: 6,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [
        'War Room (2015)'
      ],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '6.3',
      imdbVotes: '9,693',
      omdbUpdated: '2017-04-06T01:44:57.992Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/war_room_2015/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Rogue One: A Star Wars Story',
      themoviedb: 330459,
      rating: 'NR',
      rottentomatoes: 771415158,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/rogue-one',
      guideboxId: 139472,
      releaseYear: 2016,
      originalTitle: 'Rogue One: A Star Wars Story',
      preOrder: false,
      inTheaters: true,
      releaseDate: '2016-12-14T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/rogue-one-a-star-wars-story',
      poster120X171: 'https://static-api.guidebox.com/111615/thumbnails_movies_small/139472-6444605295-3758796593-8504363601-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/111615/thumbnails_movies_medium/139472-6552252509-6160364053-3411255749-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/111615/thumbnails_movies/-alt--139472-520674694-5391552430-7865828387-large-400x570-alt-.jpg',
      imdbId: 'tt3748528',
      popularity: 7,
      writers: [
        {
          name: 'Chris Weitz',
          imdb: 'nm0919363',

        },
        {
          name: 'Tony Gilroy',
          imdb: 'nm0006904',

        }
      ],
      tags: [
        {
          tag: 'star wars',

        },
        {
          tag: 'space opera',

        },
        {
          tag: 'spin off',

        }
      ],
      alternateTitles: [
        'Rogue One: A Star Wars Story (2016)',
        'Rogue One',
        'Star Wars: Rogue One',
        'Star Wars Anthology: Rogue One',
        'Rogue One: A Star Wars Story (Theatrical Version)',
        'Rogue One: A Star Wars Story (plus Bonus Features)'
      ],
      genres: [
        {
          title: 'Action',

        },
        {
          title: 'Adventure',

        },
        {
          title: 'Fantasy',

        }
      ],
      directors: [
        {
          name: 'Gareth Edwards',
          imdb: 'nm2284484',

        }
      ],
      cast: [
        {
          name: 'Felicity Jones',
          imdb: 'nm0428065',

        },
        {
          name: 'Mads Mikkelsen',
          imdb: 'nm0586568',

        },
        {
          name: 'Ben Mendelsohn',
          imdb: 'nm0578853',

        },
        {
          name: 'Alan Tudyk',
          imdb: 'nm0876138',

        },
        {
          name: 'Diego Luna',
          imdb: 'nm0526019',

        },
        {
          name: 'Forest Whitaker',
          imdb: 'nm0001845',

        },
        {
          name: 'Donnie Yen',
          imdb: 'nm0947447',

        },
        {
          name: 'Riz Ahmed',
          imdb: 'nm1981893',

        },
        {
          name: 'Jonathan Aris',
          imdb: 'nm0034877',

        },
        {
          name: 'Wen Jiang',
          imdb: 'nm0422638',

        },
        {
          name: 'Leigh Holland',
          imdb: 'nm5589321',

        },
        {
          name: 'Genevieve O\'Reilly',
          imdb: 'nm0642444',

        },
        {
          name: 'James Earl Jones',
          imdb: 'nm0000469',

        },
        {
          name: 'Warwick Davis',
          imdb: 'nm0001116',

        },
        {
          name: 'Jimmy Smits',
          imdb: 'nm0001751',

        },
        {
          name: 'Valene Kane',
          imdb: 'nm3442484',

        },
        {
          name: 'Alistair Petrie',
          imdb: 'nm0677944',

        },
        {
          name: 'Jorge Leon Martinez',
          imdb: 'nm5855226',

        },
        {
          name: 'Shina Shihoko Nagai',
          imdb: 'nm3321690',

        },
        {
          name: 'Eunice Olumide',
          imdb: 'nm4035410',

        },
        {
          name: 'Arthur L. Bernstein',
          imdb: 'nm1929065',

        },
        {
          name: 'Russell Balogh',
          imdb: 'nm4095121',

        },
        {
          name: 'Daniel Eghan',
          imdb: 'nm7303783',

        },
        {
          name: 'Ned Dennehy',
          imdb: 'nm0219329',

        },
        {
          name: 'Sam Wilkinson',
          imdb: 'nm0929477',

        },
        {
          name: 'Steen Young',
          imdb: '',

        },
        {
          name: 'Tyrone Love',
          imdb: '',

        },
        {
          name: 'Attila G. Kerekes',
          imdb: 'nm7255532',

        },
        {
          name: 'Andrew Zographos',
          imdb: '',

        },
        {
          name: 'Angus Cook',
          imdb: 'nm0176898',

        },
        {
          name: 'Angus Cook',
          imdb: '',

        },
        {
          name: 'Sam Hanover',
          imdb: '',

        },
        {
          name: 'Mac Pietowski',
          imdb: 'nm6595037',

        },
        {
          name: 'Emeson Nwolie',
          imdb: '',

        },
        {
          name: 'Anthony Daniels',
          imdb: 'nm0000355',

        },
        {
          name: 'Jimmy Vee',
          imdb: 'nm1835544',

        },
        {
          name: 'Spencer Wilding',
          imdb: 'nm1872855',

        },
        {
          name: 'Duncan Pow',
          imdb: 'nm2010069',

        },
        {
          name: 'Guy Henry',
          imdb: 'nm0377844',

        },
        {
          name: 'Ben Daniels',
          imdb: 'nm0199842',

        },
        {
          name: 'Nick Kellington',
          imdb: 'nm2444863',

        },
        {
          name: 'Paul Kasey',
          imdb: 'nm1208004',

        },
        {
          name: 'Stephen Stanton',
          imdb: 'nm0822812',

        },
        {
          name: 'Fares Fares',
          imdb: 'nm0267241',

        },
        {
          name: 'Ian McElhinney',
          imdb: 'nm0568400',

        },
        {
          name: 'Rian Johnson',
          imdb: 'nm0426059',

        },
        {
          name: 'Sharon Duncan-Brewster',
          imdb: 'nm1004267',

        },
        {
          name: 'Ram Bergman',
          imdb: 'nm0074851',

        },
        {
          name: 'Jordan Stephens',
          imdb: '',

        },
        {
          name: 'Babou Ceesay',
          imdb: 'nm1959501',

        },
        {
          name: 'Daniel Naprous',
          imdb: 'nm0621178',

        },
        {
          name: 'Ingvild Deila',
          imdb: 'nm6488665',

        },
        {
          name: 'Angus MacInnes',
          imdb: 'nm0532815',

        },
        {
          name: 'Drewe Henley',
          imdb: 'nm0377120',

        },
        {
          name: 'David Ankrum',
          imdb: 'nm0030193',

        },
        {
          name: 'Michael Smiley',
          imdb: 'nm0806968',

        },
        {
          name: 'Simon Farnaby',
          imdb: 'nm1375030',

        },
        {
          name: 'Geraldine James',
          imdb: 'nm0416524',

        },
        {
          name: 'Ariyon Bakare',
          imdb: 'nm0048159',

        },
        {
          name: 'Jonathan Stephens',
          imdb: '',

        },
        {
          name: 'Derek Arnold',
          imdb: '',

        },
        {
          name: 'Aidan Cook',
          imdb: 'nm1483166',

        },
        {
          name: 'Ian Whyte',
          imdb: 'nm1613839',

        },
        {
          name: 'David Acord',
          imdb: 'nm0004198',

        },
        {
          name: 'Steve Bardrack',
          imdb: '',

        },
        {
          name: 'Verona Blue',
          imdb: 'nm4194431',

        },
        {
          name: 'Steven Blum',
          imdb: 'nm0089710',

        },
        {
          name: 'Dave Boat',
          imdb: 'nm1460733',

        },
        {
          name: 'Eugene Byrd',
          imdb: 'nm0126021',

        },
        {
          name: 'David Cowgill',
          imdb: 'nm0184748',

        },
        {
          name: 'Jonathan Dixon',
          imdb: 'nm1640855',

        },
        {
          name: 'Michael Donovan',
          imdb: 'nm0233036',

        },
        {
          name: 'Terri Douglas',
          imdb: 'nm0235261',

        },
        {
          name: 'Robin Atkin Downes',
          imdb: 'nm0235960',

        },
        {
          name: 'Dave Filoni',
          imdb: 'nm1396048',

        },
        {
          name: 'Michael Giacchino',
          imdb: 'nm0315974',

        },
        {
          name: 'John Gilroy',
          imdb: 'nm0319673',

        },
        {
          name: 'Tony Gilroy',
          imdb: 'nm0006904',

        },
        {
          name: 'Tom Harrison-Read',
          imdb: 'nm1089952',

        },
        {
          name: 'Kevin Hickman',
          imdb: 'nm0382743',

        },
        {
          name: 'Karen Huie',
          imdb: '',

        },
        {
          name: 'Tom Kane',
          imdb: 'nm0437454',

        },
        {
          name: 'Lex Lang',
          imdb: '',

        },
        {
          name: 'Yuri Lowenthal',
          imdb: 'nm0523180',

        },
        {
          name: 'Vanessa Marshall',
          imdb: 'nm0551223',

        },
        {
          name: 'Alexi Melvin',
          imdb: '',

        },
        {
          name: 'Flora Miller',
          imdb: '',

        },
        {
          name: 'William M. Patrick',
          imdb: '',

        },
        {
          name: 'Christopher Scarabosio',
          imdb: 'nm0769042',

        },
        {
          name: 'Orly Schuchmacher',
          imdb: '',

        },
        {
          name: 'Katie Sheridan',
          imdb: '',

        },
        {
          name: 'Christian Simpson',
          imdb: 'nm3278875',

        },
        {
          name: 'David Sobolov',
          imdb: 'nm0811875',

        },
        {
          name: 'Tony Pitts',
          imdb: 'nm0686029',

        },
        {
          name: 'Julian Stone',
          imdb: 'nm0831979',

        },
        {
          name: 'John S. Schwartz',
          imdb: 'nm1862748',

        },
        {
          name: 'Fred Tatasciore',
          imdb: 'nm0851317',

        },
        {
          name: 'James Arnold Taylor',
          imdb: 'nm0852517',

        },
        {
          name: 'Samuel Witwer',
          imdb: 'nm1022429',

        },
        {
          name: 'Matthew Wood',
          imdb: 'nm0003214',

        }
      ],

      duration: 7980,
      overview: 'First spinoff movie of the Star Wars Universe, directed by Gareth Edwards.',
      social: {
        facebook: {
          link: 'https://www.facebook.com/StarWars/'
        }
      },
      banners: [],
      imdbRating: '8.1',
      imdbVotes: '252,198',
      omdbUpdated: '2017-04-06T01:44:58.060Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/star_wars_anthology_rogue_one/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Sing',
      themoviedb: 335797,
      rating: 'PG',
      rottentomatoes: 771434221,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/sing',
      guideboxId: 143442,
      releaseYear: 2016,
      originalTitle: 'Sing',
      preOrder: false,
      inTheaters: true,
      releaseDate: '2016-12-08T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/sing',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/143442-6406127447-9196517081-960917864-small-120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/143442-4780924805-2656850810-7933440194-medium-240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-143442-9534959495-9127518967-101791034-large-400x570.jpg',
      imdbId: 'tt3470600',
      popularity: 8,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [
        'Untitled Illumination Entertainment (2016)',
        'Untitled Animated Illumnination Project',
        'Chantez',
        'Chantez 3D',
        'Welcome to the Auditions',
        'Sing (Plus Bonus Features)'
      ],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '7.2',
      imdbVotes: '39,965',
      omdbUpdated: '2017-04-06T01:44:58.340Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/untitled_illumination_project/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Moana',
      themoviedb: 277834,
      rating: 'NR',
      rottentomatoes: 771400848,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/moana',
      guideboxId: 138745,
      releaseYear: 2016,
      originalTitle: 'Moana',
      preOrder: false,
      inTheaters: false,
      releaseDate: '2016-11-23T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/moana',
      poster120X171: 'https://static-api.guidebox.com/111615/thumbnails_movies_small/138745-7276277733-3837612793-8356914371-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/111615/thumbnails_movies_medium/138745-5205454747-5570307914-6039644568-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/111615/thumbnails_movies/-alt--138745-8130507017-6592284851-8482064157-large-400x570-alt-.jpg',
      imdbId: 'tt3521164',
      popularity: 9,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [
        'Moana (2016) (Theatrical Version)',
        'Moana (2016)',
        'Moana Sing-Along',
        'Moana (plus Bonus Features)'
      ],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '7.7',
      imdbVotes: '93,475',
      omdbUpdated: '2017-04-06T01:44:58.635Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/moana_2016/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Split',
      themoviedb: 381288,
      rating: 'PG-13',
      rottentomatoes: 771432610,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/split',
      guideboxId: 150431,
      releaseYear: 2017,
      originalTitle: 'Split',
      preOrder: true,
      inTheaters: true,
      releaseDate: '2017-01-19T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/split',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/150431-8385831802-198456990-2880453305-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/150431-989443558-7370135900-4013909730-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-alt--150431-3274878981-1836863086-3055998078-large-400x570-alt-.jpg',
      imdbId: 'tt4972582',
      popularity: 10,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [
        'Split (2017)',
        'Untitled M. Night Shyamalan Project'
      ],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '7.5',
      imdbVotes: '72,589',
      omdbUpdated: '2017-04-06T01:44:58.709Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/split_2017/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'T2: Trainspotting',
      themoviedb: 180863,
      rating: 'R',
      rottentomatoes: 771443847,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/t2-trainspotting',
      guideboxId: 150770,
      releaseYear: 2017,
      originalTitle: 'T2: Trainspotting',
      preOrder: true,
      inTheaters: true,
      releaseDate: '2017-01-27T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/t2-trainspotting',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/150770-575245135-6904683187-7515062289-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/150770-6573522216-2823317223-9098646864-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-alt--150770-1926237373-4867552468-8422250580-large-400x570-alt-.jpg',
      imdbId: 'tt2763304',
      popularity: 11,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [
        'T2 Trainspotting',
        'Trainspotting 2',
        'T2',
        'T2: Trainspotting 2',
        'Porno',
        'T²'
      ],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '7.8',
      imdbVotes: '15,224',
      omdbUpdated: '2017-04-06T01:44:58.823Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/t2_trainspotting_2',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'CHiPs',
      themoviedb: 417644,
      rating: 'R',
      rottentomatoes: 0,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/chips',
      guideboxId: 150868,
      releaseYear: 2017,
      originalTitle: 'CHiPs',
      preOrder: false,
      inTheaters: true,
      releaseDate: '2017-03-23T00:00:00.000Z',
      commonSenseMedia: null,
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/150868-7087106099-2761673820-3314905046-small-120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/150868-7344567231-6902312008-2508249595-medium-240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/150868-2096500942-9958928842-8820260772-large-400x570.jpg',
      imdbId: 'tt0493405',
      popularity: 12,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [
        'CHiPs (2017)'
      ],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '5.4',
      imdbVotes: '160',
      omdbUpdated: '2017-04-06T01:44:59.439Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/chips/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Passengers',
      themoviedb: 274870,
      rating: 'PG-13',
      rottentomatoes: 771357251,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/passengers-2016',
      guideboxId: 147877,
      releaseYear: 2016,
      originalTitle: 'Passengers',
      preOrder: false,
      inTheaters: true,
      releaseDate: '2016-12-21T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/passengers',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/147877-131363320-1440176876-778338062-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/147877-9016465135-7449266142-7243445166-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-alt--147877-9307535491-2128881291-8426623479-large-400x570-alt-.jpg',
      imdbId: 'tt1355644',
      popularity: 13,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [
        'Passengers (2016)'
      ],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '7.0',
      imdbVotes: '123,060',
      omdbUpdated: '2017-04-06T01:44:59.574Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/passengers_2016/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'What Ever Happened to Baby Jane?',
      themoviedb: 10242,
      rating: 'NR',
      rottentomatoes: 16991,
      freebase: '/m/065_f8',
      metacritic: null,
      guideboxId: 77269,
      releaseYear: 1962,
      originalTitle: 'What Ever Happened to Baby Jane?',
      preOrder: false,
      inTheaters: false,
      releaseDate: '1962-10-31T00:00:00.000Z',
      commonSenseMedia: null,
      poster120X171: 'https://static-api.guidebox.com/thumbnails_movies_small/77269-5272492170-3109849468-6342582307-small-120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/thumbnails_movies_medium/77269-3176905923-9258618597-1543419282-medium-240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/thumbnails_movies/77269-7274313629-2547616805-916982498-large-400x570.jpg',
      imdbId: 'tt0056687',
      popularity: 14,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [
        'What Ever Happened to Baby Jane'
      ],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '8.1',
      imdbVotes: '33,394',
      omdbUpdated: '2017-04-06T01:44:59.646Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/what-ever-happened-to-baby-jane/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'The Belko Experiment',
      themoviedb: 341006,
      rating: 'R',
      rottentomatoes: 771449552,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/the-belko-experiment',
      guideboxId: 150769,
      releaseYear: 2017,
      originalTitle: 'The Belko Experiment',
      preOrder: false,
      inTheaters: true,
      releaseDate: '2017-03-17T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/the-belko-experiment',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/150769-4001722913-4081365964-8416415425-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/150769-4647284844-7955764755-676396285-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-alt--150769-109456159-1767486520-2301792470-large-400x570-alt-.jpg',
      imdbId: 'tt1082807',
      popularity: 15,
      writers: [
        {
          name: 'James Gunn',
          imdb: 'nm0348181',

        }
      ],
      tags: [
        {
          tag: 'social experiment',

        },
        {
          tag: 'intercom',

        },
        {
          tag: 'colombia',

        },
        {
          tag: 'office',

        },
        {
          tag: 'moral dilemma',

        }
      ],
      banners: [
        {

          small: {
            url: 'https://static-api.guidebox.com/012915/movies/banners/150769-3939542528-6280728942-158215366-551x102.jpg',
            width: 551,
            height: 102
          },
          medium: {
            url: 'https://static-api.guidebox.com/012915/movies/banners/150769-3939542528-6280728942-158215366-756x140.jpg',
            width: 756,
            height: 140
          },
          large: {
            url: 'https://static-api.guidebox.com/012915/movies/banners/150769-3939542528-6280728942-158215366-1000x185.jpg',
            width: 1000,
            height: 185
          },
          xlarge: {
            url: 'https://static-api.guidebox.com/012915/movies/banners/150769-3939542528-6280728942-158215366-1300x240.jpg',
            width: 1300,
            height: 240
          }
        }
      ],
      alternateTitles: [],
      genres: [
        {
          title: 'Action',

        },
        {
          title: 'Horror',

        },
        {
          title: 'Thriller',

        }
      ],
      directors: [
        {
          name: 'Greg Mclean',
          imdb: 'nm0572562',

        }
      ],
      cast: [
        {
          name: 'John Gallagher Jr.',
          imdb: 'nm0302330',

        },
        {
          name: 'Tony Goldwyn',
          imdb: 'nm0001282',

        },
        {
          name: 'Melonie Diaz',
          imdb: 'nm0246686',

        },
        {
          name: 'Michael Rooker',
          imdb: 'nm0740264',

        },
        {
          name: 'John C. McGinley',
          imdb: 'nm0001525',

        },
        {
          name: 'Sean Gunn',
          imdb: 'nm0348231',

        },
        {
          name: 'David Dastmalchian',
          imdb: 'nm2810287',

        },
        {
          name: 'Mikaela Hoover',
          imdb: 'nm2409479',

        },
        {
          name: 'Abraham Benrubi',
          imdb: 'nm0072344',

        },
        {
          name: 'David Del Rio',
          imdb: 'nm1092332',

        },
        {
          name: 'Owain Yeoman',
          imdb: 'nm1466859',

        },
        {
          name: 'Brent Sexton',
          imdb: 'nm0786641',

        },
        {
          name: 'Rusty Schwimmer',
          imdb: 'nm0005404',

        },
        {
          name: 'Adria Arjona',
          imdb: 'nm5245722',

        },
        {
          name: 'Josh Brener',
          imdb: 'nm3091777',

        },
        {
          name: 'James Earl',
          imdb: 'nm1913063',

        },
        {
          name: 'Gail Bean',
          imdb: 'nm4713993',

        },
        {
          name: 'Maruia Shelton',
          imdb: 'nm5445305',

        },
        {
          name: 'Stephen Blackehart',
          imdb: 'nm0002888',

        },
        {
          name: 'Joe Fria',
          imdb: 'nm1002694',

        },
        {
          name: 'Benjamin Byron Davis',
          imdb: 'nm1177880',

        },
        {
          name: 'Valentine Miele',
          imdb: 'nm0585741',

        },
        {
          name: 'Jack Lindberg',
          imdb: '',

        }
      ],

      duration: 5280,
      overview: 'An ordinary day at the office becomes a horrific quest for survival when 80 employees (John Gallagher Jr., Tony Goldwyn, Adria Arjona) at the Belko Corp. in Bogotá, Colombia, learn that they are pawns in a deadly game. Trapped inside their building, a voice over an intercom tells the frightened staffers that two workers must be killed within 30 minutes. When another ultimatum follows, friends become enemies and new alliances take shape, as only the strongest will remain alive at the end.',
      social: {
        facebook: {
          link: 'https://www.facebook.com/TheBelkoExperiment/'
        }
      },
      imdbRating: '6.9',
      imdbVotes: '341',
      omdbUpdated: '2017-04-06T01:44:59.810Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/the_belko_experiment',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Beauty and the Beast',
      themoviedb: 10020,
      rating: 'G',
      rottentomatoes: 9980,
      freebase: '/m/0_7w6',
      metacritic: 'http://www.metacritic.com/movie/beauty-and-the-beast-1991',
      guideboxId: 42116,
      releaseYear: 1991,
      originalTitle: 'Beauty and the Beast',
      preOrder: false,
      inTheaters: false,
      releaseDate: '1991-11-12T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/beauty-and-the-beast',
      poster120X171: 'https://static-api.guidebox.com/thumbnails_movies_small/42116-9921144074-2640518109-892736307-small-120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/thumbnails_movies_medium/42116-6162076904-7197816758-2910839133-medium-240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/thumbnails_movies/42116-4187341058-8831498404-2602324095-large-400x570.jpg',
      imdbId: 'tt0101414',
      popularity: 16,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [
        'Walt Disney\'s Beauty and the Beast',
        'Beauty & the Beast',
        'Beauty and the Beast 3D',
        'Beauty and the Beast (Diamond Edition 2010)',
        'Beauty and the Beast (1991 Version)',
        'Beauty and the Beast (1991)',
        'Beauty and the Beast (plus Bonus Features)',
        'Beauty and the Beast + Bonus',
        'Beauty and the Beast (1991)(Theatrical Version)',
        'Beauty and the Beast (1991)(Plus Bonus Features)'
      ],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '8.0',
      imdbVotes: '323,967',
      omdbUpdated: '2017-04-06T01:45:00.127Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/beauty_and_the_beast_1991/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'The Great Wall',
      themoviedb: 311324,
      rating: 'PG-13',
      rottentomatoes: 771440375,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/the-great-wall',
      guideboxId: 150017,
      releaseYear: 2016,
      originalTitle: 'The Great Wall',
      preOrder: true,
      inTheaters: true,
      releaseDate: '2016-12-16T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/the-great-wall',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/150017-3501917035-175473090-9916776204-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/150017-5221204907-9050475275-2719745222-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-alt--150017-2678021696-1822918835-6963853165-large-400x570-alt-.jpg',
      imdbId: 'tt2034800',
      popularity: 17,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [
        'The Great Wall (2017)',
        'Untitled Great Wall Project'
      ],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '6.3',
      imdbVotes: '26,885',
      omdbUpdated: '2017-04-06T01:45:00.585Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/the_great_wall_2014/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Hacksaw Ridge',
      themoviedb: 324786,
      rating: 'R',
      rottentomatoes: 771419799,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/hacksaw-ridge',
      guideboxId: 146791,
      releaseYear: 2016,
      originalTitle: 'Hacksaw Ridge',
      preOrder: false,
      inTheaters: false,
      releaseDate: '2016-11-04T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/hacksaw-ridge',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/146791-4961655000-8115513879-4132356793-small-120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/146791-4334376967-1777304337-9549725269-medium-240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/146791-9712008130-58179768-2436999996-large-400x570.jpg',
      imdbId: 'tt2119532',
      popularity: 18,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '8.2',
      imdbVotes: '159,681',
      omdbUpdated: '2017-04-06T01:45:00.972Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/hacksaw_ridge/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Trolls',
      themoviedb: 136799,
      rating: 'NR',
      rottentomatoes: 771315649,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/trolls',
      guideboxId: 139664,
      releaseYear: 2016,
      originalTitle: 'Trolls',
      preOrder: false,
      inTheaters: false,
      releaseDate: '2016-10-13T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/trolls',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/139664-8285053307-2483358095-4202379580-small-120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/139664-8286602436-9041468249-9712239159-medium-240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-139664-8778505725-636518309-309132985-large-400x570.jpg',
      imdbId: 'tt1679335',
      popularity: 19,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [
        'Trolls (plus bonus features)',
        'Trolls + Bonus'
      ],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '6.5',
      imdbVotes: '29,275',
      omdbUpdated: '2017-04-06T01:45:01.247Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/trolls/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Lion',
      themoviedb: 334543,
      rating: 'PG-13',
      rottentomatoes: 771438816,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/lion',
      guideboxId: 147488,
      releaseYear: 2016,
      originalTitle: 'Lion',
      preOrder: false,
      inTheaters: true,
      releaseDate: '2016-11-24T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/lion',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/147488-5581746544-9999005747-3015480768-small-120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/147488-9065935788-2778430889-1944213086-medium-240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-147488-2842285326-2025942286-3944104221-large-400x570.jpg',
      imdbId: 'tt3741834',
      popularity: 40,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '8.1',
      imdbVotes: '73,957',
      omdbUpdated: '2017-04-06T02:19:52.527Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Trainspotting',
      themoviedb: 627,
      rating: 'R',
      rottentomatoes: 16743,
      freebase: '/m/0qf2t',
      metacritic: 'http://www.metacritic.com/movie/trainspotting',
      guideboxId: 1854,
      releaseYear: 1996,
      originalTitle: 'Trainspotting',
      preOrder: false,
      inTheaters: false,
      releaseDate: '1996-02-23T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/trainspotting',
      poster120X171: 'https://static-api.guidebox.com/thumbnails_movies_small/1854-9730889112-9064920586-2686043005-large-120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/thumbnails_movies_medium/1854-1694989507-6718588215-1180646397-large-240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/thumbnails_movies/1854-422103680-1862782101-9574170657-large-400x570.jpg',
      imdbId: 'tt0117951',
      popularity: 41,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: ['Trainspotting (Collector\'s Edition)', 'Trainspotting - Collector\'S Edition'],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '8.2',
      imdbVotes: '501,336',
      omdbUpdated: '2017-04-06T02:19:52.619Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/trainspotting/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Manchester by the Sea',
      themoviedb: 334541,
      rating: 'R',
      rottentomatoes: 771435779,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/manchester-by-the-sea',
      guideboxId: 147416,
      releaseYear: 2016,
      originalTitle: 'Manchester by the Sea',
      preOrder: false,
      inTheaters: true,
      releaseDate: '2016-11-18T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/manchester-by-the-sea',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/147416-6442292612-4135109056-6270654080-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/147416-3036671495-4831313556-3847414744-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-alt--147416-6348555377-4589667069-6423742846-large-400x570-alt-.jpg',
      imdbId: 'tt4034228',
      popularity: 42,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '8.0',
      imdbVotes: '114,749',
      omdbUpdated: '2017-04-06T02:19:52.706Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/manchester_by_the_sea/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Suicide Squad',
      themoviedb: 297761,
      rating: 'NR',
      rottentomatoes: 771400429,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/suicide-squad',
      guideboxId: 137176,
      releaseYear: 2016,
      originalTitle: 'Suicide Squad',
      preOrder: false,
      inTheaters: false,
      releaseDate: '2016-08-02T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/suicide-squad',
      poster120X171: 'https://static-api.guidebox.com/111615/thumbnails_movies_small/137176-4020417575-227776249-3657965833-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/111615/thumbnails_movies_medium/137176-7158916946-4013497001-6251401533-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/111615/thumbnails_movies/-alt--137176-1914165942-1025955799-3376706676-large-400x570-alt-.jpg',
      imdbId: 'tt1386697',
      popularity: 43,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: ['Suicide Squad (2016)', 'Suicide Squad (plus bonus features)', 'Suicide Squad - Theatrical Version', 'Suicide Squad - Extended Cut', 'Suicide Squad Extended Cut + Bonus', 'Suicide Squad: Extended Cut', 'Suicide Squad: Extended Cut (2016)', 'Suicide Squad Extended Cut', 'Suicide Squad:  Extended + Theatrical Cut', 'Suicide Squad (Extended Cut)', 'Suicide Squad (PS Plus Exclusive Discount)'],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '6.3',
      imdbVotes: '366,780',
      omdbUpdated: '2017-04-06T02:19:52.808Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/suicide_squad_2016/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Office Christmas Party',
      themoviedb: 384682,
      rating: 'R',
      rottentomatoes: 771438232,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/office-christmas-party',
      guideboxId: 148279,
      releaseYear: 2016,
      originalTitle: 'Office Christmas Party',
      preOrder: false,
      inTheaters: true,
      releaseDate: '2016-12-05T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/office-christmas-party',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/148279-206277557-3589184447-7883526818-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/148279-1391431899-9187631621-200401946-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-alt--148279-5295040896-6481945137-4637098019-large-400x570-alt-.jpg',
      imdbId: 'tt1711525',
      popularity: 44,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: ['Untitled Office Holiday Party Project', 'Office Christmas Party (Unrated)', 'Office Christmas Party Unrated', 'Office Christmas Party Theatrical + Unrated'],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '5.9',
      imdbVotes: '21,085',
      omdbUpdated: '2017-04-06T02:19:52.905Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/office_christmas_party/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'The Girl on the Train',
      themoviedb: 346685,
      rating: 'R',
      rottentomatoes: 771430833,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/the-girl-on-the-train-2016',
      guideboxId: 140962,
      releaseYear: 2016,
      originalTitle: 'The Girl on the Train',
      preOrder: false,
      inTheaters: false,
      releaseDate: '2016-10-05T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/the-girl-on-the-train',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/140962-1046582163-5056350264-62226942-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/140962-5762231732-7173976484-1718362198-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-alt--140962-8337098304-9629672295-3859070903-large-400x570-alt-.jpg',
      imdbId: 'tt3631112',
      popularity: 45,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: ['The Girl on the Train (2016)', 'The Girl on the Train + Bonus', 'Girl on the Train, The'],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '6.5',
      imdbVotes: '91,496',
      omdbUpdated: '2017-04-06T02:19:53.022Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/the_girl_on_the_train_2016/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Allied',
      themoviedb: 369885,
      rating: 'R',
      rottentomatoes: 771441346,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/allied',
      guideboxId: 147448,
      releaseYear: 2016,
      originalTitle: 'Allied',
      preOrder: false,
      inTheaters: false,
      releaseDate: '2016-11-17T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/allied',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/147448-4504926493-9732629042-4033597182-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/147448-6628347798-9353496204-3373994343-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-alt--147448-8843122194-4218884758-1388860159-large-400x570-alt-.jpg',
      imdbId: 'tt3640424',
      popularity: 46,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: ['Untitled Brad Pitt/Robert Zemeckis Project', 'Untitled Brad Pitt and Marion Cotillard', 'Untitled WWII Romantic Thriller', 'Five Seconds of Silence'],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '7.1',
      imdbVotes: '48,295',
      omdbUpdated: '2017-04-06T02:19:53.108Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/allied/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'xXx: Return of Xander Cage',
      themoviedb: 47971,
      rating: 'PG-13',
      rottentomatoes: 770805755,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/xxx-return-of-xander-cage',
      guideboxId: 149355,
      releaseYear: 2017,
      originalTitle: 'xXx: Return of Xander Cage',
      preOrder: true,
      inTheaters: true,
      releaseDate: '2017-01-13T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/xxx-return-of-xander-cage',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/149355-1595435632-1578744231-6089471481-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/149355-547197778-7754161982-1791025317-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-alt--149355-9276818218-6796635622-8539668074-large-400x570-alt-.jpg',
      imdbId: 'tt1293847',
      popularity: 47,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: ['XXX: The Return Of Xander Cage', 'xXx 3'],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '5.5',
      imdbVotes: '22,377',
      omdbUpdated: '2017-04-06T02:19:53.189Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/xxx-the-return-of-xander-cage/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Fences',
      themoviedb: 393457,
      rating: 'PG-13',
      rottentomatoes: 771441788,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/fences',
      guideboxId: 148505,
      releaseYear: 2016,
      originalTitle: 'Fences',
      preOrder: false,
      inTheaters: true,
      releaseDate: '2016-12-16T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/fences',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/148505-4331326191-2325265124-9287479571-small-120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/148505-9553465452-4995817435-9972264617-medium-240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/148505-2248011115-7813929431-9260826953-large-400x570.jpg',
      imdbId: 'tt2671706',
      popularity: 48,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '7.4',
      imdbVotes: '34,237',
      omdbUpdated: '2017-04-06T02:19:53.281Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/fences_2016',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Deadpool',
      themoviedb: 293660,
      rating: 'R',
      rottentomatoes: 771390242,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/deadpool',
      guideboxId: 134703,
      releaseYear: 2016,
      originalTitle: 'Deadpool',
      preOrder: false,
      inTheaters: false,
      releaseDate: '2016-02-09T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/deadpool',
      poster120X171: 'https://static-api.guidebox.com/111615/thumbnails_movies_small/134703-8826417937-4880428799-4611684009-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/111615/thumbnails_movies_medium/134703-1736170082-4556516414-1014171122-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/111615/thumbnails_movies/-alt--134703-9753017467-1156046940-8869973588-large-400x570-alt-.jpg',
      imdbId: 'tt1431045',
      popularity: 49,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: ['Deadpool (plus Bonus Features)', 'Deadpool + Bonus', 'X-Men Origins: Deadpool', 'X-Men: Deadpool'],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '8.1',
      imdbVotes: '599,635',
      omdbUpdated: '2017-04-06T02:19:53.360Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/deadpool/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Ghostbusters',
      themoviedb: 43074,
      rating: 'PG-13',
      rottentomatoes: 770808377,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/ghostbusters-2016',
      guideboxId: 138675,
      releaseYear: 2016,
      originalTitle: 'Ghostbusters',
      preOrder: false,
      inTheaters: false,
      releaseDate: '2016-07-14T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/ghostbusters-2016',
      poster120X171: 'https://static-api.guidebox.com/111615/thumbnails_movies_small/138675-5855081906-7482783189-1460642186-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/111615/thumbnails_movies_medium/138675-6532825911-2011251767-5785477473-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/111615/thumbnails_movies/-alt--138675-2461997546-3911134433-7197173792-large-400x570-alt-.jpg',
      imdbId: 'tt1289401',
      popularity: 50,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: ['Ghostbusters (2016)', 'Ghostbusters (Theatrical)', 'Ghostbusters (Extended Cut)', 'Ghostbusters (2016) (Extended Edition)', 'Ghostbusters (Extended Version)', 'Ghostbusters (Extended Edition)', 'Ghostbusters (2016) Extended Edition', 'Ghostbusters (Extended)', 'Ghostbusters (2016) + Bonus', 'Ghostbusters (2016) Extended (plus Bonus Features)', 'Ghostbusters Extended Edition (+ Bonus Features)', 'Ghostbusters 3', 'Ghostbusters Female Reboot', 'Ghostbusters: Answer the Call', 'Untitled Ghostbusters Reboot'],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '5.4',
      imdbVotes: '139,250',
      omdbUpdated: '2017-04-06T02:19:53.501Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/ghostbusters_2016/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Love Actually',
      themoviedb: 508,
      rating: 'R',
      rottentomatoes: 12852,
      freebase: '/m/020bv3',
      metacritic: 'http://www.metacritic.com/movie/love-actually',
      guideboxId: 39715,
      releaseYear: 2003,
      originalTitle: 'Love Actually',
      preOrder: false,
      inTheaters: false,
      releaseDate: '2003-09-07T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/love-actually',
      poster120X171: 'https://static-api.guidebox.com/120214/thumbnails_movies_small/39715-1728456719-3411332616-1508249157-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/120214/thumbnails_movies_medium/39715-5865428089-2330944003-3692054232-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/120214/thumbnails_movies/-alt--39715-1606793995-4381443444-4174808120-large-400x570-alt-.jpg',
      imdbId: 'tt0314331',
      popularity: 51,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: ['Love Actually [HD]'],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '7.7',
      imdbVotes: '336,303',
      omdbUpdated: '2017-04-06T02:19:53.577Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/love_actually/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Cinderella',
      themoviedb: 150689,
      rating: 'PG',
      rottentomatoes: 771270966,
      freebase: '/m/0x1vh5m',
      metacritic: 'http://www.metacritic.com/movie/cinderella',
      guideboxId: 121371,
      releaseYear: 2015,
      originalTitle: 'Cinderella',
      preOrder: false,
      inTheaters: false,
      releaseDate: '2015-03-12T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/cinderella-2015',
      poster120X171: 'https://static-api.guidebox.com/060515/thumbnails_movies_small/121371-2494706051-5884446013-5706896051-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/060515/thumbnails_movies_medium/121371-3853042997-1581722615-7475216887-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/060515/thumbnails_movies/-alt--121371-617554863-6758749182-3199678008-large-400x570-alt-.jpg',
      imdbId: 'tt1661199',
      popularity: 52,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: ['Cinderella (2015)', 'Cinderella (2015) (plus bonus feaures)', 'Cinderella (2015) (Theatrical)'],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '7.0',
      imdbVotes: '114,331',
      omdbUpdated: '2017-04-06T02:19:53.648Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/cinderella_2013/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Star Wars: The Force Awakens',
      themoviedb: 140607,
      rating: 'PG-13',
      rottentomatoes: 771321699,
      freebase: '/m/0nb2r_p',
      metacritic: 'http://www.metacritic.com/movie/star-wars-episode-vii---the-force-awakens',
      guideboxId: 133474,
      releaseYear: 2015,
      originalTitle: 'Star Wars: The Force Awakens',
      preOrder: false,
      inTheaters: false,
      releaseDate: '2015-12-15T00:00:00.000Z',
      commonSenseMedia: 'https://www.facebook.com/StarWars/',
      poster120X171: 'https://static-api.guidebox.com/060515/thumbnails_movies_small/133474-3616180844-2501566191-2984454511-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/060515/thumbnails_movies_medium/133474-8257560716-2693021209-7103600800-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/060515/thumbnails_movies/-alt--133474-5717065195-7960648816-177957854-large-400x570-alt-.jpg',
      imdbId: 'tt2488496',
      popularity: 53,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: ['Star Wars: The Force Awakens - Pre-Order', 'Star Wars: The Force Awakens (Plus Bonus Features)', 'Star Wars: Episode VII - The Force Awakens', 'Star Wars 7', 'Star Wars: Episode VII', 'Star Wars - Episode 7 - The Force Awakens', 'Star Wars: The Force Awakens (Includes Bonus Features)', 'Star Wars: The Force Awakens (Theatrical)', 'Star Wars: The Force Awakens + Bonus', 'Star Wars Episode 7 - The Force Awakens', 'Star Wars Episode VII - The Force Awakens', 'Star Wars: The Force Awakens plus Bonus Material', 'The Force Awakens', 'Star Wars: Episode 7 - The Force Awakens', 'Star Wars The Force Awakens', 'Star Wars: Episode VII - The Force Awakens 3D'],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '8.1',
      imdbVotes: '643,416',
      omdbUpdated: '2017-04-06T02:19:53.734Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/star_wars_episode_vii_the_force_awakens/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Brimstone',
      themoviedb: 324560,
      rating: 'R',
      rottentomatoes: 771449070,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/brimstone',
      guideboxId: 150541,
      releaseYear: 2017,
      originalTitle: 'Brimstone',
      preOrder: false,
      inTheaters: false,
      releaseDate: '2017-01-12T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/brimstone',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/150541-8297161585-8074615742-9299567891-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/150541-5063479510-1492958051-1749822670-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-alt--150541-7569617028-7269821223-6345094032-large-400x570-alt-.jpg',
      imdbId: 'tt1895315',
      popularity: 54,
      writers: [{name: 'Martin Koolhoven', imdb: 'nm0465551', }],
      tags: [{tag: 'reverend', }],
      banners: [{

        small: {
          url: 'https://static-api.guidebox.com/012915/movies/banners/150541-5059416536-309428992-752313179-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'https://static-api.guidebox.com/012915/movies/banners/150541-5059416536-309428992-752313179-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'https://static-api.guidebox.com/012915/movies/banners/150541-5059416536-309428992-752313179-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'https://static-api.guidebox.com/012915/movies/banners/150541-5059416536-309428992-752313179-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }],
      alternateTitles: [],
      genres: [{title: 'Mystery', }, {
        title: 'Thriller',

      }, {title: 'Western', }],
      directors: [{name: 'Martin Koolhoven', imdb: 'nm0465551', }],
      cast: [{
        name: 'Guy Pearce',
        imdb: 'nm0001602',

      }, {
        name: 'Dakota Fanning',
        imdb: 'nm0266824',

      }, {
        name: 'Carice van Houten',
        imdb: 'nm0396924',

      }, {name: 'Kit Harington', imdb: 'nm3229685', }, {
        name: 'Paul Anderson',
        imdb: 'nm2167957',

      }, {name: 'Emilia Jones', imdb: 'nm4454223', }, {
        name: 'William Houston',
        imdb: 'nm0396908',

      }, {name: 'Ivy George', imdb: 'nm6386497', }, {
        name: 'Bill Tangradi',
        imdb: 'nm1813729',

      }, {name: 'Jack Roth', imdb: 'nm2516193', }, {
        name: 'Jack Hollington',
        imdb: 'nm5489640',

      }, {name: 'Carla Juri', imdb: 'nm3231562', }, {
        name: 'Vera Vitali',
        imdb: 'nm3010155',

      }, {name: 'Frederick Schmidt', imdb: 'nm5520750', }],

      duration: 8880,
      overview: 'Wrongly accused of a crime she didn\'t commit, a frontier woman turned fugitive is hunted by a vengeful preacher in the menacing inferno of the old American West.',
      social: {facebook: {link: 'https://www.facebook.com/Brimstonethemovie/'}},
      imdbRating: '7.2',
      imdbVotes: '5,463',
      omdbUpdated: '2017-04-06T02:19:53.809Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/brimstone_2016',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Live by night',
      themoviedb: 259695,
      rating: 'R',
      rottentomatoes: 771368984,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/live-by-night',
      guideboxId: 149256,
      releaseYear: 2016,
      originalTitle: 'Live by night',
      preOrder: false,
      inTheaters: false,
      releaseDate: '2016-12-25T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/live-by-night',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/149256-5182549441-360584222-4510357534-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/149256-3599127717-7214636146-4284124100-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-alt--149256-8042371943-5820385511-4091517916-large-400x570-alt-.jpg',
      imdbId: 'tt2361317',
      popularity: 55,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: ['Live By Night (plus bonus features)'],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '6.4',
      imdbVotes: '20,275',
      omdbUpdated: '2017-04-06T02:19:53.885Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/live_by_night/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Collateral Beauty',
      themoviedb: 345920,
      rating: 'PG-13',
      rottentomatoes: 771437625,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/collateral-beauty',
      guideboxId: 148543,
      releaseYear: 2016,
      originalTitle: 'Collateral Beauty',
      preOrder: false,
      inTheaters: true,
      releaseDate: '2016-12-06T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/collateral-beauty',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/148543-1094229771-1174974288-7499695755-small-120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/148543-4818858109-9619131260-2266237373-medium-240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/148543-1526521291-1791746118-2106462261-large-400x570.jpg',
      imdbId: 'tt4682786',
      popularity: 56,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '6.7',
      imdbVotes: '32,667',
      omdbUpdated: '2017-04-06T02:19:53.969Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/collateral_beauty/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'A United Kingdom',
      themoviedb: 347026,
      rating: 'PG-13',
      rottentomatoes: 771446622,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/a-united-kingdom',
      guideboxId: 149907,
      releaseYear: 2016,
      originalTitle: 'A United Kingdom',
      preOrder: false,
      inTheaters: true,
      releaseDate: '2016-11-25T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/a-united-kingdom',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/149907-1509757159-2278099084-7426403188-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/149907-1462919708-8779179351-2617837074-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-alt--149907-7779310499-8884115642-5542774498-large-400x570-alt-.jpg',
      imdbId: 'tt3387266',
      popularity: 57,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '6.7',
      imdbVotes: '1,610',
      omdbUpdated: '2017-04-06T02:19:54.042Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/a_united_kingdom',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Underworld: Blood Wars',
      themoviedb: 346672,
      rating: 'R',
      rottentomatoes: 771440510,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/underworld-blood-wars',
      guideboxId: 148914,
      releaseYear: 2016,
      originalTitle: 'Underworld: Blood Wars',
      preOrder: true,
      inTheaters: true,
      releaseDate: '2016-11-30T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/underworld-blood-wars',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/148914-1899985820-9921324178-2597881020-small-120x171-alt-.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/148914-7608452323-9208479193-2791635902-medium-240x342-alt-.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/-alt--148914-4458806296-3819691306-4289062191-large-400x570-alt-.jpg',
      imdbId: 'tt3717252',
      popularity: 58,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: ['Underworld 5', 'Underworld Reboot', 'Underworld: Next Generation', 'Underworld 5: Blood Wars', 'Underworld Blood Wars'],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '6.0',
      imdbVotes: '26,477',
      omdbUpdated: '2017-04-06T02:19:54.117Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/underworld_5/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'The Accountant',
      themoviedb: 302946,
      rating: 'R',
      rottentomatoes: 771419323,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/the-accountant',
      guideboxId: 143275,
      releaseYear: 2016,
      originalTitle: 'The Accountant',
      preOrder: false,
      inTheaters: false,
      releaseDate: '2016-10-14T00:00:00.000Z',
      commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/the-accountant',
      poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/143275-4041442680-3254651888-8354373360-small-120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/143275-7396937534-5803072960-4454733590-medium-240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/143275-3635404566-2458533864-8857416352-large-400x570.jpg',
      imdbId: 'tt2140479',
      popularity: 59,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: ['The Accountant (2016)', 'The Accountant (plus bonus features)', 'Accountant, The (2016)'],
      genres: [],
      directors: [],
      cast: [],

      imdbRating: '7.4',
      imdbVotes: '141,520',
      omdbUpdated: '2017-04-06T02:19:54.201Z',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/the_accountant_2016/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Landline',
      themoviedb: 0,
      rating: 'NR',
      rottentomatoes: 0,
      freebase: '',
      metacritic: null,
      guideboxId: 151082,
      releaseYear: 2017,
      originalTitle: 'Landline',
      preOrder: false,
      inTheaters: false,
      releaseDate: '2017-01-01T00:00:00.000Z',
      commonSenseMedia: null,
      poster120X171: 'https://static-api.guidebox.com/misc/default_movie_120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/misc/default_movie_240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/misc/default_movie_400x570.jpg',
      popularity: 72747,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [],
      genres: [],
      directors: [],
      cast: [],


    },
    {

      title: 'Guru (Telugu)',
      themoviedb: 0,
      rating: 'NR',
      rottentomatoes: 0,
      freebase: '',
      metacritic: null,
      guideboxId: 150983,
      releaseYear: 2017,
      originalTitle: 'Guru (Telugu)',
      preOrder: false,
      inTheaters: true,
      releaseDate: '2017-01-01T00:00:00.000Z',
      commonSenseMedia: null,
      poster120X171: 'https://static-api.guidebox.com/misc/default_movie_120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/misc/default_movie_240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/misc/default_movie_400x570.jpg',
      popularity: 72748,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [],
      genres: [],
      directors: [],
      cast: [],


    },
    {

      title: 'Mancini, The Motorcycle Wizard',
      themoviedb: 0,
      rating: 'NR',
      rottentomatoes: 0,
      freebase: '',
      metacritic: null,
      guideboxId: 151083,
      releaseYear: 2017,
      originalTitle: 'Mancini, The Motorcycle Wizard',
      preOrder: false,
      inTheaters: false,
      releaseDate: '2017-01-01T00:00:00.000Z',
      commonSenseMedia: null,
      poster120X171: 'https://static-api.guidebox.com/misc/default_movie_120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/misc/default_movie_240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/misc/default_movie_400x570.jpg',
      popularity: 72748,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [],
      genres: [],
      directors: [],
      cast: [],


    },
    {

      title: 'Samaritan\'s Purse pres. Facing Darkness',
      themoviedb: 0,
      rating: 'NR',
      rottentomatoes: 0,
      freebase: '',
      metacritic: null,
      guideboxId: 150984,
      releaseYear: 2017,
      originalTitle: 'Samaritan\'s Purse pres. Facing Darkness',
      preOrder: false,
      inTheaters: true,
      releaseDate: '2017-01-01T00:00:00.000Z',
      commonSenseMedia: null,
      poster120X171: 'https://static-api.guidebox.com/misc/default_movie_120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/misc/default_movie_240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/misc/default_movie_400x570.jpg',
      popularity: 72749,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [],
      genres: [],
      directors: [],
      cast: [],


    },
    {

      title: 'Bwoy',
      themoviedb: 449431,
      rating: 'NR',
      rottentomatoes: 0,
      freebase: '',
      metacritic: null,
      guideboxId: 151085,
      releaseYear: 2016,
      originalTitle: 'Bwoy',
      preOrder: false,
      inTheaters: true,
      releaseDate: '2016-09-16T00:00:00.000Z',
      commonSenseMedia: null,
      poster120X171: 'https://static-api.guidebox.com/misc/default_movie_120x171.jpg',
      poster240X342: 'https://static-api.guidebox.com/misc/default_movie_240x342.jpg',
      poster400X570: 'https://static-api.guidebox.com/misc/default_movie_400x570.jpg',
      popularity: 72749,
      writers: [],
      tags: [],
      banners: [],
      alternateTitles: [],
      genres: [],
      directors: [],
      cast: [],


    }
  ];
  Movie.find({}).remove()
    .then(() => {
      Movie.insertMany(movies)
        .then(() => {
          logger.log('info', 'finished populating movies');
        });
    });

  let shows = [
    {

      title: 'The Walking Dead',
      tvdb: 153021,
      themoviedb: 1402,
      freebase: '/m/0c3xpwy',
      guideboxId: 703,
      containerShow: 0,
      firstAired: '2010-10-31',
      imdbId: 'tt1520211',
      artwork208X117: 'https://static-api.guidebox.com/091414/thumbnails_small/703-3422100935-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091414/thumbnails_medium/703-3368183603-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091414/thumbnails_large/703-4248968759-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091414/thumbnails_xlarge/703-7681273194-608x342-show-thumbnail.jpg',
      popularity: 0,
      tvrage: {link: 'http://www.tvrage.com/shows/id-25056'},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Legion',
      tvdb: 320724,
      themoviedb: 67195,
      freebase: null,
      guideboxId: 37808,
      containerShow: 0,
      firstAired: '2016-09-09',
      imdbId: 'tt5114356',
      artwork208X117: 'https://static-api.guidebox.com/091716/thumbnails_small/37808-4027156639-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091716/thumbnails_medium/37808-777714667-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091716/thumbnails_large/37808-9268585397-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091716/thumbnails_xlarge/37808-4234637590-608x342-show-thumbnail.jpg',
      popularity: 1,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Game of Thrones',
      tvdb: 121361,
      themoviedb: 1399,
      freebase: '/m/0524b41',
      guideboxId: 6959,
      containerShow: 0,
      firstAired: '2011-04-17',
      imdbId: 'tt0944947',
      artwork208X117: 'https://static-api.guidebox.com/060515/thumbnails_small/6959-7755267811-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/060515/thumbnails_medium/6959-8255587010-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/060515/thumbnails_large/6959-7500693383-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/060515/thumbnails_xlarge/6959-423900909-608x342.jpg',
      popularity: 2,
      tvrage: {link: 'http://www.tvrage.com/shows/id-24493'},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Fargo',
      tvdb: 269613,
      themoviedb: 60622,
      freebase: ' /m/0y7x4fd ',
      guideboxId: 18323,
      containerShow: 0,
      firstAired: '2014-04-15',
      imdbId: 'tt2802850',
      artwork208X117: 'https://static-api.guidebox.com/thumbs03_14/thumbnails_small/18323-2057609726-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/thumbs03_14/thumbnails_medium/18323-319135278-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/thumbs03_14/thumbnails_large/18323-1432328150-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/thumbs03_14/thumbnails_xlarge/18323-9272299087-608x342.jpg',
      popularity: 3,
      tvrage: {link: 'http://www.tvrage.com/shows/id-35276'},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'The Night Of',
      tvdb: 310516,
      themoviedb: 66276,
      freebase: null,
      guideboxId: 37559,
      containerShow: 0,
      firstAired: '2016-07-10',
      imdbId: 'tt2401256',
      artwork208X117: 'https://static-api.guidebox.com/111615/thumbnails_small/37559-4214252103-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/111615/thumbnails_medium/37559-824560905-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/111615/thumbnails_large/37559-4327883395-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/111615/thumbnails_xlarge/37559-8845933992-608x342-show-thumbnail.jpg',
      popularity: 4,
      tvrage: {link: 'http://www.tvrage.com/shows/id-52307'},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'The Flash (2014)',
      tvdb: 279121,
      themoviedb: 60735,
      freebase: '/m/0_lnq3s',
      guideboxId: 18768,
      containerShow: 0,
      firstAired: '2014-10-07',
      imdbId: 'tt3107288',
      artwork208X117: 'https://static-api.guidebox.com/022615/thumbnails_small/18768-8167085708-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/022615/thumbnails_medium/18768-8800775795-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/022615/thumbnails_large/18768-1038890509-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/022615/thumbnails_xlarge/18768-4101893287-608x342-show-thumbnail.jpg',
      popularity: 5,
      tvrage: {link: 'http://www.tvrage.com/shows/id-36939'},
      banners: [],
      channels: [],
      alternateTitles: ['The Flash'],


    },
    {

      title: 'Shameless',
      tvdb: 161511,
      themoviedb: 34307,
      freebase: '/m/0dll6_j',
      guideboxId: 2627,
      containerShow: 0,
      firstAired: '2011-01-09',
      imdbId: 'tt1586680',
      artwork208X117: 'https://static-api.guidebox.com/thumbnails_small/2627-9598196931-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/thumbnails_medium/2627-4895202052-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/thumbnails_large/2627-6214707-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/thumbnails_xlarge/2627-5698745260-608x342.jpg',
      popularity: 6,
      tvrage: {link: 'http://www.tvrage.com/shows/id-25117'},
      banners: [],
      channels: [],
      alternateTitles: ['Shameless (US)'],


    },
    {

      title: 'Into the Badlands',
      tvdb: 289079,
      themoviedb: 47450,
      freebase: null,
      guideboxId: 32463,
      containerShow: 0,
      firstAired: '2015-07-11',
      imdbId: 'tt3865236',
      artwork208X117: 'https://static-api.guidebox.com/060515/thumbnails_small/32463-6818895866-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/060515/thumbnails_medium/32463-4940639571-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/060515/thumbnails_large/32463-462675621-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/060515/thumbnails_xlarge/32463-5587910335-608x342-show-thumbnail.jpg',
      popularity: 7,
      tvrage: {link: 'http://www.tvrage.com/shows/id-49739'},
      banners: [],
      channels: [],
      alternateTitles: ['Badlands'],


    },
    {

      title: 'Arrow',
      tvdb: 257655,
      themoviedb: 1412,
      freebase: '/m/0l170__',
      guideboxId: 13015,
      containerShow: 0,
      firstAired: '2012-10-10',
      imdbId: 'tt2193021',
      artwork208X117: 'https://static-api.guidebox.com/091414/thumbnails_small/13015-8851756258-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091414/thumbnails_medium/13015-7129820809-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091414/thumbnails_large/13015-2719832999-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091414/thumbnails_xlarge/13015-6382877868-608x342-show-thumbnail.jpg',
      popularity: 8,
      tvrage: {link: 'http://www.tvrage.com/shows/id-30715'},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'This Is Us',
      tvdb: 311714,
      themoviedb: 67136,
      freebase: null,
      guideboxId: 37117,
      containerShow: 0,
      firstAired: '2016-05-15',
      imdbId: 'tt5555260',
      artwork208X117: 'https://static-api.guidebox.com/111615/thumbnails_small/37117-3013112238-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/111615/thumbnails_medium/37117-3751064502-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/111615/thumbnails_large/37117-9383674399-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/111615/thumbnails_xlarge/37117-1206293381-608x342.jpg',
      popularity: 9,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Riverdale',
      tvdb: 311954,
      themoviedb: 69050,
      freebase: null,
      guideboxId: 41148,
      containerShow: 0,
      firstAired: '2017-01-26',
      imdbId: 'tt5420376',
      artwork208X117: 'https://static-api.guidebox.com/091716/thumbnails_small/41148-7488881922-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091716/thumbnails_medium/41148-1596480208-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091716/thumbnails_large/41148-1996065905-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091716/thumbnails_xlarge/41148-4520784849-608x342-show-thumbnail.jpg',
      popularity: 10,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Grey\'s Anatomy',
      tvdb: 73762,
      themoviedb: 1416,
      freebase: '/m/05lfwd',
      guideboxId: 159,
      containerShow: 0,
      firstAired: '2005-03-27',
      imdbId: 'tt0413573',
      artwork208X117: 'https://static-api.guidebox.com/060515/thumbnails_small/159-7053659996-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/060515/thumbnails_medium/159-4406540240-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/060515/thumbnails_large/159-5811973219-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/060515/thumbnails_xlarge/159-6648975853-608x342-show-thumbnail.jpg',
      popularity: 11,
      tvrage: {link: 'http://www.tvrage.com/shows/id-3741'},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'The Vampire Diaries',
      tvdb: 95491,
      themoviedb: 18165,
      freebase: '/m/05sy2k_',
      guideboxId: 137,
      containerShow: 0,
      firstAired: '2009-09-10',
      imdbId: 'tt1405406',
      artwork208X117: 'https://static-api.guidebox.com/060515/thumbnails_small/137-9956356305-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/060515/thumbnails_medium/137-6253161197-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/060515/thumbnails_large/137-5186451897-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/060515/thumbnails_xlarge/137-1785443691-608x342-show-thumbnail.jpg',
      popularity: 12,
      tvrage: {link: 'http://www.tvrage.com/shows/id-21766'},
      banners: [],
      channels: [],
      alternateTitles: ['Vampire Diaries'],


    },
    {

      title: 'The 100',
      tvdb: 268592,
      themoviedb: 48866,
      freebase: '/m/0v3fvl3',
      guideboxId: 15817,
      containerShow: 0,
      firstAired: '2014-03-19',
      imdbId: 'tt2661044',
      artwork208X117: 'https://static-api.guidebox.com/091414/thumbnails_small/15817-3286543442-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091414/thumbnails_medium/15817-3398139919-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091414/thumbnails_large/15817-5828464203-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091414/thumbnails_xlarge/15817-874794033-608x342-show-thumbnail.jpg',
      popularity: 13,
      tvrage: {link: 'http://www.tvrage.com/shows/id-34770'},
      banners: [],
      channels: [],
      alternateTitles: ['The Hundred'],


    },
    {

      title: 'Marvel\'s Daredevil',
      tvdb: 281662,
      themoviedb: 61889,
      freebase: '/m/010pwp1_',
      guideboxId: 25147,
      containerShow: 0,
      firstAired: '2015-02-03',
      imdbId: 'tt3322312',
      artwork208X117: 'https://static-api.guidebox.com/111615/thumbnails_small/25147-3884560815-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/111615/thumbnails_medium/25147-7621311252-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/111615/thumbnails_large/25147-9808975551-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/111615/thumbnails_xlarge/25147-6197672807-608x342-show-thumbnail.jpg',
      popularity: 14,
      tvrage: {link: 'http://www.tvrage.com/shows/id-38796'},
      banners: [],
      channels: [],
      alternateTitles: ['Daredevil'],


    },
    {

      title: 'Homeland',
      tvdb: 247897,
      themoviedb: 1407,
      freebase: '/m/0gvsh7l',
      guideboxId: 2625,
      containerShow: 0,
      firstAired: '2011-10-02',
      imdbId: 'tt1796960',
      artwork208X117: 'https://static-api.guidebox.com/091414/thumbnails_small/2625-6650184672-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091414/thumbnails_medium/2625-8041045526-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091414/thumbnails_large/2625-4471222516-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091414/thumbnails_xlarge/2625-5774650769-608x342-show-thumbnail.jpg',
      popularity: 15,
      tvrage: {link: 'http://www.tvrage.com/shows/id-27811'},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Vikings',
      tvdb: 260449,
      themoviedb: 44217,
      freebase: '/m/0k3lwy1',
      guideboxId: 14554,
      containerShow: 0,
      firstAired: '2013-03-03',
      imdbId: 'tt2306299',
      artwork208X117: 'https://static-api.guidebox.com/120214/thumbnails_small/14554-3064087210-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/120214/thumbnails_medium/14554-6577064837-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/120214/thumbnails_large/14554-6113301255-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/120214/thumbnails_xlarge/14554-1164331185-608x342-show-thumbnail.jpg',
      popularity: 16,
      tvrage: {link: 'http://www.tvrage.com/shows/id-31136'},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Supergirl',
      tvdb: 295759,
      themoviedb: 62688,
      freebase: null,
      guideboxId: 32268,
      containerShow: 0,
      firstAired: '2015-10-26',
      imdbId: 'tt4016454',
      artwork208X117: 'https://static-api.guidebox.com/060515/thumbnails_small/32268-1088245204-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/060515/thumbnails_medium/32268-1711544688-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/060515/thumbnails_large/32268-2794234609-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/060515/thumbnails_xlarge/32268-8927263952-608x342.jpg',
      popularity: 17,
      tvrage: {link: 'http://www.tvrage.com/shows/id-44824'},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Supernatural',
      tvdb: 78901,
      themoviedb: 1622,
      freebase: '/m/06s3sm',
      guideboxId: 134,
      containerShow: 0,
      firstAired: '2005-09-13',
      imdbId: 'tt0460681',
      artwork208X117: 'https://static-api.guidebox.com/060515/thumbnails_small/134-9455498186-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/060515/thumbnails_medium/134-3621342373-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/060515/thumbnails_large/134-9313713549-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/060515/thumbnails_xlarge/134-8590047601-608x342-show-thumbnail.jpg',
      popularity: 18,
      tvrage: {link: 'http://www.tvrage.com/shows/id-5410'},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'The Big Bang Theory',
      tvdb: 80379,
      themoviedb: 1418,
      freebase: '/m/02r5qtm',
      guideboxId: 950,
      containerShow: 0,
      firstAired: '2007-09-24',
      imdbId: 'tt0898266',
      artwork208X117: 'https://static-api.guidebox.com/091414/thumbnails_small/950-6941432897-208x117-title-card.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091414/thumbnails_medium/950-808620337-304x171-title-card.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091414/thumbnails_large/950-6735643046-448x252-title-card.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091414/thumbnails_xlarge/950-2938209991-608x342-title-card.jpg',
      popularity: 19,
      tvrage: {link: 'http://www.tvrage.com/shows/id-8511'},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'NCIS',
      tvdb: 72108,
      themoviedb: 4614,
      freebase: '/m/03m8sg',
      guideboxId: 965,
      containerShow: 0,
      firstAired: '2003-09-23',
      imdbId: 'tt0364845',
      artwork208X117: 'https://static-api.guidebox.com/thumbnails_small/965-3065823857-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/thumbnails_medium/965-5408978434-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/thumbnails_large/965-3464008020-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/thumbnails_xlarge/965-560015906-608x342.jpg',
      popularity: 40,
      tvrage: {link: 'http://www.tvrage.com/shows/id-4628'},
      banners: [],
      channels: [],
      alternateTitles: ['NCIS: Naval Criminal Investigative Service', 'N.C.I.S'],

      imdbRating: '7.9',
      imdbVotes: '91,589',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Friends',
      tvdb: 79168,
      themoviedb: 1668,
      freebase: '/m/030cx',
      guideboxId: 1737,
      containerShow: 0,
      firstAired: '1994-09-22',
      imdbId: 'tt0108778',
      artwork208X117: 'https://static-api.guidebox.com/thumbnails_small/1737-3749269745-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/thumbnails_medium/1737-448432537-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/thumbnails_large/1737-8061207928-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/thumbnails_xlarge/1737-2397346851-608x342.jpg',
      popularity: 41,
      tvrage: {link: 'http://www.tvrage.com/shows/id-3616'},
      banners: [],
      channels: [],
      alternateTitles: [],

      imdbRating: '9.0',
      imdbVotes: '519,093',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'http://www.rottentomatoes.com/m/just_friends_1994/',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: '93',

    },
    {

      title: 'Grimm',
      tvdb: 248736,
      themoviedb: 39351,
      freebase: '/m/0gtxzxh',
      guideboxId: 202,
      containerShow: 0,
      firstAired: '2011-10-28',
      imdbId: 'tt1830617',
      artwork208X117: 'https://static-api.guidebox.com/091414/thumbnails_small/202-6585630597-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091414/thumbnails_medium/202-1062964420-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091414/thumbnails_large/202-8118666336-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091414/thumbnails_xlarge/202-7930883169-608x342-show-thumbnail.jpg',
      popularity: 42,
      tvrage: {link: 'http://www.tvrage.com/shows/id-28352'},
      banners: [],
      channels: [],
      alternateTitles: [],

      imdbRating: '7.8',
      imdbVotes: '88,409',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'The Expanse',
      tvdb: 280619,
      themoviedb: 63639,
      freebase: '/m/012693vm',
      guideboxId: 24913,
      containerShow: 0,
      firstAired: '2015-01-15',
      imdbId: 'tt3230854',
      artwork208X117: 'https://static-api.guidebox.com/111615/thumbnails_small/24913-1812876235-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/111615/thumbnails_medium/24913-4570168508-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/111615/thumbnails_large/24913-5560628241-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/111615/thumbnails_xlarge/24913-9328385465-608x342-show-thumbnail.jpg',
      popularity: 43,
      tvrage: {link: 'http://www.tvrage.com/shows/id-41967'},
      banners: [],
      channels: [],
      alternateTitles: [],

      imdbRating: '8.2',
      imdbVotes: '30,642',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Power Rangers',
      tvdb: 72553,
      themoviedb: 2328,
      freebase: '/m/017dcd',
      guideboxId: 2161,
      containerShow: 0,
      firstAired: '1993-08-28',
      imdbId: 'tt0106064',
      artwork208X117: 'https://static-api.guidebox.com/thumbnails_small/2161-8741588113-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/thumbnails_medium/2161-504911626-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/thumbnails_large/2161-6166598215-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/thumbnails_xlarge/2161-3889651122-608x342.jpg',
      popularity: 44,
      tvrage: {link: 'http://www.tvrage.com/shows/id-4877'},
      banners: [],
      channels: [],
      alternateTitles: ['Mighty Morphin\' Power Rangers', 'Power Rangers: Dino Thunder', 'Power Rangers: Jungle Fury', 'Power Rangers: Lightspeed Rescue', 'Power Rangers: Lost Galaxy', 'Power Rangers: Megaforce', 'Power Rangers: Mystic Force', 'Power Rangers: Ninja Storm', 'Power Rangers: Operation Overdrive', 'Power Rangers: RPM', 'Power Rangers: Samurai', 'Power Rangers: Space', 'Power Rangers: SPD', 'Power Rangers: Super Megaforce', 'Power Rangers: Super Samurai', 'Power Rangers: Time Force', 'Power Rangers: Turbo', 'Power Rangers: Wild Force', 'Power Rangers: Zeo'],

      imdbRating: '6.4',
      imdbVotes: '16,517',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'Prison Break',
      tvdb: 75340,
      themoviedb: 2288,
      freebase: '/m/06dfz1',
      guideboxId: 369,
      containerShow: 0,
      firstAired: '2005-08-29',
      imdbId: 'tt0455275',
      artwork208X117: 'https://static-api.guidebox.com/thumbnails_small/369-7367410473-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/thumbnails_medium/369-9512770478-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/thumbnails_large/369-8176394603-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/thumbnails_xlarge/369-751368963-608x342.jpg',
      popularity: 45,
      tvrage: {link: 'http://www.tvrage.com/shows/id-4895'},
      banners: [],
      channels: [],
      alternateTitles: ['The Break'],

      imdbRating: '8.5',
      imdbVotes: '357,769',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'House of Cards',
      tvdb: 262980,
      themoviedb: 1425,
      freebase: '/m/0h3rv9x',
      guideboxId: 14461,
      containerShow: 0,
      firstAired: '2013-02-01',
      imdbId: 'tt1856010',
      artwork208X117: 'https://static-api.guidebox.com/111615/thumbnails_small/14461-6190164420-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/111615/thumbnails_medium/14461-8911862890-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/111615/thumbnails_large/14461-1076299325-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/111615/thumbnails_xlarge/14461-9087308645-608x342-show-thumbnail.jpg',
      popularity: 46,
      tvrage: {link: 'http://www.tvrage.com/shows/id-27822'},
      banners: [],
      channels: [],
      alternateTitles: ['House of Cards (2013)', 'House of Cards (US)'],

      imdbRating: '9.0',
      imdbVotes: '345,179',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'The Americans',
      tvdb: 261690,
      themoviedb: 46533,
      freebase: '/m/0nb8y4z',
      guideboxId: 13893,
      containerShow: 0,
      firstAired: '2013-01-30',
      imdbId: 'tt2149175',
      artwork208X117: 'https://static-api.guidebox.com/thumbnails_small/13893-1802110896-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/thumbnails_medium/13893-5226911139-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/thumbnails_large/13893-5660748468-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/thumbnails_xlarge/13893-7367854346-608x342.jpg',
      popularity: 47,
      tvrage: {link: 'http://www.tvrage.com/shows/id-30449'},
      banners: [],
      channels: [],
      alternateTitles: ['The Americans (2013)'],

      imdbRating: '8.3',
      imdbVotes: '53,042',
      tomatoConsensus: 'N/A',
      tomatoFresh: 'N/A',
      tomatoImage: 'N/A',
      tomatoMeter: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoRotten: 'N/A',
      tomatoUrl: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',

    },
    {

      title: 'The Last Kingdom',
      tvdb: 298566,
      themoviedb: 63333,
      freebase: null,
      guideboxId: 32666,
      containerShow: 0,
      firstAired: '2015-07-30',
      imdbId: 'tt4179452',
      artwork208X117: 'https://static-api.guidebox.com/060515/thumbnails_small/32666-2328738300-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/060515/thumbnails_medium/32666-8626148314-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/060515/thumbnails_large/32666-4462559121-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/060515/thumbnails_xlarge/32666-6527719642-608x342.jpg',
      popularity: 48,
      tvrage: {link: 'http://www.tvrage.com/shows/id-43545'},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Modern Family',
      tvdb: 95011,
      themoviedb: 1421,
      freebase: '/m/05zr0xl',
      guideboxId: 169,
      containerShow: 0,
      firstAired: '2009-09-23',
      imdbId: 'tt1442437',
      artwork208X117: 'https://static-api.guidebox.com/091414/thumbnails_small/169-8675502138-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091414/thumbnails_medium/169-1176669537-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091414/thumbnails_large/169-9427111153-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091414/thumbnails_xlarge/169-6227865671-608x342-show-thumbnail.jpg',
      popularity: 49,
      tvrage: {link: 'http://www.tvrage.com/shows/id-22622'},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'The Office',
      tvdb: 73244,
      themoviedb: 2316,
      freebase: '/m/08jgk1',
      guideboxId: 205,
      containerShow: 0,
      firstAired: '2005-03-24',
      imdbId: 'tt0386676',
      artwork208X117: 'https://static-api.guidebox.com/thumbnails_small/205-5041042548-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/thumbnails_medium/205-794024850-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/thumbnails_large/205-8452868517-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/thumbnails_xlarge/205-657829540-608x342.jpg',
      popularity: 50,
      tvrage: {link: 'http://www.tvrage.com/shows/id-6061'},
      banners: [],
      channels: [],
      alternateTitles: ['The Office US', 'The Office (US)'],


    },
    {

      title: 'The Magicians',
      tvdb: 299139,
      themoviedb: 64432,
      freebase: null,
      guideboxId: 34656,
      containerShow: 0,
      firstAired: '2015-12-17',
      imdbId: 'tt4254242',
      artwork208X117: 'https://static-api.guidebox.com/111615/thumbnails_small/34656-743829250-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/111615/thumbnails_medium/34656-8152931546-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/111615/thumbnails_large/34656-4190836237-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/111615/thumbnails_xlarge/34656-268322207-608x342-show-thumbnail.jpg',
      popularity: 51,
      tvrage: {link: 'http://www.tvrage.com/shows/id-43586'},
      banners: [],
      channels: [],
      alternateTitles: ['The Magicians (2016)'],


    },
    {

      title: 'Girls',
      tvdb: 220411,
      themoviedb: 42282,
      freebase: '/m/0hr41p6',
      guideboxId: 11590,
      containerShow: 0,
      firstAired: '2012-04-15',
      imdbId: 'tt1723816',
      artwork208X117: 'https://static-api.guidebox.com/thumbnails_small/11590-328551620-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/thumbnails_medium/11590-7813131581-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/thumbnails_large/11590-6029716455-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/thumbnails_xlarge/11590-7853136523-608x342.jpg',
      popularity: 52,
      tvrage: {link: 'http://www.tvrage.com/shows/id-30124'},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Law & Order: Special Victims Unit',
      tvdb: 75692,
      themoviedb: 2734,
      freebase: '/m/01b_lz',
      guideboxId: 307,
      containerShow: 0,
      firstAired: '1999-09-20',
      imdbId: 'tt0203259',
      artwork208X117: 'https://static-api.guidebox.com/thumbnails_small/307-5936161275-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/thumbnails_medium/307-9533812892-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/thumbnails_large/307-9753355067-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/thumbnails_xlarge/307-8820663467-608x342.jpg',
      popularity: 53,
      tvrage: {link: 'http://www.tvrage.com/shows/id-4204'},
      banners: [],
      channels: [],
      alternateTitles: ['Law and Order: New York', 'Law and Order: Special Victims Unit', 'Law and Order: SVU', 'Law & Order: SVU'],


    },
    {

      title: 'American Horror Story',
      tvdb: 250487,
      themoviedb: 1413,
      freebase: '/m/0h3mh3q',
      guideboxId: 621,
      containerShow: 0,
      firstAired: '2011-10-05',
      imdbId: 'tt1844624',
      artwork208X117: 'https://static-api.guidebox.com/091414/thumbnails_small/621-5052943537-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091414/thumbnails_medium/621-5676654009-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091414/thumbnails_large/621-2614004077-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091414/thumbnails_xlarge/621-8840307733-608x342-show-thumbnail.jpg',
      popularity: 54,
      tvrage: {link: 'http://www.tvrage.com/shows/id-28776'},
      banners: [],
      channels: [],
      alternateTitles: ['American Horror Story: Asylum', 'American Horror Story: Coven', 'American Horror Story: Freak Show'],


    },
    {

      title: 'Broadchurch',
      tvdb: 266398,
      themoviedb: 1427,
      freebase: '/m/0qfq7p_',
      guideboxId: 15706,
      containerShow: 0,
      firstAired: '2013-03-04',
      imdbId: 'tt2249364',
      artwork208X117: 'https://static-api.guidebox.com/041014/thumbnails_small/15706-7744703041-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/041014/thumbnails_medium/15706-7890075179-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/041014/thumbnails_large/15706-6043995009-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/041014/thumbnails_xlarge/15706-8390895491-608x342.jpg',
      popularity: 55,
      tvrage: {link: 'http://www.tvrage.com/shows/id-34118'},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Sons of Anarchy',
      tvdb: 82696,
      themoviedb: 1409,
      freebase: '/m/04f6hhm',
      guideboxId: 617,
      containerShow: 0,
      firstAired: '2008-09-03',
      imdbId: 'tt1124373',
      artwork208X117: 'https://static-api.guidebox.com/091414/thumbnails_small/617-1003306760-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091414/thumbnails_medium/617-8610155843-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091414/thumbnails_large/617-745434487-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091414/thumbnails_xlarge/617-4148821062-608x342-show-thumbnail.jpg',
      popularity: 56,
      tvrage: {link: 'http://www.tvrage.com/shows/id-18174'},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Peaky Blinders',
      tvdb: 270915,
      themoviedb: 60574,
      freebase: '/m/0ql2gt3',
      guideboxId: 21769,
      containerShow: 0,
      firstAired: '2013-09-12',
      imdbId: 'tt2442560',
      artwork208X117: 'https://static-api.guidebox.com/091414/thumbnails_small/21769-1195113524-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091414/thumbnails_medium/21769-1152008316-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091414/thumbnails_large/21769-6679339749-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091414/thumbnails_xlarge/21769-2176648253-608x342-show-thumbnail.jpg',
      popularity: 57,
      tvrage: {link: 'http://www.tvrage.com/shows/id-37240'},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Sherlock',
      tvdb: 176941,
      themoviedb: 19885,
      freebase: '/m/053x8hr',
      guideboxId: 13424,
      containerShow: 0,
      firstAired: '2010-07-25',
      imdbId: 'tt1475582',
      artwork208X117: 'https://static-api.guidebox.com/thumbnails_small/13424-7579897954-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/thumbnails_medium/13424-4883420598-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/thumbnails_large/13424-7134181298-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/thumbnails_xlarge/13424-8520273198-608x342.jpg',
      popularity: 58,
      tvrage: {link: 'http://www.tvrage.com/shows/id-23433'},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'It\'s Always Sunny in Philadelphia',
      tvdb: 75805,
      themoviedb: 2710,
      freebase: '/m/07ct0z',
      guideboxId: 612,
      containerShow: 0,
      firstAired: '2005-08-04',
      imdbId: 'tt0472954',
      artwork208X117: 'https://static-api.guidebox.com/091414/thumbnails_small/612-6098058661-208x117-show-thumbnail.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091414/thumbnails_medium/612-5730778291-304x171-show-thumbnail.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091414/thumbnails_large/612-6969761858-448x252-show-thumbnail.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091414/thumbnails_xlarge/612-1023839778-608x342-show-thumbnail.jpg',
      popularity: 59,
      tvrage: {link: 'http://www.tvrage.com/shows/id-4004'},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Boat Buyers',
      tvdb: 0,
      themoviedb: 0,
      freebase: null,
      guideboxId: 43144,
      containerShow: 0,
      firstAired: '2016-07-30',
      imdbId: '',
      artwork208X117: 'https://static-api.guidebox.com/091716/thumbnails_small/43144-6024739696-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091716/thumbnails_medium/43144-9959620060-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091716/thumbnails_large/43144-7083208896-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091716/thumbnails_xlarge/43144-1895013238-608x342.jpg',
      popularity: 21238,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Say Yes to the Dress: UK',
      tvdb: 322615,
      themoviedb: 0,
      freebase: null,
      guideboxId: 43145,
      containerShow: 0,
      firstAired: '2017-03-05',
      imdbId: '',
      artwork208X117: 'https://static-api.guidebox.com/091716/thumbnails_small/43145-1841153419-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091716/thumbnails_medium/43145-6792436889-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091716/thumbnails_large/43145-9222190557-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091716/thumbnails_xlarge/43145-4469288229-608x342.jpg',
      popularity: 21239,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Auto Racing',
      tvdb: 0,
      themoviedb: 0,
      freebase: null,
      guideboxId: 43146,
      containerShow: 0,
      firstAired: '2017-03-05',
      imdbId: '',
      artwork208X117: 'https://static-api.guidebox.com/091716/thumbnails_small/43146-4873779737-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091716/thumbnails_medium/43146-4909593943-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091716/thumbnails_large/43146-6259182147-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091716/thumbnails_xlarge/43146-9080233862-608x342.jpg',
      popularity: 21240,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'World Baseball Classic',
      tvdb: 0,
      themoviedb: 0,
      freebase: null,
      guideboxId: 43147,
      containerShow: 0,
      firstAired: '2017-03-06',
      imdbId: '',
      artwork208X117: 'https://static-api.guidebox.com/091716/thumbnails_small/43147-248260503-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091716/thumbnails_medium/43147-3770627482-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091716/thumbnails_large/43147-5164722782-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091716/thumbnails_xlarge/43147-5093464474-608x342.jpg',
      popularity: 21241,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Home Town',
      tvdb: 0,
      themoviedb: 0,
      freebase: null,
      guideboxId: 43148,
      containerShow: 0,
      firstAired: '2017-03-20',
      imdbId: '',
      artwork208X117: 'https://static-api.guidebox.com/091716/thumbnails_small/43148-7074174224-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091716/thumbnails_medium/43148-7283829357-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091716/thumbnails_large/43148-284551522-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091716/thumbnails_xlarge/43148-3044520384-608x342.jpg',
      popularity: 21242,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Murder in Lehigh Valley Keith Morrison Investigates (1x120)',
      tvdb: 0,
      themoviedb: 0,
      freebase: null,
      guideboxId: 43153,
      containerShow: 0,
      firstAired: '2017-03-03',
      imdbId: '',
      artwork208X117: 'https://static-api.guidebox.com/091716/thumbnails_small/43153-8802049202-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091716/thumbnails_medium/43153-5747506781-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091716/thumbnails_large/43153-6817398295-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091716/thumbnails_xlarge/43153-2218964678-608x342.jpg',
      popularity: 21243,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Twiz & Tuck',
      tvdb: 0,
      themoviedb: 0,
      freebase: null,
      guideboxId: 43159,
      containerShow: 0,
      firstAired: '2017-03-28',
      imdbId: '',
      artwork208X117: 'https://static-api.guidebox.com/091716/thumbnails_small/43159-5299949879-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091716/thumbnails_medium/43159-2406735854-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091716/thumbnails_large/43159-5851926375-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091716/thumbnails_xlarge/43159-9552443097-608x342.jpg',
      popularity: 21244,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Bloomberg Real Yield',
      tvdb: 0,
      themoviedb: 0,
      freebase: null,
      guideboxId: 43160,
      containerShow: 0,
      firstAired: '2017-03-03',
      imdbId: '',
      artwork208X117: 'https://static-api.guidebox.com/091716/thumbnails_small/43160-3876953926-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091716/thumbnails_medium/43160-6757350038-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091716/thumbnails_large/43160-8711841902-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091716/thumbnails_xlarge/43160-4170087231-608x342.jpg',
      popularity: 21245,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Fire Island',
      tvdb: 0,
      themoviedb: 0,
      freebase: null,
      guideboxId: 43162,
      containerShow: 0,
      firstAired: '2017-03-21',
      imdbId: '',
      artwork208X117: 'https://static-api.guidebox.com/091716/thumbnails_small/43162-1468772563-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091716/thumbnails_medium/43162-3680865895-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091716/thumbnails_large/43162-914330981-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091716/thumbnails_xlarge/43162-3814500193-608x342.jpg',
      popularity: 21246,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Water & Power: A California Heist',
      tvdb: 0,
      themoviedb: 0,
      freebase: null,
      guideboxId: 43177,
      containerShow: 0,
      firstAired: '2017-03-13',
      imdbId: 'tt6290202',
      artwork208X117: 'https://static-api.guidebox.com/091716/thumbnails_small/43177-8158208294-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091716/thumbnails_medium/43177-1026517819-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091716/thumbnails_large/43177-2834661827-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091716/thumbnails_xlarge/43177-3173402986-608x342.jpg',
      popularity: 21247,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'A Season With Florida State Football',
      tvdb: 0,
      themoviedb: 0,
      freebase: null,
      guideboxId: 43163,
      containerShow: 0,
      firstAired: '2015-09-08',
      imdbId: '',
      artwork208X117: 'https://static-api.guidebox.com/091716/thumbnails_small/43163-2409091695-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091716/thumbnails_medium/43163-6239628731-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091716/thumbnails_large/43163-6583453561-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091716/thumbnails_xlarge/43163-1962058186-608x342.jpg',
      popularity: 21247,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Nazi Death Squads',
      tvdb: 0,
      themoviedb: 0,
      freebase: null,
      guideboxId: 43179,
      containerShow: 0,
      firstAired: '2017-03-08',
      imdbId: '',
      artwork208X117: 'https://static-api.guidebox.com/091716/thumbnails_small/43179-2534886552-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091716/thumbnails_medium/43179-1722756168-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091716/thumbnails_large/43179-5772395972-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091716/thumbnails_xlarge/43179-9030581247-608x342.jpg',
      popularity: 21248,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'Spirits of Atlanta',
      tvdb: 0,
      themoviedb: 0,
      freebase: null,
      guideboxId: 43164,
      containerShow: 0,
      firstAired: 'false',
      imdbId: '',
      artwork208X117: 'https://static-api.guidebox.com/091716/thumbnails_small/43164-4766458687-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091716/thumbnails_medium/43164-5254805647-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091716/thumbnails_large/43164-7166558201-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091716/thumbnails_xlarge/43164-2305238331-608x342.jpg',
      popularity: 21248,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'La Piloto',
      tvdb: 0,
      themoviedb: 0,
      freebase: null,
      guideboxId: 43180,
      containerShow: 0,
      firstAired: '2017-02-28',
      imdbId: '',
      artwork208X117: 'https://static-api.guidebox.com/091716/thumbnails_small/43180-9049740126-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091716/thumbnails_medium/43180-5771450647-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091716/thumbnails_large/43180-1409423966-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091716/thumbnails_xlarge/43180-5916328886-608x342.jpg',
      popularity: 21249,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: [],


    },
    {

      title: 'The Twins',
      tvdb: 0,
      themoviedb: 0,
      freebase: null,
      guideboxId: 43176,
      containerShow: 0,
      firstAired: '2017-03-13',
      imdbId: '',
      artwork208X117: 'https://static-api.guidebox.com/091716/thumbnails_small/43176-6276247818-208x117.jpg',
      artwork304X171: 'https://static-api.guidebox.com/091716/thumbnails_medium/43176-9575927909-304x171.jpg',
      artwork448X252: 'https://static-api.guidebox.com/091716/thumbnails_large/43176-7168671237-448x252.jpg',
      artwork608X342: 'https://static-api.guidebox.com/091716/thumbnails_xlarge/43176-9378495202-608x342.jpg',
      popularity: 21249,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: [],


    }
  ];
  Show.find({}).remove()
    .then(() => {
      Show.insertMany(shows)
        .then(() => {
          logger.log('info', 'finished populating shows');
        });
    });
}
