'use strict';
import movieService from '../movieService/movieService.service';
import watchlistService from '../services/watchlistService/watchlistService.service';
import search from './search.component';

describe('Component: SearchComponent', () => {
  // load the controller's module
  beforeEach(angular.mock.module(search));
  beforeEach(angular.mock.module(movieService));
  beforeEach(angular.mock.module(watchlistService));
  beforeEach(angular.mock.module('stateMock'));

  let searchComponent;
  let scope;
  let state;
  let stateparams;
  let $httpBackend;

  describe('success query', () => {
    // Initialize the controller and a mock scope
    beforeEach(inject(function(_$httpBackend_, $componentController, movieService, $rootScope, $state, watchlistService) {
      $httpBackend = _$httpBackend_;
      scope = $rootScope.$new();
      state = $state;
      stateparams = {query: 'batman'};
      searchComponent = $componentController('search', {
        $scope: scope,
        movieService,
        watchlistService,
        $stateParams: stateparams
      });
      $httpBackend.expectGET('/api/search/batman')
        .respond({
          movies: {
            results: [{
              _id: '58e702211f641209b1d5b58b',
              title: 'The Taking of Deborah Logan',
              themoviedb: 297608,
              rating: 'R',
              rottentomatoes: 771390286,
              freebase: '',
              metacritic: null,
              guideboxId: 93819,
              releaseYear: 2014,
              originalTitle: 'The Taking of Deborah Logan',
              preOrder: false,
              inTheaters: false,
              releaseDate: '2014-10-21T00:00:00.000Z',
              commonSenseMedia: null,
              poster120X171: 'https://static-api.guidebox.com/091414/thumbnails_movies_small/93819-8925471352-6254928871-8881192440-small-120x171.jpg',
              poster240X342: 'https://static-api.guidebox.com/091414/thumbnails_movies_medium/93819-6052187807-8959490642-11763135-medium-240x342.jpg',
              poster400X570: 'https://static-api.guidebox.com/091414/thumbnails_movies/93819-4804255269-5574131459-1460226970-large-400x570.jpg',
              imdbId: 'tt3387648',
              popularity: 4447,
              __v: 0,
              writers: [],
              tags: [],
              banners: [],
              alternateTitles: ['The Taking'],
              genres: [],
              directors: [],
              cast: []
            }, {
              _id: '58e7030545235e09de04659b',
              title: 'Logan\'s Run',
              themoviedb: 10803,
              rating: 'PG',
              rottentomatoes: 12280,
              freebase: '/m/0fb2ky',
              metacritic: null,
              guideboxId: 30993,
              releaseYear: 1976,
              originalTitle: 'Logan\'s Run',
              preOrder: false,
              inTheaters: false,
              releaseDate: '1976-06-23T00:00:00.000Z',
              commonSenseMedia: null,
              poster120X171: 'https://static-api.guidebox.com/thumbnails_movies_small/30993-1836929992-7381832227-5317008039-small-120x171.jpg',
              poster240X342: 'https://static-api.guidebox.com/thumbnails_movies_medium/30993-3709458155-5093233045-1957224934-medium-240x342.jpg',
              poster400X570: 'https://static-api.guidebox.com/thumbnails_movies/30993-5820987080-1583617372-8218286228-large-400x570.jpg',
              imdbId: 'tt0074812',
              popularity: 1738,
              __v: 0,
              writers: [],
              tags: [],
              banners: [],
              alternateTitles: [],
              genres: [],
              directors: [],
              cast: []
            }, {
              _id: '58e7040de98bb809ee5c5b76',
              title: 'The Kate Logan Affair',
              themoviedb: 78286,
              rating: 'NR',
              rottentomatoes: 0,
              freebase: '/m/0808x51',
              metacritic: null,
              guideboxId: 8110,
              releaseYear: 2010,
              originalTitle: 'The Kate Logan Affair',
              preOrder: false,
              inTheaters: false,
              releaseDate: '2010-10-15T00:00:00.000Z',
              commonSenseMedia: null,
              poster120X171: 'https://static-api.guidebox.com/thumbnails_movies_small/8110-5062050372-1539110882-4425873775-small-120x171.jpg',
              poster240X342: 'https://static-api.guidebox.com/thumbnails_movies_medium/8110-9665504819-1912773336-1884702831-medium-240x342.jpg',
              poster400X570: 'https://static-api.guidebox.com/thumbnails_movies/8110-7968104002-3352207858-474357103-large-400x570.jpg',
              imdbId: 'tt1744793',
              popularity: 15338,
              __v: 0,
              writers: [],
              tags: [],
              banners: [],
              alternateTitles: ['Kate Logan Affair', 'Kate Logan Affair, The'],
              genres: [],
              directors: [],
              cast: []
            }, {
              _id: '58e6f99d042ae8091939c2af',
              __v: 1,
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
              duration: 8100,
              overview: 'In the near future, a weary Logan cares for an ailing Professor X in a hide out on the Mexican border. But Logan\'s attempts to hide from the world and his legacy are up-ended when a young mutant arrives, being pursued by dark forces.',
              imdbRating: '8.5',
              imdbVotes: '181,361',
              omdbUpdated: '2017-04-16T04:36:29.488Z',
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
              writers: [{
                name: 'James Mangold',
                imdb: 'nm0003506',
                _id: '58f2b35ef40ef2e3e5653a29'
              }, {name: 'Scott Frank', imdb: 'nm0291082', _id: '58f2b35ef40ef2e3e5653a28'}, {
                name: 'Michael Green',
                imdb: 'nm0338169',
                _id: '58f2b35ef40ef2e3e5653a27'
              }],
              tags: [{tag: 'x men', _id: '58f2b35ef40ef2e3e5653a26'}, {
                tag: 'marvel comics',
                _id: '58f2b35ef40ef2e3e5653a25'
              }, {tag: 'superhero', _id: '58f2b35ef40ef2e3e5653a24'}, {
                tag: 'based on comic book',
                _id: '58f2b35ef40ef2e3e5653a23'
              }, {tag: 'based on comic', _id: '58f2b35ef40ef2e3e5653a22'}],
              banners: [{
                _id: '58f2b35ef40ef2e3e5653a54',
                small: {
                  url: 'https://static-api.guidebox.com/012915/movies/banners/147509-4790753680-5847857464-4217972756-551x102.jpg',
                  width: 551,
                  height: 102
                },
                medium: {
                  url: 'https://static-api.guidebox.com/012915/movies/banners/147509-4790753680-5847857464-4217972756-756x140.jpg',
                  width: 756,
                  height: 140
                },
                large: {
                  url: 'https://static-api.guidebox.com/012915/movies/banners/147509-4790753680-5847857464-4217972756-1000x185.jpg',
                  width: 1000,
                  height: 185
                },
                xlarge: {
                  url: 'https://static-api.guidebox.com/012915/movies/banners/147509-4790753680-5847857464-4217972756-1300x240.jpg',
                  width: 1300,
                  height: 240
                }
              }, {
                _id: '58f2b35ef40ef2e3e5653a53',
                small: {
                  url: 'https://static-api.guidebox.com/012915/movies/banners/147509-4508984075-9890171210-3733477499-551x102.jpg',
                  width: 551,
                  height: 102
                },
                medium: {
                  url: 'https://static-api.guidebox.com/012915/movies/banners/147509-4508984075-9890171210-3733477499-756x140.jpg',
                  width: 756,
                  height: 140
                },
                large: {
                  url: 'https://static-api.guidebox.com/012915/movies/banners/147509-4508984075-9890171210-3733477499-1000x185.jpg',
                  width: 1000,
                  height: 185
                },
                xlarge: {
                  url: 'https://static-api.guidebox.com/012915/movies/banners/147509-4508984075-9890171210-3733477499-1300x240.jpg',
                  width: 1300,
                  height: 240
                }
              }],
              social: {facebook: {link: 'https://www.facebook.com/TheWolverineMovie/'}},
              alternateTitles: ['Wolverine 3', 'Untitled The Wolverine Sequel', 'Wolverine 3: Logan', 'Logan (2017)'],
              genres: [{title: 'Action', _id: '58f2b35ef40ef2e3e5653a21'}, {
                title: 'Drama',
                _id: '58f2b35ef40ef2e3e5653a20'
              }, {title: 'Science-Fiction', _id: '58f2b35ef40ef2e3e5653a1f'}],
              directors: [{name: 'James Mangold', imdb: 'nm0003506', _id: '58f2b35ef40ef2e3e5653a2a'}],
              cast: [{
                name: 'Hugh Jackman',
                imdb: 'nm0413168',
                _id: '58f2b35ef40ef2e3e5653a52'
              }, {
                name: 'Patrick Stewart',
                imdb: 'nm0001772',
                _id: '58f2b35ef40ef2e3e5653a51'
              }, {
                name: 'Boyd Holbrook',
                imdb: 'nm2933542',
                _id: '58f2b35ef40ef2e3e5653a50'
              }, {
                name: 'Stephen Merchant',
                imdb: 'nm0580351',
                _id: '58f2b35ef40ef2e3e5653a4f'
              }, {
                name: 'Doris Morgado',
                imdb: 'nm2833464',
                _id: '58f2b35ef40ef2e3e5653a4e'
              }, {
                name: 'Elizabeth Rodriguez',
                imdb: 'nm0735300',
                _id: '58f2b35ef40ef2e3e5653a4d'
              }, {
                name: 'Richard E. Grant',
                imdb: 'nm0001290',
                _id: '58f2b35ef40ef2e3e5653a4c'
              }, {name: 'Eriq La Salle', imdb: 'nm0005113', _id: '58f2b35ef40ef2e3e5653a4b'}, {
                name: 'Elise Neal',
                imdb: 'nm0005264',
                _id: '58f2b35ef40ef2e3e5653a4a'
              }, {
                name: 'Reynaldo Gallegos',
                imdb: 'nm1274545',
                _id: '58f2b35ef40ef2e3e5653a49'
              }, {name: 'David Kallaway', imdb: '', _id: '58f2b35ef40ef2e3e5653a48'}, {
                name: 'Frank Gallegos',
                imdb: 'nm0302740',
                _id: '58f2b35ef40ef2e3e5653a47'
              }, {
                name: 'James Moses Black',
                imdb: 'nm1664127',
                _id: '58f2b35ef40ef2e3e5653a46'
              }, {name: 'Dave Davis', imdb: '', _id: '58f2b35ef40ef2e3e5653a45'}, {
                name: 'Julia Holt',
                imdb: 'nm7437690',
                _id: '58f2b35ef40ef2e3e5653a44'
              }, {name: 'Lauren Gros', imdb: 'nm4754232', _id: '58f2b35ef40ef2e3e5653a43'}, {
                name: 'Juan Gaspard',
                imdb: 'nm6140184',
                _id: '58f2b35ef40ef2e3e5653a42'
              }, {name: 'Dafne Keen', imdb: 'nm6748436', _id: '58f2b35ef40ef2e3e5653a41'}, {
                name: 'Lara Grice',
                imdb: 'nm1305056',
                _id: '58f2b35ef40ef2e3e5653a40'
              }, {
                name: 'Lizeth Hutchings',
                imdb: 'nm6688403',
                _id: '58f2b35ef40ef2e3e5653a3f'
              }, {name: 'Mark Ashworth', imdb: 'nm0039327', _id: '58f2b35ef40ef2e3e5653a3e'}, {
                name: 'Han Soto',
                imdb: 'nm2404349',
                _id: '58f2b35ef40ef2e3e5653a3d'
              }, {
                name: 'Rebecca Chulew',
                imdb: 'nm5307554',
                _id: '58f2b35ef40ef2e3e5653a3c'
              }, {name: 'Ted Ferguson', imdb: 'nm2467078', _id: '58f2b35ef40ef2e3e5653a3b'}, {
                name: 'Justin Lebrun',
                imdb: 'nm1778587',
                _id: '58f2b35ef40ef2e3e5653a3a'
              }, {
                name: 'Christopher Heskey',
                imdb: 'nm6297951',
                _id: '58f2b35ef40ef2e3e5653a39'
              }, {
                name: 'Edgar Leza',
                imdb: 'nm7324904',
                _id: '58f2b35ef40ef2e3e5653a38'
              }, {
                name: 'Daymond C. Roman',
                imdb: 'nm7712286',
                _id: '58f2b35ef40ef2e3e5653a37'
              }, {
                name: 'Gregory Paul Valdez',
                imdb: 'nm7487346',
                _id: '58f2b35ef40ef2e3e5653a36'
              }, {name: 'Hannah Westerfield', imdb: '', _id: '58f2b35ef40ef2e3e5653a35'}, {
                name: 'Jayson Genao',
                imdb: '',
                _id: '58f2b35ef40ef2e3e5653a34'
              }, {
                name: 'Krzysztof Soszynski',
                imdb: 'nm3170830',
                _id: '58f2b35ef40ef2e3e5653a33'
              }, {name: 'Ryan Reynolds', imdb: 'nm0005351', _id: '58f2b35ef40ef2e3e5653a32'}, {
                name: 'Stan Lee',
                imdb: 'nm0498278',
                _id: '58f2b35ef40ef2e3e5653a31'
              }, {name: 'Quincy Fouse', imdb: '', _id: '58f2b35ef40ef2e3e5653a30'}, {
                name: 'Stephen Dunlevy',
                imdb: 'nm2961388',
                _id: '58f2b35ef40ef2e3e5653a2f'
              }, {name: 'Bryant Tardy', imdb: '', _id: '58f2b35ef40ef2e3e5653a2e'}, {
                name: 'Ashlyn Casalegno',
                imdb: '',
                _id: '58f2b35ef40ef2e3e5653a2d'
              }, {name: 'Lennie Loftin', imdb: 'nm0517448', _id: '58f2b35ef40ef2e3e5653a2c'}, {
                name: 'Salef Celiz',
                imdb: '',
                _id: '58f2b35ef40ef2e3e5653a2b'
              }]
            }], totalResults: 4, mediaType: 'movies'
          },
          shows: {
            results: [{
              _id: '58e16ddc9afd569b2584c6ca',
              title: 'Logan\'s Run',
              tvdb: 71216,
              themoviedb: 36626,
              freebase: '/m/0gfwwx4',
              guideboxId: 2007,
              containerShow: 0,
              firstAired: '1977-09-01',
              imdbId: 'tt0075527',
              artwork208X117: 'https://static-api.guidebox.com/091414/thumbnails_small/2007-7332421709-208x117-show-thumbnail.jpg',
              artwork304X171: 'https://static-api.guidebox.com/091414/thumbnails_medium/2007-908472147-304x171-show-thumbnail.jpg',
              artwork448X252: 'https://static-api.guidebox.com/091414/thumbnails_large/2007-5659050313-448x252-show-thumbnail.jpg',
              artwork608X342: 'https://static-api.guidebox.com/091414/thumbnails_xlarge/2007-7699757954-608x342-show-thumbnail.jpg',
              popularity: 1754,
              __v: 0,
              tvrage: {link: 'http://www.tvrage.com/shows/id-4273'},
              banners: [],
              channels: [],
              alternateTitles: []
            }], totalResults: 1, mediaType: 'shows'
          }
        });
      $httpBackend.expectGET('/api/watchlists/').respond({data: [{movies: [], shows: []}]});
    }));

    it('should be able to search', () => {
      searchComponent.$onInit();
      $httpBackend.flush();
      expect(searchComponent.movies).to.have.length(4);
    });
  });

  describe('failed query', () => {
    // Initialize the controller and a mock scope
    beforeEach(inject(function(_$httpBackend_, $componentController, movieService, $rootScope, $state, watchlistService) {
      $httpBackend = _$httpBackend_;
      scope = $rootScope.$new();
      state = $state;
      stateparams = {query: 'failquery'};
      $httpBackend.expectGET('/api/search/failquery')
        .respond(500);
      $httpBackend.expectGET('/api/watchlists/').respond({data: [{movies: [], shows: []}]});
      searchComponent = $componentController('search', {
        movieService,
        watchlistService,
        $scope: scope,
        $stateParams: stateparams,
      });
    }));

    it('should handle rejection', () => {
      searchComponent.$onInit();
      $httpBackend.flush();
      expect(searchComponent.movies).to.have.length(0);
      expect(searchComponent.shows).to.have.length(0);
    });
  });
  describe('missing query params', () => {
    // Initialize the controller and a mock scope
    beforeEach(inject(function(_$httpBackend_, $componentController, movieService, $rootScope, $state, watchlistService) {
      $httpBackend = _$httpBackend_;
      scope = $rootScope.$new();
      state = $state;
      stateparams = {query: null};

      searchComponent = $componentController('search', {
        movieService,
        watchlistService,
        $scope: scope,
        $stateParams: stateparams,
      });
    }));

    it('should not perform search', () => {
      searchComponent.$onInit();
      expect(searchComponent.movies).to.have.length(0);
    });
  });
});
