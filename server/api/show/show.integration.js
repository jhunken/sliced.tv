'use strict';

import app from '../..';
import Show from './show.model';
import request from 'supertest';

describe('Show API:', function() {
  // Cleanup shows before testing
  before(function() {
    return Show.remove();
  });

  // Clears shows after testing
  after(function() {
    return Show.remove();
  });

  // describe('GET /api/shows', function() {
  //   it('should respond with an array of shows', done => {
  //     let shows;
  //     request(app)
  //       .get('/api/shows')
  //       .expect(200)
  //       .expect('Content-Type', /json/)
  //       .end((err, res) => {
  //         if(err) {
  //           done(err);
  //         }
  //         shows = res.body.results;
  //         expect(shows).to.be.instanceOf(Array);
  //         done();
  //       });
  //   });
  //
  //   it('should respond with an array of shows using params', function(done) {
  //     let shows;
  //     request(app)
  //       .get('/api/shows/all/50/10/all/all')
  //       .expect(200)
  //       .expect('Content-Type', /json/)
  //       .end((err, res) => {
  //         if(err) {
  //           done(err);
  //         }
  //         shows = res.body.results;
  //         expect(shows).to.be.instanceOf(Array);
  //         expect(shows.length).to.equal(10);
  //         done();
  //       });
  //   });
  //
  //   it('should respond with a 500 when "start" param is incorrect', function(done) {
  //     request(app)
  //       .get('/api/shows/all/999999999/10/all/all')
  //       .expect(500)
  //       .end(done);
  //   });
  //
  //   it('should respond with a 500 when using invalid params', function(done) {
  //     request(app)
  //       .get('/api/shows/all/invalid/invalid/invalid/invalid')
  //       .expect(500)
  //       .end(done);
  //   });
  //
  //
  //   it('should properly handle a mixture of new and previously saved shows', function(done) {
  //     // Create newMovie
  //     let previouslySavedShow = new Show({
  //       overview: 'Vikings follows the adventures of Ragnar Lothbrok the greatest hero of his age. The series tells the sagas of Ragnar\'s band of Viking brothers and his family, as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods, legend has it that he was a direct descendant of Odin, the god of war and warriors.',
  //       network: 'History',
  //       type: 'television',
  //       status: 'Continuing',
  //       _id: '58ae84dab7ca764bfc370801',
  //       title: 'Vikings',
  //       tvdb: 260449,
  //       themoviedb: 44217,
  //       freebase: '/m/0k3lwy1',
  //       guideboxId: 14554,
  //       containerShow: 0,
  //       firstAired: '2013-03-03',
  //       imdbId: 'tt2306299',
  //       artwork208X117: 'http://static-api.guidebox.com/120214/thumbnails_small/14554-3064087210-208x117-show-thumbnail.jpg',
  //       artwork304X171: 'http://static-api.guidebox.com/120214/thumbnails_medium/14554-6577064837-304x171-show-thumbnail.jpg',
  //       artwork448X252: 'http://static-api.guidebox.com/120214/thumbnails_large/14554-6113301255-448x252-show-thumbnail.jpg',
  //       artwork608X342: 'http://static-api.guidebox.com/120214/thumbnails_xlarge/14554-1164331185-608x342-show-thumbnail.jpg',
  //       imdbRating: '8.6',
  //       imdbVotes: '220,558',
  //       tomatoMeter: 'N/A',
  //       tomatoImage: 'N/A',
  //       tomatoRating: 'N/A',
  //       tomatoReviews: 'N/A',
  //       tomatoFresh: 'N/A',
  //       tomatoRotten: 'N/A',
  //       tomatoConsensus: 'N/A',
  //       tomatoUserMeter: 'N/A',
  //       tomatoUserRating: 'N/A',
  //       tomatoUserReviews: 'N/A',
  //       tomatoUrl: 'N/A',
  //       __v: 1,
  //       tvrage: {link: 'http://www.tvrage.com/shows/id-31136'},
  //       banners: [{
  //         _id: '58ae84ddb7ca764bfc370840',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-1960617299-7279759412-3395033926-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-1960617299-7279759412-3395033926-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-1960617299-7279759412-3395033926-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-1960617299-7279759412-3395033926-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc37083f',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8472716366-6753899338-6962043112-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8472716366-6753899338-6962043112-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8472716366-6753899338-6962043112-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8472716366-6753899338-6962043112-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc37083e',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-6910333996-6944822613-4985892652-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-6910333996-6944822613-4985892652-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-6910333996-6944822613-4985892652-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-6910333996-6944822613-4985892652-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc37083d',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4626042317-2776870085-6021179012-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4626042317-2776870085-6021179012-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4626042317-2776870085-6021179012-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4626042317-2776870085-6021179012-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc37083c',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4973139283-3425414134-7580616222-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4973139283-3425414134-7580616222-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4973139283-3425414134-7580616222-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4973139283-3425414134-7580616222-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc37083b',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5371986278-4911304396-4676660020-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5371986278-4911304396-4676660020-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5371986278-4911304396-4676660020-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5371986278-4911304396-4676660020-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc37083a',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-7941030198-6213314696-7477596737-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-7941030198-6213314696-7477596737-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-7941030198-6213314696-7477596737-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-7941030198-6213314696-7477596737-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc370839',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-526134233-7650767052-9143521892-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-526134233-7650767052-9143521892-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-526134233-7650767052-9143521892-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-526134233-7650767052-9143521892-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc370838',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5639083511-9957185825-3792469655-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5639083511-9957185825-3792469655-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5639083511-9957185825-3792469655-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5639083511-9957185825-3792469655-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc370837',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8106924481-7173767858-5269114990-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8106924481-7173767858-5269114990-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8106924481-7173767858-5269114990-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8106924481-7173767858-5269114990-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc370836',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-943628648-6994057610-916572968-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-943628648-6994057610-916572968-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-943628648-6994057610-916572968-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-943628648-6994057610-916572968-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc370835',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-7463616142-9582421160-3416744671-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-7463616142-9582421160-3416744671-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-7463616142-9582421160-3416744671-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-7463616142-9582421160-3416744671-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc370834',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4959921534-5435995115-8531735185-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4959921534-5435995115-8531735185-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4959921534-5435995115-8531735185-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4959921534-5435995115-8531735185-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc370833',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8203060324-3047243362-5713966475-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8203060324-3047243362-5713966475-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8203060324-3047243362-5713966475-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-8203060324-3047243362-5713966475-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc370832',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4354316117-32570363-1038516900-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4354316117-32570363-1038516900-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4354316117-32570363-1038516900-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4354316117-32570363-1038516900-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc370831',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9926372435-1946715406-2619904005-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9926372435-1946715406-2619904005-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9926372435-1946715406-2619904005-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9926372435-1946715406-2619904005-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc370830',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-2103808718-7077569240-9366987319-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-2103808718-7077569240-9366987319-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-2103808718-7077569240-9366987319-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-2103808718-7077569240-9366987319-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc37082f',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5165707711-3115489721-1255056695-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5165707711-3115489721-1255056695-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5165707711-3115489721-1255056695-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-5165707711-3115489721-1255056695-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc37082e',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9795975717-6521480633-4817071785-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9795975717-6521480633-4817071785-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9795975717-6521480633-4817071785-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9795975717-6521480633-4817071785-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc37082d',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9207160952-9442997900-7995001711-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9207160952-9442997900-7995001711-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9207160952-9442997900-7995001711-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-9207160952-9442997900-7995001711-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc37082c',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4667439009-3655344267-6151542021-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4667439009-3655344267-6151542021-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4667439009-3655344267-6151542021-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-4667439009-3655344267-6151542021-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }, {
  //         _id: '58ae84ddb7ca764bfc37082b',
  //         small: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-411622697-6743165012-7939307410-551x102.jpg',
  //           width: 551,
  //           height: 102
  //         },
  //         medium: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-411622697-6743165012-7939307410-756x140.jpg',
  //           width: 756,
  //           height: 140
  //         },
  //         large: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-411622697-6743165012-7939307410-1000x185.jpg',
  //           width: 1000,
  //           height: 185
  //         },
  //         xlarge: {
  //           url: 'http://static-api.guidebox.com/012915/shows/banners/14554-411622697-6743165012-7939307410-1300x240.jpg',
  //           width: 1300,
  //           height: 240
  //         }
  //       }],
  //       channels: [{
  //         id: 18,
  //         name: 'History',
  //         _id: '58ae84ddb7ca764bfc37082a',
  //         liveStream: {android: [], ios: [], web: []},
  //         social: {
  //           twitter: {link: 'https://twitter.com/history'},
  //           facebook: {link: 'https://www.facebook.com/History'}
  //         }
  //       }],
  //       alternateTitles: []
  //     });
  //     previouslySavedShow.save().then(function() {
  //       let shows;
  //       let foundPreviouslySavedShow = false;
  //       request(app)
  //         .get('/api/shows/all/99/10/all/all')
  //         .expect(200)
  //         .expect('Content-Type', /json/)
  //         .end((err, res) => {
  //           if(err) {
  //             done(err);
  //           }
  //           shows = res.body.results;
  //           expect(shows).to.be.instanceOf(Array);
  //           expect(shows.length).to.equal(10);
  //           for(let show of shows) {
  //             if(show.title === previouslySavedShow.title) {
  //               foundPreviouslySavedShow = true;
  //             }
  //           }
  //           expect(foundPreviouslySavedShow).to.be.true;
  //           done();
  //         });
  //     });
  //   });
  // });
  //
  // describe('GET /api/shows/:id', function() {
  //   let show;
  //   let newShow;
  //
  //   before(done => {
  //     // Create newShow
  //     show = new Show({
  //       title: 'Fake Show',
  //       guideboxID: '123456789',
  //       overview: 'This is an overview'
  //     });
  //     show.save().then(function(savedShow) {
  //       newShow = savedShow;
  //       done();
  //     });
  //   });
  //
  //   // Clears shows after testing
  //   after(function(done) {
  //     return Show.remove().then(function() {
  //       done();
  //     });
  //   });
  //
  //   it('should respond with the requested show', function(done) {
  //     request(app)
  //       .get(`/api/movies/${newShow.id}`)
  //       .expect(200)
  //       .expect('Content-Type', /json/)
  //       .end((err, res) => {
  //         if(err) {
  //           done(err);
  //         }
  //         show = res.body;
  //         expect(show.title).to.equal('Fake Show');
  //         expect(show.guideboxID).to.equal(show.guideboxID);
  //         done();
  //       });
  //   });
  //
  //   it('should respond with an error if show is not found', function(done) {
  //     request(app)
  //       .get('/api/shows/0000813f7b83032d4dbb1000')
  //       .expect(404)
  //       .end(err => {
  //         if(err) {
  //           return done(err);
  //         }
  //         done();
  //       });
  //   });
  //
  //   it('should respond with an error if an invalid show guideboxID is used', function(done) {
  //     request(app)
  //       .get('/api/shows/ABCDEFGH')
  //       .expect(400)
  //       .end(err => {
  //         if(err) {
  //           return done(err);
  //         }
  //         done();
  //       });
  //   });
  // });
})
;
