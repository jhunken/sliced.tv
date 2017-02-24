'use strict';

import ShowsComponent from './shows.component';
import movieService from '../movieService/movieService.service';

describe('Component: ShowsComponent', () => {
  beforeEach(angular.mock.module(ShowsComponent));
  beforeEach(angular.mock.module(movieService));
  beforeEach(angular.mock.module('stateMock'));
  beforeEach(angular.mock.module('socketMock'));

  let scope;
  let showsComponent;
  let state;
  let $httpBackend;
  let stateparams;

  let mockShowsPg1 = {
    results: [{
      _id: '58ae6236a60ffc476d16ca2f',
      title: 'Santa Clarita Diet',
      tvdb: 320450,
      themoviedb: 69470,
      freebase: null,
      guideboxId: 42547,
      containerShow: 0,
      firstAired: '2017-01-24',
      imdbId: 'tt5580540',
      artwork208X117: 'http://static-api.guidebox.com/091716/thumbnails_small/42547-7680221428-208x117.jpg',
      artwork304X171: 'http://static-api.guidebox.com/091716/thumbnails_medium/42547-1548142443-304x171.jpg',
      artwork448X252: 'http://static-api.guidebox.com/091716/thumbnails_large/42547-7280003153-448x252.jpg',
      artwork608X342: 'http://static-api.guidebox.com/091716/thumbnails_xlarge/42547-3149956749-608x342.jpg',
      imdbRating: '8.1',
      imdbVotes: '389',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',
      tomatoUrl: 'N/A',
      __v: 0,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: []
    }, {
      _id: '58ae6236a60ffc476d16ca37',
      title: 'Vikings',
      tvdb: 260449,
      themoviedb: 44217,
      freebase: '/m/0k3lwy1',
      guideboxId: 14554,
      containerShow: 0,
      firstAired: '2013-03-03',
      imdbId: 'tt2306299',
      artwork208X117: 'http://static-api.guidebox.com/120214/thumbnails_small/14554-3064087210-208x117-show-thumbnail.jpg',
      artwork304X171: 'http://static-api.guidebox.com/120214/thumbnails_medium/14554-6577064837-304x171-show-thumbnail.jpg',
      artwork448X252: 'http://static-api.guidebox.com/120214/thumbnails_large/14554-6113301255-448x252-show-thumbnail.jpg',
      artwork608X342: 'http://static-api.guidebox.com/120214/thumbnails_xlarge/14554-1164331185-608x342-show-thumbnail.jpg',
      imdbRating: '8.6',
      imdbVotes: '220,558',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',
      tomatoUrl: 'N/A',
      __v: 1,
      network: 'History',
      overview: 'Vikings follows the adventures of Ragnar Lothbrok the greatest hero of his age. The series tells the sagas of Ragnar\'s band of Viking brothers and his family, as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods, legend has it that he was a direct descendant of Odin, the god of war and warriors.',
      status: 'Continuing',
      type: 'television',
      tvrage: {link: 'http://www.tvrage.com/shows/id-31136'},
      banners: [{
        _id: '58ae623ba60ffc476d16ca65',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-1960617299-7279759412-3395033926-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-1960617299-7279759412-3395033926-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-1960617299-7279759412-3395033926-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-1960617299-7279759412-3395033926-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca64',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8472716366-6753899338-6962043112-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8472716366-6753899338-6962043112-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8472716366-6753899338-6962043112-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8472716366-6753899338-6962043112-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca63',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-6910333996-6944822613-4985892652-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-6910333996-6944822613-4985892652-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-6910333996-6944822613-4985892652-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-6910333996-6944822613-4985892652-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca62',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4626042317-2776870085-6021179012-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4626042317-2776870085-6021179012-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4626042317-2776870085-6021179012-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4626042317-2776870085-6021179012-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca61',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4973139283-3425414134-7580616222-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4973139283-3425414134-7580616222-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4973139283-3425414134-7580616222-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4973139283-3425414134-7580616222-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca60',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5371986278-4911304396-4676660020-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5371986278-4911304396-4676660020-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5371986278-4911304396-4676660020-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5371986278-4911304396-4676660020-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca5f',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-7941030198-6213314696-7477596737-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-7941030198-6213314696-7477596737-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-7941030198-6213314696-7477596737-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-7941030198-6213314696-7477596737-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca5e',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-526134233-7650767052-9143521892-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-526134233-7650767052-9143521892-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-526134233-7650767052-9143521892-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-526134233-7650767052-9143521892-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca5d',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5639083511-9957185825-3792469655-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5639083511-9957185825-3792469655-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5639083511-9957185825-3792469655-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5639083511-9957185825-3792469655-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca5c',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8106924481-7173767858-5269114990-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8106924481-7173767858-5269114990-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8106924481-7173767858-5269114990-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8106924481-7173767858-5269114990-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca5b',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-943628648-6994057610-916572968-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-943628648-6994057610-916572968-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-943628648-6994057610-916572968-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-943628648-6994057610-916572968-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca5a',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-7463616142-9582421160-3416744671-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-7463616142-9582421160-3416744671-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-7463616142-9582421160-3416744671-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-7463616142-9582421160-3416744671-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca59',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4959921534-5435995115-8531735185-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4959921534-5435995115-8531735185-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4959921534-5435995115-8531735185-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4959921534-5435995115-8531735185-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca58',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8203060324-3047243362-5713966475-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8203060324-3047243362-5713966475-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8203060324-3047243362-5713966475-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8203060324-3047243362-5713966475-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca57',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4354316117-32570363-1038516900-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4354316117-32570363-1038516900-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4354316117-32570363-1038516900-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4354316117-32570363-1038516900-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca56',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9926372435-1946715406-2619904005-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9926372435-1946715406-2619904005-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9926372435-1946715406-2619904005-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9926372435-1946715406-2619904005-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca55',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-2103808718-7077569240-9366987319-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-2103808718-7077569240-9366987319-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-2103808718-7077569240-9366987319-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-2103808718-7077569240-9366987319-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca54',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5165707711-3115489721-1255056695-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5165707711-3115489721-1255056695-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5165707711-3115489721-1255056695-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5165707711-3115489721-1255056695-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca53',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9795975717-6521480633-4817071785-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9795975717-6521480633-4817071785-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9795975717-6521480633-4817071785-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9795975717-6521480633-4817071785-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca52',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9207160952-9442997900-7995001711-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9207160952-9442997900-7995001711-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9207160952-9442997900-7995001711-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9207160952-9442997900-7995001711-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca51',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4667439009-3655344267-6151542021-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4667439009-3655344267-6151542021-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4667439009-3655344267-6151542021-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4667439009-3655344267-6151542021-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae623ba60ffc476d16ca50',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-411622697-6743165012-7939307410-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-411622697-6743165012-7939307410-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-411622697-6743165012-7939307410-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/14554-411622697-6743165012-7939307410-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }],
      channels: [{
        id: 18,
        name: 'History',
        _id: '58ae623ba60ffc476d16ca4f',
        liveStream: {android: [], ios: [], web: []},
        social: {
          twitter: {link: 'https://twitter.com/history'},
          facebook: {link: 'https://www.facebook.com/History'}
        }
      }],
      alternateTitles: []
    }, {
      _id: '58ae6236a60ffc476d16ca26',
      title: 'Stranger Things',
      tvdb: 305288,
      themoviedb: 66732,
      freebase: null,
      guideboxId: 37760,
      containerShow: 0,
      firstAired: '2016-07-15',
      imdbId: 'tt4574334',
      artwork208X117: 'http://static-api.guidebox.com/111615/thumbnails_small/37760-1674682359-208x117-show-thumbnail.jpg',
      artwork304X171: 'http://static-api.guidebox.com/111615/thumbnails_medium/37760-5441134823-304x171-show-thumbnail.jpg',
      artwork448X252: 'http://static-api.guidebox.com/111615/thumbnails_large/37760-8750890046-448x252-show-thumbnail.jpg',
      artwork608X342: 'http://static-api.guidebox.com/111615/thumbnails_xlarge/37760-6112872101-608x342-show-thumbnail.jpg',
      imdbRating: '9.0',
      imdbVotes: '264,555',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',
      tomatoUrl: 'N/A',
      __v: 1,
      network: '',
      overview: 'When a young boy disappears, his mother, a sheriff, and his friends must confront terrifying forces in order to get him back.',
      status: '',
      type: 'online',
      tvrage: {link: 'http://www.tvrage.com/shows/id-48493'},
      banners: [{
        _id: '58ae62fca60ffc476d16ca8d',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37760-7592198020-310973824-6070918720-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37760-7592198020-310973824-6070918720-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37760-7592198020-310973824-6070918720-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37760-7592198020-310973824-6070918720-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae62fca60ffc476d16ca8c',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37760-9688850068-209961469-9569401526-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37760-9688850068-209961469-9569401526-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37760-9688850068-209961469-9569401526-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37760-9688850068-209961469-9569401526-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae62fca60ffc476d16ca8b',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37760-9898202284-645032945-6413457631-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37760-9898202284-645032945-6413457631-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37760-9898202284-645032945-6413457631-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37760-9898202284-645032945-6413457631-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae62fca60ffc476d16ca8a',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37760-5830111811-7608012412-1882612286-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37760-5830111811-7608012412-1882612286-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37760-5830111811-7608012412-1882612286-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37760-5830111811-7608012412-1882612286-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }],
      channels: [{
        id: 202,
        name: 'Netflix',
        _id: '58ae62fca60ffc476d16ca89',
        liveStream: {android: [], ios: [], web: []},
        social: {twitter: {link: null}, facebook: {link: null}}
      }],
      alternateTitles: []
    }, {
      _id: '58ae6236a60ffc476d16ca2c',
      title: 'Taboo',
      tvdb: 0,
      themoviedb: 0,
      freebase: null,
      guideboxId: 36283,
      containerShow: 0,
      firstAired: '2016-09-21',
      imdbId: 'tt3647998',
      artwork208X117: 'http://static-api.guidebox.com/091716/thumbnails_small/36283-7572126402-208x117-show-thumbnail.jpg',
      artwork304X171: 'http://static-api.guidebox.com/091716/thumbnails_medium/36283-6291329586-304x171-show-thumbnail.jpg',
      artwork448X252: 'http://static-api.guidebox.com/091716/thumbnails_large/36283-2309708675-448x252-show-thumbnail.jpg',
      artwork608X342: 'http://static-api.guidebox.com/091716/thumbnails_xlarge/36283-3283443842-608x342-show-thumbnail.jpg',
      imdbRating: '9.1',
      imdbVotes: '19,608',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',
      tomatoUrl: 'N/A',
      __v: 2,
      network: '',
      overview: '',
      status: '',
      type: 'television',
      tvrage: {link: null},
      banners: [],
      channels: [{
        id: 32,
        name: 'FX',
        _id: '58ae6425a60ffc476d16cb9e',
        liveStream: {android: [], ios: [], web: []},
        social: {
          twitter: {link: 'https://twitter.com/FXNetworks'},
          facebook: {link: 'https://www.facebook.com/FX'}
        }
      }],
      alternateTitles: []
    }, {
      _id: '58ae6236a60ffc476d16ca30',
      title: 'The Night Of',
      tvdb: 310516,
      themoviedb: 66276,
      freebase: null,
      guideboxId: 37559,
      containerShow: 0,
      firstAired: '2016-07-10',
      imdbId: 'tt2401256',
      artwork208X117: 'http://static-api.guidebox.com/111615/thumbnails_small/37559-4214252103-208x117-show-thumbnail.jpg',
      artwork304X171: 'http://static-api.guidebox.com/111615/thumbnails_medium/37559-824560905-304x171-show-thumbnail.jpg',
      artwork448X252: 'http://static-api.guidebox.com/111615/thumbnails_large/37559-4327883395-448x252-show-thumbnail.jpg',
      artwork608X342: 'http://static-api.guidebox.com/111615/thumbnails_xlarge/37559-8845933992-608x342-show-thumbnail.jpg',
      imdbRating: '8.7',
      imdbVotes: '48,598',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',
      tomatoUrl: 'N/A',
      __v: 1,
      network: '',
      overview: 'After a night of partying with a female stranger, a man wakes up to find her stabbed to death and is charged with her murder.',
      status: '',
      type: 'television',
      tvrage: {link: 'http://www.tvrage.com/shows/id-52307'},
      banners: [{
        _id: '58ae64faa60ffc476d16cc4e',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37559-5620255875-817066697-7542410618-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37559-5620255875-817066697-7542410618-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37559-5620255875-817066697-7542410618-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37559-5620255875-817066697-7542410618-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }],
      channels: [{
        id: 36,
        name: 'HBO',
        _id: '58ae64faa60ffc476d16cc4d',
        liveStream: {android: [], ios: [], web: []},
        social: {twitter: {link: 'https://twitter.com/HBO'}, facebook: {link: 'https://www.facebook.com/HBO'}}
      }],
      alternateTitles: []
    }, {
      _id: '58ae6236a60ffc476d16ca29',
      title: 'Riverdale',
      tvdb: 311954,
      themoviedb: 69050,
      freebase: null,
      guideboxId: 41148,
      containerShow: 0,
      firstAired: '2017-01-26',
      imdbId: 'tt5420376',
      artwork208X117: 'http://static-api.guidebox.com/091716/thumbnails_small/41148-7488881922-208x117-show-thumbnail.jpg',
      artwork304X171: 'http://static-api.guidebox.com/091716/thumbnails_medium/41148-1596480208-304x171-show-thumbnail.jpg',
      artwork448X252: 'http://static-api.guidebox.com/091716/thumbnails_large/41148-1996065905-448x252-show-thumbnail.jpg',
      artwork608X342: 'http://static-api.guidebox.com/091716/thumbnails_xlarge/41148-4520784849-608x342-show-thumbnail.jpg',
      imdbRating: '7.6',
      imdbVotes: '2,251',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',
      tomatoUrl: 'N/A',
      __v: 1,
      network: 'The CW',
      overview: 'Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.',
      status: 'Continuing',
      type: 'television',
      tvrage: {link: null},
      banners: [{
        _id: '58ae62efa60ffc476d16ca83',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-6290304088-3309142618-9746629660-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-6290304088-3309142618-9746629660-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-6290304088-3309142618-9746629660-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-6290304088-3309142618-9746629660-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae62efa60ffc476d16ca82',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-9965135189-7764022778-3436973435-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-9965135189-7764022778-3436973435-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-9965135189-7764022778-3436973435-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-9965135189-7764022778-3436973435-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae62efa60ffc476d16ca81',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-5250163204-3751466829-3828735165-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-5250163204-3751466829-3828735165-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-5250163204-3751466829-3828735165-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-5250163204-3751466829-3828735165-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae62efa60ffc476d16ca80',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-1502073822-369870905-8115743734-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-1502073822-369870905-8115743734-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-1502073822-369870905-8115743734-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-1502073822-369870905-8115743734-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae62efa60ffc476d16ca7f',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-7146171671-5976734394-8463267623-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-7146171671-5976734394-8463267623-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-7146171671-5976734394-8463267623-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-7146171671-5976734394-8463267623-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae62efa60ffc476d16ca7e',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-5718733235-7652510791-5595542593-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-5718733235-7652510791-5595542593-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-5718733235-7652510791-5595542593-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-5718733235-7652510791-5595542593-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae62efa60ffc476d16ca7d',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-1147608688-4758210392-6198479556-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-1147608688-4758210392-6198479556-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-1147608688-4758210392-6198479556-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-1147608688-4758210392-6198479556-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae62efa60ffc476d16ca7c',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-8728456078-2554037781-3905068883-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-8728456078-2554037781-3905068883-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-8728456078-2554037781-3905068883-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-8728456078-2554037781-3905068883-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae62efa60ffc476d16ca7b',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-9189350772-7304652808-3553556134-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-9189350772-7304652808-3553556134-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-9189350772-7304652808-3553556134-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-9189350772-7304652808-3553556134-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae62efa60ffc476d16ca7a',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-4283894203-40570098-4205992497-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-4283894203-40570098-4205992497-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-4283894203-40570098-4205992497-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-4283894203-40570098-4205992497-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae62efa60ffc476d16ca79',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-4212765652-1496119597-8999052080-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-4212765652-1496119597-8999052080-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-4212765652-1496119597-8999052080-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-4212765652-1496119597-8999052080-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae62efa60ffc476d16ca78',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-1340646753-5355107267-7064401638-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-1340646753-5355107267-7064401638-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-1340646753-5355107267-7064401638-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-1340646753-5355107267-7064401638-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae62efa60ffc476d16ca77',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-6165261343-9017949462-7457719254-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-6165261343-9017949462-7457719254-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-6165261343-9017949462-7457719254-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-6165261343-9017949462-7457719254-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae62efa60ffc476d16ca76',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-4627391119-2872657790-5483517167-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-4627391119-2872657790-5483517167-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-4627391119-2872657790-5483517167-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/41148-4627391119-2872657790-5483517167-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }],
      channels: [{
        id: 6,
        name: 'CW',
        _id: '58ae62efa60ffc476d16ca75',
        liveStream: {android: [], ios: [], web: []},
        social: {
          twitter: {link: 'https://twitter.com/CW_network'},
          facebook: {link: 'https://www.facebook.com/TheCW'}
        }
      }],
      alternateTitles: []
    }, {
      _id: '58ae6236a60ffc476d16ca2e',
      title: '24: Legacy',
      tvdb: 311787,
      themoviedb: 66789,
      freebase: null,
      guideboxId: 37149,
      containerShow: 0,
      firstAired: '2016-05-16',
      imdbId: 'tt5345490',
      artwork208X117: 'http://static-api.guidebox.com/091716/thumbnails_small/37149-9686863436-208x117-show-thumbnail.jpg',
      artwork304X171: 'http://static-api.guidebox.com/091716/thumbnails_medium/37149-9818582958-304x171-show-thumbnail.jpg',
      artwork448X252: 'http://static-api.guidebox.com/091716/thumbnails_large/37149-8571070768-448x252-show-thumbnail.jpg',
      artwork608X342: 'http://static-api.guidebox.com/091716/thumbnails_xlarge/37149-4919949197-608x342-show-thumbnail.jpg',
      imdbRating: '4.4',
      imdbVotes: '285',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',
      tomatoUrl: 'N/A',
      __v: 0,
      tvrage: {link: null},
      banners: [],
      channels: [],
      alternateTitles: []
    }, {
      _id: '58ae6236a60ffc476d16ca2b',
      title: 'Game of Thrones',
      tvdb: 121361,
      themoviedb: 1399,
      freebase: '/m/0524b41',
      guideboxId: 6959,
      containerShow: 0,
      firstAired: '2011-04-17',
      imdbId: 'tt0944947',
      artwork208X117: 'http://static-api.guidebox.com/060515/thumbnails_small/6959-7755267811-208x117.jpg',
      artwork304X171: 'http://static-api.guidebox.com/060515/thumbnails_medium/6959-8255587010-304x171.jpg',
      artwork448X252: 'http://static-api.guidebox.com/060515/thumbnails_large/6959-7500693383-448x252.jpg',
      artwork608X342: 'http://static-api.guidebox.com/060515/thumbnails_xlarge/6959-423900909-608x342.jpg',
      imdbRating: '9.5',
      imdbVotes: '1,113,297',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',
      tomatoUrl: 'N/A',
      __v: 0,
      tvrage: {link: 'http://www.tvrage.com/shows/id-24493'},
      banners: [],
      channels: [],
      alternateTitles: []
    }, {
      _id: '58ae6236a60ffc476d16ca35',
      title: 'Shameless',
      tvdb: 161511,
      themoviedb: 34307,
      freebase: '/m/0dll6_j',
      guideboxId: 2627,
      containerShow: 0,
      firstAired: '2011-01-09',
      imdbId: 'tt1586680',
      artwork208X117: 'http://static-api.guidebox.com/thumbnails_small/2627-9598196931-208x117.jpg',
      artwork304X171: 'http://static-api.guidebox.com/thumbnails_medium/2627-4895202052-304x171.jpg',
      artwork448X252: 'http://static-api.guidebox.com/thumbnails_large/2627-6214707-448x252.jpg',
      artwork608X342: 'http://static-api.guidebox.com/thumbnails_xlarge/2627-5698745260-608x342.jpg',
      imdbRating: '8.7',
      imdbVotes: '111,789',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: '12',
      tomatoUrl: 'http://www.rottentomatoes.com/m/shameless-2010/',
      __v: 0,
      tvrage: {link: 'http://www.tvrage.com/shows/id-25117'},
      banners: [],
      channels: [],
      alternateTitles: ['Shameless (US)']
    }, {
      _id: '58ae6236a60ffc476d16ca2a',
      title: 'The Walking Dead',
      tvdb: 153021,
      themoviedb: 1402,
      freebase: '/m/0c3xpwy',
      guideboxId: 703,
      containerShow: 0,
      firstAired: '2010-10-31',
      imdbId: 'tt1520211',
      artwork208X117: 'http://static-api.guidebox.com/091414/thumbnails_small/703-3422100935-208x117-show-thumbnail.jpg',
      artwork304X171: 'http://static-api.guidebox.com/091414/thumbnails_medium/703-3368183603-304x171-show-thumbnail.jpg',
      artwork448X252: 'http://static-api.guidebox.com/091414/thumbnails_large/703-4248968759-448x252-show-thumbnail.jpg',
      artwork608X342: 'http://static-api.guidebox.com/091414/thumbnails_xlarge/703-7681273194-608x342-show-thumbnail.jpg',
      imdbRating: '8.5',
      imdbVotes: '677,708',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',
      tomatoUrl: 'N/A',
      __v: 1,
      network: 'AMC',
      overview: 'The world we knew is gone. An epidemic of apocalyptic proportions has swept the globe causing the dead to rise and feed on the living. In a matter of months society has crumbled. In a world ruled by the dead, we are forced to finally start living. Based on a comic book series of the same name by Robert Kirkman, this AMC project focuses on the world after a zombie apocalypse. The series follows a police officer, Rick Grimes, who wakes up from a coma to find the world ravaged with zombies. Looking for his family, he and a group of survivors attempt to battle against the zombies in order to stay alive. ',
      status: 'Continuing',
      type: 'television',
      tvrage: {link: 'http://www.tvrage.com/shows/id-25056'},
      banners: [{
        _id: '58ae633ea60ffc476d16cb99',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-7093325075-5023444425-3362115519-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-7093325075-5023444425-3362115519-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-7093325075-5023444425-3362115519-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-7093325075-5023444425-3362115519-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb98',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8967806138-7145915101-6239379891-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8967806138-7145915101-6239379891-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8967806138-7145915101-6239379891-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8967806138-7145915101-6239379891-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb97',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1651070309-6704471130-6802460062-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1651070309-6704471130-6802460062-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1651070309-6704471130-6802460062-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1651070309-6704471130-6802460062-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb96',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3822967415-7041007289-4789510793-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3822967415-7041007289-4789510793-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3822967415-7041007289-4789510793-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3822967415-7041007289-4789510793-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb95',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1278952174-8610648261-1707471134-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1278952174-8610648261-1707471134-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1278952174-8610648261-1707471134-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1278952174-8610648261-1707471134-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb94',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4299779255-3454990355-231836113-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4299779255-3454990355-231836113-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4299779255-3454990355-231836113-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4299779255-3454990355-231836113-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb93',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5658332650-1320339288-2596599278-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5658332650-1320339288-2596599278-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5658332650-1320339288-2596599278-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5658332650-1320339288-2596599278-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb92',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8276069956-5929304245-2171388381-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8276069956-5929304245-2171388381-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8276069956-5929304245-2171388381-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8276069956-5929304245-2171388381-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb91',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1912279725-7941654585-525592808-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1912279725-7941654585-525592808-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1912279725-7941654585-525592808-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1912279725-7941654585-525592808-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb90',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6901632827-6966173909-7020387407-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6901632827-6966173909-7020387407-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6901632827-6966173909-7020387407-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6901632827-6966173909-7020387407-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb8f',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8826441201-4317855453-7017877530-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8826441201-4317855453-7017877530-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8826441201-4317855453-7017877530-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8826441201-4317855453-7017877530-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb8e',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-2290559151-9453825834-8022741512-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-2290559151-9453825834-8022741512-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-2290559151-9453825834-8022741512-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-2290559151-9453825834-8022741512-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb8d',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5357853812-179617652-6979547292-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5357853812-179617652-6979547292-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5357853812-179617652-6979547292-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5357853812-179617652-6979547292-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb8c',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-440590871-5185593856-4696962060-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-440590871-5185593856-4696962060-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-440590871-5185593856-4696962060-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-440590871-5185593856-4696962060-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb8b',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-7005940531-9887832696-5990308085-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-7005940531-9887832696-5990308085-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-7005940531-9887832696-5990308085-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-7005940531-9887832696-5990308085-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb8a',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3872557161-40546293-6594875688-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3872557161-40546293-6594875688-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3872557161-40546293-6594875688-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3872557161-40546293-6594875688-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb89',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6818779930-810419918-8611665093-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6818779930-810419918-8611665093-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6818779930-810419918-8611665093-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6818779930-810419918-8611665093-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb88',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-9280418041-8142855363-6768946205-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-9280418041-8142855363-6768946205-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-9280418041-8142855363-6768946205-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-9280418041-8142855363-6768946205-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb87',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5685129547-1060957690-1248687213-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5685129547-1060957690-1248687213-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5685129547-1060957690-1248687213-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5685129547-1060957690-1248687213-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb86',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1949908031-4583803224-978279380-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1949908031-4583803224-978279380-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1949908031-4583803224-978279380-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1949908031-4583803224-978279380-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb85',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4953584550-4592794143-5596765242-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4953584550-4592794143-5596765242-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4953584550-4592794143-5596765242-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4953584550-4592794143-5596765242-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb84',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6684328425-3840440139-4827325842-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6684328425-3840440139-4827325842-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6684328425-3840440139-4827325842-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6684328425-3840440139-4827325842-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb83',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4017997347-6637315685-9145172843-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4017997347-6637315685-9145172843-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4017997347-6637315685-9145172843-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4017997347-6637315685-9145172843-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb82',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-52753496-7145802257-3690620535-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-52753496-7145802257-3690620535-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-52753496-7145802257-3690620535-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-52753496-7145802257-3690620535-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb81',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3884911561-6239822409-8513295245-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3884911561-6239822409-8513295245-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3884911561-6239822409-8513295245-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3884911561-6239822409-8513295245-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb80',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3376172003-5176704177-7670247014-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3376172003-5176704177-7670247014-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3376172003-5176704177-7670247014-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3376172003-5176704177-7670247014-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb7f',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5299708075-5216920287-856557074-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5299708075-5216920287-856557074-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5299708075-5216920287-856557074-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5299708075-5216920287-856557074-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb7e',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1517843707-637467471-4061886263-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1517843707-637467471-4061886263-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1517843707-637467471-4061886263-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1517843707-637467471-4061886263-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb7d',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8692193823-9891387531-3379604737-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8692193823-9891387531-3379604737-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8692193823-9891387531-3379604737-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8692193823-9891387531-3379604737-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb7c',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-202691462-1088222620-6465899926-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-202691462-1088222620-6465899926-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-202691462-1088222620-6465899926-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-202691462-1088222620-6465899926-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb7b',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-2319180230-5031948667-3026645333-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-2319180230-5031948667-3026645333-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-2319180230-5031948667-3026645333-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-2319180230-5031948667-3026645333-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb7a',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4407077637-4581803908-1111549009-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4407077637-4581803908-1111549009-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4407077637-4581803908-1111549009-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4407077637-4581803908-1111549009-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb79',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1383053749-6416699658-5090337847-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1383053749-6416699658-5090337847-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1383053749-6416699658-5090337847-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1383053749-6416699658-5090337847-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb78',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1114271526-5643028673-15792978-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1114271526-5643028673-15792978-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1114271526-5643028673-15792978-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-1114271526-5643028673-15792978-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb77',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6126679284-9169156006-4153797459-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6126679284-9169156006-4153797459-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6126679284-9169156006-4153797459-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6126679284-9169156006-4153797459-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb76',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6950252806-7095690039-6802681405-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6950252806-7095690039-6802681405-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6950252806-7095690039-6802681405-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6950252806-7095690039-6802681405-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb75',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-821715040-2908521798-6097054765-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-821715040-2908521798-6097054765-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-821715040-2908521798-6097054765-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-821715040-2908521798-6097054765-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb74',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6813126532-9524867390-1587691848-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6813126532-9524867390-1587691848-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6813126532-9524867390-1587691848-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6813126532-9524867390-1587691848-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb73',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5370003339-7750545735-9786560540-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5370003339-7750545735-9786560540-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5370003339-7750545735-9786560540-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5370003339-7750545735-9786560540-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb72',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-2242581621-9798152116-6027087439-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-2242581621-9798152116-6027087439-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-2242581621-9798152116-6027087439-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-2242581621-9798152116-6027087439-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb71',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3016469786-1563938647-3949748026-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3016469786-1563938647-3949748026-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3016469786-1563938647-3949748026-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3016469786-1563938647-3949748026-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb70',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4414764405-6879108716-3543519876-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4414764405-6879108716-3543519876-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4414764405-6879108716-3543519876-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4414764405-6879108716-3543519876-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb6f',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-9438953301-6590827447-1901953449-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-9438953301-6590827447-1901953449-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-9438953301-6590827447-1901953449-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-9438953301-6590827447-1901953449-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb6e',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8858420802-4311360335-2380112727-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8858420802-4311360335-2380112727-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8858420802-4311360335-2380112727-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8858420802-4311360335-2380112727-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb6d',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8793760566-8979799803-3274894119-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8793760566-8979799803-3274894119-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8793760566-8979799803-3274894119-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-8793760566-8979799803-3274894119-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb6c',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3485766193-4671984902-4619642529-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3485766193-4671984902-4619642529-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3485766193-4671984902-4619642529-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3485766193-4671984902-4619642529-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb6b',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3646064741-811972176-7333079972-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3646064741-811972176-7333079972-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3646064741-811972176-7333079972-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3646064741-811972176-7333079972-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb6a',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-7767508207-3893069639-965139107-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-7767508207-3893069639-965139107-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-7767508207-3893069639-965139107-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-7767508207-3893069639-965139107-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb69',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-977669773-7281856960-4297939716-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-977669773-7281856960-4297939716-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-977669773-7281856960-4297939716-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-977669773-7281856960-4297939716-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb68',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4316885788-6117005749-311223181-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4316885788-6117005749-311223181-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4316885788-6117005749-311223181-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4316885788-6117005749-311223181-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb67',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4290044811-2444538106-5360100619-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4290044811-2444538106-5360100619-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4290044811-2444538106-5360100619-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-4290044811-2444538106-5360100619-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb66',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5761420471-8773503713-7977658887-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5761420471-8773503713-7977658887-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5761420471-8773503713-7977658887-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5761420471-8773503713-7977658887-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb65',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6447700043-8796505052-7843546560-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6447700043-8796505052-7843546560-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6447700043-8796505052-7843546560-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-6447700043-8796505052-7843546560-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb64',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3039124455-2454750408-7336099534-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3039124455-2454750408-7336099534-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3039124455-2454750408-7336099534-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-3039124455-2454750408-7336099534-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb63',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5116510885-9401547461-7425966779-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5116510885-9401547461-7425966779-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5116510885-9401547461-7425966779-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-5116510885-9401547461-7425966779-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb62',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-9255446228-8714859732-5122036338-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-9255446228-8714859732-5122036338-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-9255446228-8714859732-5122036338-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-9255446228-8714859732-5122036338-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb61',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-329041826-4799022749-4565691240-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-329041826-4799022749-4565691240-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-329041826-4799022749-4565691240-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-329041826-4799022749-4565691240-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae633ea60ffc476d16cb60',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-7726387651-6833394938-1418477395-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-7726387651-6833394938-1418477395-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-7726387651-6833394938-1418477395-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/703-7726387651-6833394938-1418477395-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }],
      channels: [{
        id: 46,
        name: 'AMC',
        _id: '58ae633ea60ffc476d16cb5f',
        liveStream: {android: [], ios: [], web: []},
        social: {
          twitter: {link: 'https://twitter.com/AMC_TV'},
          facebook: {link: 'https://www.facebook.com/amc'}
        }
      }],
      alternateTitles: []
    }, {
      _id: '58ae6236a60ffc476d16ca25',
      title: 'This Is Us',
      tvdb: 311714,
      themoviedb: 67136,
      freebase: null,
      guideboxId: 37117,
      containerShow: 0,
      firstAired: '2016-05-15',
      imdbId: 'tt5555260',
      artwork208X117: 'http://static-api.guidebox.com/111615/thumbnails_small/37117-3013112238-208x117.jpg',
      artwork304X171: 'http://static-api.guidebox.com/111615/thumbnails_medium/37117-3751064502-304x171.jpg',
      artwork448X252: 'http://static-api.guidebox.com/111615/thumbnails_large/37117-9383674399-448x252.jpg',
      artwork608X342: 'http://static-api.guidebox.com/111615/thumbnails_xlarge/37117-1206293381-608x342.jpg',
      imdbRating: '8.9',
      imdbVotes: '19,287',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',
      tomatoUrl: 'N/A',
      __v: 1,
      network: '',
      overview: 'This refreshingly honest and provocative series follows a unique ensemble. And as their paths cross and their life stories intertwine in curious ways, we find that several of them share the same birthday - and so much more than anyone would expect.',
      status: '',
      type: 'television',
      tvrage: {link: null},
      banners: [{
        _id: '58ae642ea60ffc476d16cba4',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37117-4782745950-6458083978-4495857549-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37117-4782745950-6458083978-4495857549-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37117-4782745950-6458083978-4495857549-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37117-4782745950-6458083978-4495857549-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae642ea60ffc476d16cba3',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37117-3494971194-9365138858-9633010970-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37117-3494971194-9365138858-9633010970-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37117-3494971194-9365138858-9633010970-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/37117-3494971194-9365138858-9633010970-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }],
      channels: [{
        id: 2,
        name: 'NBC',
        _id: '58ae642ea60ffc476d16cba2',
        liveStream: {android: [], ios: [], web: []},
        social: {twitter: {link: 'https://twitter.com/nbc'}, facebook: {link: 'https://www.facebook.com/nbc'}}
      }],
      alternateTitles: []
    }, {
      _id: '58ae6236a60ffc476d16ca31',
      title: 'The Flash (2014)',
      tvdb: 279121,
      themoviedb: 60735,
      freebase: '/m/0_lnq3s',
      guideboxId: 18768,
      containerShow: 0,
      firstAired: '2014-10-07',
      imdbId: 'tt3107288',
      artwork208X117: 'http://static-api.guidebox.com/022615/thumbnails_small/18768-8167085708-208x117-show-thumbnail.jpg',
      artwork304X171: 'http://static-api.guidebox.com/022615/thumbnails_medium/18768-8800775795-304x171-show-thumbnail.jpg',
      artwork448X252: 'http://static-api.guidebox.com/022615/thumbnails_large/18768-1038890509-448x252-show-thumbnail.jpg',
      artwork608X342: 'http://static-api.guidebox.com/022615/thumbnails_xlarge/18768-4101893287-608x342-show-thumbnail.jpg',
      imdbRating: '8.1',
      imdbVotes: '206,355',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',
      tomatoUrl: 'N/A',
      __v: 0,
      tvrage: {link: 'http://www.tvrage.com/shows/id-36939'},
      banners: [],
      channels: [],
      alternateTitles: ['The Flash']
    }, {
      _id: '58ae6236a60ffc476d16ca2d',
      title: 'The 100',
      tvdb: 268592,
      themoviedb: 48866,
      freebase: '/m/0v3fvl3',
      guideboxId: 15817,
      containerShow: 0,
      firstAired: '2014-03-19',
      imdbId: 'tt2661044',
      artwork208X117: 'http://static-api.guidebox.com/091414/thumbnails_small/15817-3286543442-208x117-show-thumbnail.jpg',
      artwork304X171: 'http://static-api.guidebox.com/091414/thumbnails_medium/15817-3398139919-304x171-show-thumbnail.jpg',
      artwork448X252: 'http://static-api.guidebox.com/091414/thumbnails_large/15817-5828464203-448x252-show-thumbnail.jpg',
      artwork608X342: 'http://static-api.guidebox.com/091414/thumbnails_xlarge/15817-874794033-608x342-show-thumbnail.jpg',
      imdbRating: '7.8',
      imdbVotes: '117,952',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',
      tomatoUrl: 'N/A',
      __v: 0,
      tvrage: {link: 'http://www.tvrage.com/shows/id-34770'},
      banners: [],
      channels: [],
      alternateTitles: ['The Hundred']
    }, {
      _id: '58ae6236a60ffc476d16ca28',
      title: 'Suits',
      tvdb: 247808,
      themoviedb: 37680,
      freebase: '/m/0gg70vv',
      guideboxId: 300,
      containerShow: 0,
      firstAired: '2011-06-23',
      imdbId: 'tt1632701',
      artwork208X117: 'http://static-api.guidebox.com/091414/thumbnails_small/300-4352846579-208x117-show-thumbnail.jpg',
      artwork304X171: 'http://static-api.guidebox.com/091414/thumbnails_medium/300-2030188479-304x171-show-thumbnail.jpg',
      artwork448X252: 'http://static-api.guidebox.com/091414/thumbnails_large/300-9888987527-448x252-show-thumbnail.jpg',
      artwork608X342: 'http://static-api.guidebox.com/091414/thumbnails_xlarge/300-9276088145-608x342-show-thumbnail.jpg',
      imdbRating: '8.7',
      imdbVotes: '261,283',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',
      tomatoUrl: 'N/A',
      __v: 0,
      tvrage: {link: 'http://www.tvrage.com/shows/id-27518'},
      banners: [],
      channels: [],
      alternateTitles: []
    }, {
      _id: '58ae6236a60ffc476d16ca32',
      title: 'American Crime Story',
      tvdb: 289108,
      themoviedb: 64513,
      freebase: null,
      guideboxId: 33794,
      containerShow: 0,
      firstAired: '2015-10-08',
      imdbId: 'tt2788432',
      artwork208X117: 'http://static-api.guidebox.com/111615/thumbnails_small/33794-8542614150-208x117.jpg',
      artwork304X171: 'http://static-api.guidebox.com/111615/thumbnails_medium/33794-796479746-304x171.jpg',
      artwork448X252: 'http://static-api.guidebox.com/111615/thumbnails_large/33794-2819356793-448x252.jpg',
      artwork608X342: 'http://static-api.guidebox.com/111615/thumbnails_xlarge/33794-8955499911-608x342.jpg',
      imdbRating: '8.5',
      imdbVotes: '33,513',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',
      tomatoUrl: 'N/A',
      __v: 0,
      tvrage: {link: 'http://www.tvrage.com/shows/id-47016'},
      banners: [],
      channels: [],
      alternateTitles: []
    }, {
      _id: '58ae6236a60ffc476d16ca36',
      title: 'Arrow',
      tvdb: 257655,
      themoviedb: 1412,
      freebase: '/m/0l170__',
      guideboxId: 13015,
      containerShow: 0,
      firstAired: '2012-10-10',
      imdbId: 'tt2193021',
      artwork208X117: 'http://static-api.guidebox.com/091414/thumbnails_small/13015-8851756258-208x117-show-thumbnail.jpg',
      artwork304X171: 'http://static-api.guidebox.com/091414/thumbnails_medium/13015-7129820809-304x171-show-thumbnail.jpg',
      artwork448X252: 'http://static-api.guidebox.com/091414/thumbnails_large/13015-2719832999-448x252-show-thumbnail.jpg',
      artwork608X342: 'http://static-api.guidebox.com/091414/thumbnails_xlarge/13015-6382877868-608x342-show-thumbnail.jpg',
      imdbRating: '7.9',
      imdbVotes: '319,397',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',
      tomatoUrl: 'N/A',
      __v: 0,
      tvrage: {link: 'http://www.tvrage.com/shows/id-30715'},
      banners: [],
      channels: [],
      alternateTitles: []
    }, {
      _id: '58ae6236a60ffc476d16ca24',
      title: 'The Vampire Diaries',
      tvdb: 95491,
      themoviedb: 18165,
      freebase: '/m/05sy2k_',
      guideboxId: 137,
      containerShow: 0,
      firstAired: '2009-09-10',
      imdbId: 'tt1405406',
      artwork208X117: 'http://static-api.guidebox.com/060515/thumbnails_small/137-9956356305-208x117-show-thumbnail.jpg',
      artwork304X171: 'http://static-api.guidebox.com/060515/thumbnails_medium/137-6253161197-304x171-show-thumbnail.jpg',
      artwork448X252: 'http://static-api.guidebox.com/060515/thumbnails_large/137-5186451897-448x252-show-thumbnail.jpg',
      artwork608X342: 'http://static-api.guidebox.com/060515/thumbnails_xlarge/137-1785443691-608x342-show-thumbnail.jpg',
      imdbRating: '7.8',
      imdbVotes: '227,814',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',
      tomatoUrl: 'N/A',
      __v: 0,
      tvrage: {link: 'http://www.tvrage.com/shows/id-21766'},
      banners: [],
      channels: [],
      alternateTitles: ['Vampire Diaries']
    }, {
      _id: '58ae6236a60ffc476d16ca27',
      title: 'Black Mirror',
      tvdb: 253463,
      themoviedb: 42009,
      freebase: '/m/0hhs506',
      guideboxId: 25662,
      containerShow: 0,
      firstAired: '2011-12-04',
      imdbId: 'tt2085059',
      artwork208X117: 'http://static-api.guidebox.com/060515/thumbnails_small/25662-3944110372-208x117.jpg',
      artwork304X171: 'http://static-api.guidebox.com/060515/thumbnails_medium/25662-1403832534-304x171.jpg',
      artwork448X252: 'http://static-api.guidebox.com/060515/thumbnails_large/25662-1440050262-448x252.jpg',
      artwork608X342: 'http://static-api.guidebox.com/060515/thumbnails_xlarge/25662-2100634184-608x342.jpg',
      imdbRating: '8.9',
      imdbVotes: '110,892',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',
      tomatoUrl: 'N/A',
      __v: 0,
      tvrage: {link: 'http://www.tvrage.com/shows/id-30348'},
      banners: [],
      channels: [],
      alternateTitles: []
    }, {
      _id: '58ae6236a60ffc476d16ca34',
      title: 'Westworld',
      tvdb: 296762,
      themoviedb: 63247,
      freebase: null,
      guideboxId: 38948,
      containerShow: 0,
      firstAired: '2016-10-02',
      imdbId: 'tt0475784',
      artwork208X117: 'http://static-api.guidebox.com/091716/thumbnails_small/38948-4959284808-208x117.jpg',
      artwork304X171: 'http://static-api.guidebox.com/091716/thumbnails_medium/38948-5728639164-304x171.jpg',
      artwork448X252: 'http://static-api.guidebox.com/091716/thumbnails_large/38948-1003983417-448x252.jpg',
      artwork608X342: 'http://static-api.guidebox.com/091716/thumbnails_xlarge/38948-7817636546-608x342.jpg',
      imdbRating: '9.1',
      imdbVotes: '144,819',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: '82',
      tomatoUserRating: '3.8',
      tomatoUserReviews: '566',
      tomatoUrl: 'http://www.rottentomatoes.com/m/westworld-2009/',
      __v: 1,
      network: '',
      overview: 'Westworld is a dark odyssey about the dawn of artificial consciousness and the evolution of sin. Set at the intersection of the near future and the reimagined past, it explores a world in which every human appetite, no matter how noble or depraved, can be indulged.',
      status: '',
      type: 'television',
      tvrage: {link: 'http://www.tvrage.com/shows/id-37537'},
      banners: [{
        _id: '58ae643aa60ffc476d16cbba',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-5403221603-9480433254-2746298379-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-5403221603-9480433254-2746298379-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-5403221603-9480433254-2746298379-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-5403221603-9480433254-2746298379-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae643aa60ffc476d16cbb9',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-9047831320-6584255909-44712862-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-9047831320-6584255909-44712862-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-9047831320-6584255909-44712862-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-9047831320-6584255909-44712862-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae643aa60ffc476d16cbb8',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-9041656246-4614491635-6220048535-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-9041656246-4614491635-6220048535-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-9041656246-4614491635-6220048535-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-9041656246-4614491635-6220048535-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae643aa60ffc476d16cbb7',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-9196687163-6059971978-8664162424-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-9196687163-6059971978-8664162424-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-9196687163-6059971978-8664162424-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-9196687163-6059971978-8664162424-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae643aa60ffc476d16cbb6',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-2917230292-4417963284-8570373612-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-2917230292-4417963284-8570373612-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-2917230292-4417963284-8570373612-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-2917230292-4417963284-8570373612-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae643aa60ffc476d16cbb5',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-4616175457-997430287-7128268899-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-4616175457-997430287-7128268899-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-4616175457-997430287-7128268899-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-4616175457-997430287-7128268899-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae643aa60ffc476d16cbb4',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-9859531936-7900737193-2322930121-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-9859531936-7900737193-2322930121-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-9859531936-7900737193-2322930121-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-9859531936-7900737193-2322930121-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae643aa60ffc476d16cbb3',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-1677120249-5214907252-4665405573-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-1677120249-5214907252-4665405573-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-1677120249-5214907252-4665405573-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-1677120249-5214907252-4665405573-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae643aa60ffc476d16cbb2',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-7244543019-483844853-7769687320-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-7244543019-483844853-7769687320-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-7244543019-483844853-7769687320-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-7244543019-483844853-7769687320-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }, {
        _id: '58ae643aa60ffc476d16cbb1',
        small: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-3210179764-7984295985-5899107498-551x102.jpg',
          width: 551,
          height: 102
        },
        medium: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-3210179764-7984295985-5899107498-756x140.jpg',
          width: 756,
          height: 140
        },
        large: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-3210179764-7984295985-5899107498-1000x185.jpg',
          width: 1000,
          height: 185
        },
        xlarge: {
          url: 'http://static-api.guidebox.com/012915/shows/banners/38948-3210179764-7984295985-5899107498-1300x240.jpg',
          width: 1300,
          height: 240
        }
      }],
      channels: [{
        id: 36,
        name: 'HBO',
        _id: '58ae643aa60ffc476d16cbb0',
        liveStream: {android: [], ios: [], web: []},
        social: {twitter: {link: 'https://twitter.com/HBO'}, facebook: {link: 'https://www.facebook.com/HBO'}}
      }],
      alternateTitles: []
    }, {
      _id: '58ae6236a60ffc476d16ca33',
      title: 'Supernatural',
      tvdb: 78901,
      themoviedb: 1622,
      freebase: '/m/06s3sm',
      guideboxId: 134,
      containerShow: 0,
      firstAired: '2005-09-13',
      imdbId: 'tt0460681',
      artwork208X117: 'http://static-api.guidebox.com/060515/thumbnails_small/134-9455498186-208x117-show-thumbnail.jpg',
      artwork304X171: 'http://static-api.guidebox.com/060515/thumbnails_medium/134-3621342373-304x171-show-thumbnail.jpg',
      artwork448X252: 'http://static-api.guidebox.com/060515/thumbnails_large/134-9313713549-448x252-show-thumbnail.jpg',
      artwork608X342: 'http://static-api.guidebox.com/060515/thumbnails_xlarge/134-8590047601-608x342-show-thumbnail.jpg',
      imdbRating: '8.6',
      imdbVotes: '297,680',
      tomatoMeter: 'N/A',
      tomatoImage: 'N/A',
      tomatoRating: 'N/A',
      tomatoReviews: 'N/A',
      tomatoFresh: 'N/A',
      tomatoRotten: 'N/A',
      tomatoConsensus: 'N/A',
      tomatoUserMeter: 'N/A',
      tomatoUserRating: 'N/A',
      tomatoUserReviews: 'N/A',
      tomatoUrl: 'N/A',
      __v: 0,
      tvrage: {link: 'http://www.tvrage.com/shows/id-5410'},
      banners: [],
      channels: [],
      alternateTitles: []
    }], totalResults: 21586
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, $state,
                             socket, movieService) {
    $httpBackend = _$httpBackend_;
    scope = $rootScope.$new();
    state = $state;
    stateparams = {page: 1};
    showsComponent = $componentController('shows', {
      $http,
      $scope: scope,
      socket,
      movieService,
      $stateParams: stateparams
    });
  }));

  it('should handle errors', () => {
    $httpBackend.expectGET('/api/shows/all/0/20/all/all')
      .respond(500);
    showsComponent.$onInit();
    expect(showsComponent.shows).to.have.lengthOf(0);
    expect(showsComponent.pagination.current).to.equal(1);
  });

  it('should attach a list of shows to the controller', () => {
    $httpBackend.expectGET('/api/shows/all/0/20/all/all')
      .respond(mockShowsPg1);
    state.expectTransitionTo('show');
    showsComponent.$onInit();
    $httpBackend.flush();
    state.expectTransitionTo('show/1');
    expect(showsComponent.shows).to.have.lengthOf(20);
    expect(showsComponent.pagination.current).to.equal(1);
  });
});
