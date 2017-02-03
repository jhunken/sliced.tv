// 'use strict';
//
// var app = require('../..');
// import request from 'supertest';
// import User from '../user/user.model';
//
//
// describe('Update API:', function() {
//   var user;
//
//   before(function() {
//     return User.remove().then(function() {
//       user = new User({
//         name: 'Fake User',
//         email: 'asdf@example.com',
//         password: 'password'
//       });
//
//       return user.save();
//     });
//   });
//
//   after(function() {
//     return User.remove();
//   });
//
//   describe('GET /api/updates/movies/new', function() {
//     var token;
//
//     before(function(done) {
//       // Get authenticated user token
//       request(app)
//         .post('/auth/local')
//         .send({
//           email: 'asdf@example.com',
//           password: 'password'
//         })
//         .expect(200)
//         .expect('Content-Type', /json/)
//         .end((err, res) => {
//           if(err) {
//             console.error(err);
//             done(err);
//           } else {
//             token = res.body.token;
//             done();
//           }
//         });
//     });
//
//     it('should respond with JSON array', function(done) {
//       var updates;
//       request(app)
//         .get('/api/updates/movies/new/1474749294?limit=100&page=1')
//         .set('authorization', `Bearer ${token}`)
//         .expect(200)
//         //.expect('Content-Type', /json/)
//         .end((err, res) => {
//           if(err) {
//             console.error(err);
//             done(err);
//           } else {
//             updates = res.body;
//             expect(updates.results).to.be.instanceOf(Array);
//             done();
//           }
//         });
//     });
//   });
// });
