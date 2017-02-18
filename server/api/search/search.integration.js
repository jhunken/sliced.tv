// 'use strict';
//
// var app = require('../..');
// import User from '../user/user.model';
// import request from 'supertest';
//
// var newSearch;
//
// describe('Search API:', function() {
//   var user;
//
//   // Cleanup users before testing
//   before(function() {
//     return User.remove().then(function() {
//       user = new User({
//         name: 'Fake User',
//         email: 'test@example.com',
//         password: 'password'
//       });
//       return user.save();
//     });
//   });
//
//   // Clears movies and users after testing
//   after(function() {
//     return User.remove();
//   });
//
//
//   describe('GET /api/search', function() {
//     var token;
//
//     before(function(done) {
//       // Get authenticated user token
//       request(app)
//         .post('/auth/local')
//         .send({
//           email: 'test@example.com',
//           password: 'password'
//         })
//         .expect(200)
//         .expect('Content-Type', /json/)
//         .end((err, res) => {
//           if(err) {
//             done(err);
//           }
//           token = res.body.token;
//           done();
//         });
//     });
//
//     it('should respond with JSON array when authenticated', function(done) {
//       var results;
//       request(app)
//         .get('/api/search/movies/batman')
//         .set('authorization', `Bearer ${token}`)
//         .expect(200)
//         .expect('Content-Type', /json/)
//         .end((err, res) => {
//           if(err) {
//             done(err);
//           }
//           results = res.body.results;
//           expect(results).to.be.instanceOf(Array);
//           done();
//         });
//     });
//   });
// });
