const kue = require('kue');
const config = require('../config/environment');
const queue = kue.createQueue({
  redis: config.redis.url
});
const app = require('./index');
app.process();

import Movie from '../api/movie/movie.model';
let nock = require('nock');
describe('Kue: ', () => {
  before(function(done) {
    queue.client.flushdb(function(err) {
      if(err) {
        return console.error(err);
      }
      console.log('redis flushed');
      Movie.find({}).remove()
        .then(function() {
          done();
        });
    });
  });

  after(function(done) {
    queue.client.flushdb(function(err) {
      if(err) {
        return console.error(err);
      }
      console.log('redis flushed');
      Movie.find({}).remove()
        .then(function() {
          done();
        });
    });
  });

  beforeEach(function() {
    queue.client.flushdb(function(err) {
      if(err) {
        return console.error(err);
      }
      console.log('redis flushed');
    });
  });

  it('enqueues a getOMDBRatings job providing some correct data', function(done) {
    this.timeout(5000);
    let omdbCall = nock('https://www.omdbapi.com')
      .get('/?i=tt3315342&tomatoes=true&type=movies')
      .reply(200, {
        Title: 'Logan',
        Year: '2017',
        Rated: 'R',
        Released: '03 Mar 2017',
        Runtime: '137 min',
        Genre: 'Action, Drama, Sci-Fi',
        Director: 'James Mangold',
        Writer: 'James Mangold (story by), Scott Frank (screenplay), James Mangold (screenplay), Michael Green (screenplay)',
        Actors: 'Hugh Jackman, Patrick Stewart, Dafne Keen, Boyd Holbrook',
        Plot: 'In the near future, a weary Logan cares for an ailing Professor X somewhere on the Mexican border. However, Logan\'s attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.',
        Language: 'English, Spanish',
        Country: 'USA',
        Awards: 'N/A',
        Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MjkzMjczMV5BMl5BanBnXkFtZTgwNDk4NjYyMTI@._V1_SX300.jpg',
        Ratings: [{Source: 'Internet Movie Database', Value: '8.5/10'}, {
          Source: 'Rotten Tomatoes',
          Value: '92%'
        }, {Source: 'Metacritic', Value: '77/100'}],
        Metascore: '77',
        imdbRating: '8.5',
        imdbVotes: '181,361',
        imdbID: 'tt3315342',
        Type: 'movie',
        DVD: 'N/A',
        BoxOffice: '$211,775,721.00',
        Production: '20th Century Fox',
        Website: 'http://www.foxmovies.com/movies/logan',
        Response: 'True'
      });
    let mediaItem = {title: 'asdf', imdbId: 'tt3315342'};
    let job = app.addOMDBJob(mediaItem, 'movies');

    // give redis + delay enough time to process
    setTimeout(function() {
      expect(omdbCall.isDone()).to.be.true;
      expect(job.type).to.equal('getOMDBRatings');
      expect(job.data.mediaType).to.equal('movies');
      expect(job.data.mediaItem).to.eql(mediaItem);
      expect(job.data.delay).to.equal(250);
      Movie.findOne({imdbId: mediaItem.imdbId}).exec()
        .then(entity => {
          expect(entity.imdbRating).to.equal('8.5');
          done();
        })
        .catch(err => {
          console.error(err);
        });
    }, 3000);
  });
});

