/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Movie from '../api/movie/movie.model';

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'a@a.com',
      password: 'a'
    })
      .then(() => {
        console.log('finished populating users');
      });
  });

Movie.find({}).remove()
  .then(() => {
    Movie.create({
      guidebox_id: 135934,
      title: 'The Secret Life of Pets (PREV)',
      release_year: 2016,
      themoviedb: 328111,
      original_title: 'The Secret Life of Pets',
      imdb: 'tt2709768',
      pre_order: false,
      in_theaters: false,
      release_date: '2016-06-18T00:00:00.000Z',
      rating: 'PG',
      rottentomatoes: 771350404,
      imdb_rating: '6.7',
      imdb_votes: '61,174',
      tomato_meter: '75',
      tomato_image: 'certified',
      tomato_rating: '6.2',
      tomato_reviews: '182',
      tomato_fresh: '136',
      tomato_rotten: '46',
      tomato_consensus: 'Fast-paced, funny, and blessed with a talented voice cast, The Secret Life of Pets offers a beautifully animated, cheerfully undemanding family-friendly diversion.',
      tomato_user_meter: '64',
      tomato_user_rating: '3.6',
      tomato_user_reviews: '72215',
      tomato_url: 'http://www.rottentomatoes.com/m/the_secret_life_of_pets/',
      freebase: '/m/0115c2x3',
      wikipedia_id: 0,
      metacritic: 'http://www.metacritic.com/movie/the-secret-life-of-pets',
      common_sense_media: 'https://www.commonsensemedia.org/movie-reviews/the-secret-life-of-pets',
      poster_120x171: 'http://static-api.guidebox.com/111615/thumbnails_movies_small/135934-4899214818-5922744279-7832598574-small-120x171.jpg',
      poster_240x342: 'http://static-api.guidebox.com/111615/thumbnails_movies_medium/135934-9328956585-2486498822-7960745487-medium-240x342.jpg',
      poster_400x570: 'http://static-api.guidebox.com/111615/thumbnails_movies/135934-3318135408-2648539446-1696869368-large-400x570.jpg'
    });
    console.log('finished removing movies');
  });
