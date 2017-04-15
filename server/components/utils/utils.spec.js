'use strict';
let Utils = require('./index');

describe('Utils: ', () => {
  describe('normalizeGuideboxFields', () => {
    let guideboxMedia = [
      {
        id: 42644,
        title: 'The Impossible',
        release_year: 2012,
        themoviedb: 80278,
        original_title: 'The Impossible',
        alternate_titles: [
          'Lo imposible',
          'Impossible, The'
        ],
        imdb: 'tt1649419',
        pre_order: true,
        in_theaters: true,
        release_date: '2012-09-09',
        rating: 'PG-13',
        rottentomatoes: 771312396,
        freebase: '/m/0g5838s',
        wikipedia_id: 30127126,
        metacritic: 'http://www.metacritic.com/movie/the-impossible',
        common_sense_media: 'https://www.commonsensemedia.org/movie-reviews/the-impossible',
        poster_120x171: 'http://static-api.guidebox.com/thumbnails_movies_small/42644-385088753-2830074053-6980431541-small-120x171.jpg',
        poster_240x342: 'http://static-api.guidebox.com/thumbnails_movies_medium/42644-9519385076-843068930-5512865800-medium-240x342.jpg',
        poster_400x570: 'http://static-api.guidebox.com/thumbnails_movies/42644-2603341895-8612308907-5382197630-large-400x570.jpg'
      },
      {
        id: 147221,
        title: 'Come And Find Me',
        release_year: 2016,
        themoviedb: 345918,
        original_title: 'Come And Find Me',
        alternate_titles: [],
        imdb: 'tt2597768',
        pre_order: false,
        in_theaters: false,
        release_date: '2016-11-11',
        rating: 'R',
        rottentomatoes: 771455545,
        freebase: '',
        wikipedia_id: 47471058,
        metacritic: 'http://www.metacritic.com/movie/come-and-find-me',
        common_sense_media: null,
        poster_120x171: 'http://static-api.guidebox.com/091716/thumbnails_movies_small/147221-1229662113-1280149189-6558742830-small-120x171.jpg',
        poster_240x342: 'http://static-api.guidebox.com/091716/thumbnails_movies_medium/147221-9114855318-3920032387-9383354056-medium-240x342.jpg',
        poster_400x570: 'http://static-api.guidebox.com/091716/thumbnails_movies/147221-874239393-1356906114-8091951082-large-400x570.jpg'
      },
      {
        id: 147503,
        title: 'Rules Don\'t Apply',
        themoviedb: 291328,
        rating: 'PG-13',
        rottentomatoes: 771443706,
        freebase: '',
        metacritic: 'http://www.metacritic.com/movie/rules-dont-apply',
      }
    ];

    let mediaObjectWithBanners = {
      id: 147503,
      title: 'Rules Don\'t Apply',
      themoviedb: 291328,
      rating: 'PG-13',
      rottentomatoes: 771443706,
      freebase: '',
      metacritic: 'http://www.metacritic.com/movie/rules-dont-apply',
      banners: [
        {
          xlarge: {
            url: 'http://static-api.guidebox.com/012915/shows/banners/37808-8563752207-4559927410-1893520952-1300x240.jpg',
            width: 1300,
            height: 240
          },
          large: {
            url: 'http://static-api.guidebox.com/012915/shows/banners/37808-8563752207-4559927410-1893520952-1000x185.jpg',
            width: 1000,
            height: 185
          },
          medium: {
            url: 'http://static-api.guidebox.com/012915/shows/banners/37808-8563752207-4559927410-1893520952-756x140.jpg',
            width: 756,
            height: 140
          },
          small: {
            url: 'http://static-api.guidebox.com/012915/shows/banners/37808-8563752207-4559927410-1893520952-551x102.jpg',
            width: 551,
            height: 102
          },
          original_width: 758,
          original_height: 140,
          image_rating: 0
        },
        {
          xlarge: {
            url: 'https://static-api.guidebox.com/012915/shows/banners/37808-8563752207-4559927410-1893520952-1300x240.jpg',
            width: 1300,
            height: 240
          },
        },
        {
          foo: {}
        }

      ]

    };

    it('should normalize fields given an array', () => {
      let normalized = Utils.normalizeGuideboxFields(guideboxMedia);
      expect(normalized).to.eql([
        {
          title: 'The Impossible',
          release_year: 2012,
          themoviedb: 80278,
          original_title: 'The Impossible',
          alternate_titles: [
            'Lo imposible',
            'Impossible, The'
          ],
          imdb: 'tt1649419',
          pre_order: true,
          in_theaters: true,
          release_date: '2012-09-09',
          rating: 'PG-13',
          rottentomatoes: 771312396,
          freebase: '/m/0g5838s',
          wikipedia_id: 30127126,
          metacritic: 'http://www.metacritic.com/movie/the-impossible',
          common_sense_media: 'https://www.commonsensemedia.org/movie-reviews/the-impossible',
          poster_120x171: 'http://static-api.guidebox.com/thumbnails_movies_small/42644-385088753-2830074053-6980431541-small-120x171.jpg',
          poster_240x342: 'http://static-api.guidebox.com/thumbnails_movies_medium/42644-9519385076-843068930-5512865800-medium-240x342.jpg',
          poster_400x570: 'http://static-api.guidebox.com/thumbnails_movies/42644-2603341895-8612308907-5382197630-large-400x570.jpg',
          guideboxId: 42644,
          imdbID: 'tt1649419',
          releaseYear: 2012,
          originalTitle: 'The Impossible',
          alternateTitles: [
            'Lo imposible',
            'Impossible, The'
          ],
          preOrder: true,
          inTheaters: true,
          releaseDate: '2012-09-09',
          wikipediaId: 30127126,
          commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/the-impossible',
          poster120X171: 'https://static-api.guidebox.com/thumbnails_movies_small/42644-385088753-2830074053-6980431541-small-120x171.jpg',
          poster240X342: 'https://static-api.guidebox.com/thumbnails_movies_medium/42644-9519385076-843068930-5512865800-medium-240x342.jpg',
          poster400X570: 'https://static-api.guidebox.com/thumbnails_movies/42644-2603341895-8612308907-5382197630-large-400x570.jpg',
          imdbId: 'tt1649419'
        },
        {
          title: 'Come And Find Me',
          release_year: 2016,
          themoviedb: 345918,
          original_title: 'Come And Find Me',
          alternate_titles: [],
          imdb: 'tt2597768',
          pre_order: false,
          in_theaters: false,
          release_date: '2016-11-11',
          rating: 'R',
          rottentomatoes: 771455545,
          freebase: '',
          wikipedia_id: 47471058,
          metacritic: 'http://www.metacritic.com/movie/come-and-find-me',
          common_sense_media: null,
          poster_120x171: 'http://static-api.guidebox.com/091716/thumbnails_movies_small/147221-1229662113-1280149189-6558742830-small-120x171.jpg',
          poster_240x342: 'http://static-api.guidebox.com/091716/thumbnails_movies_medium/147221-9114855318-3920032387-9383354056-medium-240x342.jpg',
          poster_400x570: 'http://static-api.guidebox.com/091716/thumbnails_movies/147221-874239393-1356906114-8091951082-large-400x570.jpg',
          guideboxId: 147221,
          imdbID: 'tt2597768',
          releaseYear: 2016,
          originalTitle: 'Come And Find Me',
          alternateTitles: [],
          preOrder: false,
          inTheaters: false,
          releaseDate: '2016-11-11',
          wikipediaId: 47471058,
          commonSenseMedia: null,
          poster120X171: 'https://static-api.guidebox.com/091716/thumbnails_movies_small/147221-1229662113-1280149189-6558742830-small-120x171.jpg',
          poster240X342: 'https://static-api.guidebox.com/091716/thumbnails_movies_medium/147221-9114855318-3920032387-9383354056-medium-240x342.jpg',
          poster400X570: 'https://static-api.guidebox.com/091716/thumbnails_movies/147221-874239393-1356906114-8091951082-large-400x570.jpg',
          imdbId: 'tt2597768'
        },
        {
          title: 'Rules Don\'t Apply',
          themoviedb: 291328,
          rating: 'PG-13',
          rottentomatoes: 771443706,
          freebase: '',
          metacritic: 'http://www.metacritic.com/movie/rules-dont-apply',
          guideboxId: 147503
        }
      ]);
    });

    it('should normalize fields given a single object', () => {
      let normalized = Utils.normalizeGuideboxFields({
        id: 42644,
        title: 'The Impossible',
        release_year: 2012,
        themoviedb: 80278,
        original_title: 'The Impossible',
        alternate_titles: [
          'Lo imposible',
          'Impossible, The'
        ],
        imdb: 'tt1649419',
        pre_order: true,
        in_theaters: true,
        release_date: '2012-09-09',
        rating: 'PG-13',
        rottentomatoes: 771312396,
        freebase: '/m/0g5838s',
        wikipedia_id: 30127126,
        metacritic: 'http://www.metacritic.com/movie/the-impossible',
        common_sense_media: 'https://www.commonsensemedia.org/movie-reviews/the-impossible',
        poster_120x171: 'http://static-api.guidebox.com/thumbnails_movies_small/42644-385088753-2830074053-6980431541-small-120x171.jpg',
        poster_240x342: 'http://static-api.guidebox.com/thumbnails_movies_medium/42644-9519385076-843068930-5512865800-medium-240x342.jpg',
        poster_400x570: 'http://static-api.guidebox.com/thumbnails_movies/42644-2603341895-8612308907-5382197630-large-400x570.jpg'
      });
      expect(normalized).to.eql({
        title: 'The Impossible',
        release_year: 2012,
        themoviedb: 80278,
        original_title: 'The Impossible',
        alternate_titles: [
          'Lo imposible',
          'Impossible, The'
        ],
        imdb: 'tt1649419',
        pre_order: true,
        in_theaters: true,
        release_date: '2012-09-09',
        rating: 'PG-13',
        rottentomatoes: 771312396,
        freebase: '/m/0g5838s',
        wikipedia_id: 30127126,
        metacritic: 'http://www.metacritic.com/movie/the-impossible',
        common_sense_media: 'https://www.commonsensemedia.org/movie-reviews/the-impossible',
        poster_120x171: 'http://static-api.guidebox.com/thumbnails_movies_small/42644-385088753-2830074053-6980431541-small-120x171.jpg',
        poster_240x342: 'http://static-api.guidebox.com/thumbnails_movies_medium/42644-9519385076-843068930-5512865800-medium-240x342.jpg',
        poster_400x570: 'http://static-api.guidebox.com/thumbnails_movies/42644-2603341895-8612308907-5382197630-large-400x570.jpg',
        guideboxId: 42644,
        imdbID: 'tt1649419',
        releaseYear: 2012,
        originalTitle: 'The Impossible',
        alternateTitles: [
          'Lo imposible',
          'Impossible, The'
        ],
        preOrder: true,
        inTheaters: true,
        releaseDate: '2012-09-09',
        wikipediaId: 30127126,
        commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/the-impossible',
        poster120X171: 'https://static-api.guidebox.com/thumbnails_movies_small/42644-385088753-2830074053-6980431541-small-120x171.jpg',
        poster240X342: 'https://static-api.guidebox.com/thumbnails_movies_medium/42644-9519385076-843068930-5512865800-medium-240x342.jpg',
        poster400X570: 'https://static-api.guidebox.com/thumbnails_movies/42644-2603341895-8612308907-5382197630-large-400x570.jpg',
        imdbId: 'tt1649419'
      });
    });

    it('should convert banner object urls to https', () => {
      let normalized = Utils.normalizeGuideboxFields(mediaObjectWithBanners);
      // normal
      expect(normalized.banners[0].small.url).to.equal('https://static-api.guidebox.com/012915/shows/banners/37808-8563752207-4559927410-1893520952-551x102.jpg');
      expect(normalized.banners[0].medium.url).to.equal('https://static-api.guidebox.com/012915/shows/banners/37808-8563752207-4559927410-1893520952-756x140.jpg');
      expect(normalized.banners[0].large.url).to.equal('https://static-api.guidebox.com/012915/shows/banners/37808-8563752207-4559927410-1893520952-1000x185.jpg');
      expect(normalized.banners[0].xlarge.url).to.equal('https://static-api.guidebox.com/012915/shows/banners/37808-8563752207-4559927410-1893520952-1300x240.jpg');

      //already https
      expect(normalized.banners[1].xlarge.url).to.equal('https://static-api.guidebox.com/012915/shows/banners/37808-8563752207-4559927410-1893520952-1300x240.jpg');

      // unexpected banner object
      expect(normalized.banners[2]).to.eql({foo: {}});
    });
  });
});
