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
        })
          .then(user => {
            let watchlist = new Watchlist({name: 'Watchlist', user});
            watchlist.save()
              .then(function() {
                console.log('finished adding users');
              })
              .catch(err => {
                console.error(err);
              });
          });
      });
  });

Movie.find({}).remove()
  .then(() => {
    // Movie.create({
    //   guideboxID: 135934,
    //   title: 'The Secret Life of Pets (PREV)',
    //   releaseYear: 2016,
    //   themoviedb: 328111,
    //   originalTitle: 'The Secret Life of Pets',
    //   imdb: 'tt2709768',
    //   preOrder: false,
    //   inTheaters: false,
    //   releaseDate: '2016-06-18T00:00:00.000Z',
    //   rating: 'PG',
    //   rottentomatoes: 771350404,
    //   imdbRating: '6.7',
    //   imdbVotes: '61,174',
    //   tomatoMeter: '75',
    //   tomatoImage: 'certified',
    //   tomatoRating: '6.2',
    //   tomatoReviews: '182',
    //   tomatoFresh: '136',
    //   tomatoRotten: '46',
    //   tomatoConsensus: 'Fast-paced, funny, and blessed with a talented voice cast, The Secret Life of Pets offers a beautifully animated, cheerfully undemanding family-friendly diversion.',
    //   tomatoUserMeter: '64',
    //   tomatoUserRating: '3.6',
    //   tomatoUserReviews: '72215',
    //   tomatoUrl: 'http://www.rottentomatoes.com/m/the_secret_life_of_pets/',
    //   freebase: '/m/0115c2x3',
    //   wikipediaID: 0,
    //   metacritic: 'http://www.metacritic.com/movie/the-secret-life-of-pets',
    //   commonSenseMedia: 'https://www.commonsensemedia.org/movie-reviews/the-secret-life-of-pets',
    //   poster120x171: 'http://static-api.guidebox.com/111615/thumbnails_movies_small/135934-4899214818-5922744279-7832598574-small-120x171.jpg',
    //   poster240x342: 'http://static-api.guidebox.com/111615/thumbnails_movies_medium/135934-9328956585-2486498822-7960745487-medium-240x342.jpg',
    //   poster400x570: 'http://static-api.guidebox.com/111615/thumbnails_movies/135934-3318135408-2648539446-1696869368-large-400x570.jpg'
    // });
    console.log('finished removing movies');
  });

Watchlist.find({}).remove()
  .then(() => {
    console.log('finished removing watchlists');
  });
