import nock from 'nock';
import config from './server/config/environment';
import fs from 'fs';

// Mock external http requests
nock('https://api-public.guidebox.com:443', {"encodedQueryParams" : true})
  .get('/v1.43/US/' + config.guidebox.apiKey + '/movies/all/0/25/all/all')
  .reply(200, JSON.parse(fs.readFileSync(__dirname + '/movies.mock.json')), {
    'cache-control'         : 'no-cache',
    'content-type'          : 'application/json',
    date                    : 'Sat, 06 Aug 2016 20:04:40 GMT',
    responsetime            : '3.5890538692474',
    server                  : 'nginx/1.4.6 (Ubuntu)',
    'x-ratelimit-limit'     : '240',
    'x-ratelimit-remaining' : '238',
    'content-length'        : '24097',
    connection              : 'Close'
  });

nock('https://api-public.guidebox.com:443', {"encodedQueryParams" : true})
  .get('/v1.43/US/' + config.guidebox.apiKey + '/movies/000000000')
  .reply(200, {}, {
    'cache-control'         : 'no-cache',
    'content-type'          : 'application/json',
    date                    : 'Sat, 06 Aug 2016 22:43:38 GMT',
    responsetime            : '0.06171703338623',
    server                  : 'nginx/1.4.6 (Ubuntu)',
    'x-ratelimit-limit'     : '240',
    'x-ratelimit-remaining' : '238',
    'content-length'        : '2',
    connection              : 'Close'
  });

nock('https://api-public.guidebox.com:443', {"encodedQueryParams" : true})
  .get('/v1.43/US/' + config.guidebox.apiKey + '/movies/all/50/10/all/all')
  .reply(200, {
    "total_results"  : 68951,
    "total_returned" : 10,
    "results"        : [
      {
        "id"                 : 134422,
        "title"              : "Dirty Grandpa",
        "release_year"       : 2016,
        "themoviedb"         : 291870,
        "original_title"     : "Dirty Grandpa",
        "alternate_titles"   : ["Dirty Grandpa (Unrated)", "Dirty Grandpa (Unrated Version)", "Dirty Grandpa Unrated"],
        "imdb"               : "tt1860213",
        "pre_order"          : false,
        "in_theaters"        : false,
        "release_date"       : "2016-01-21",
        "rating"             : "R",
        "rottentomatoes"     : 771388387,
        "freebase"           : "",
        "wikipedia_id"       : 0,
        "metacritic"         : "http://www.metacritic.com/movie/dirty-grandpa",
        "common_sense_media" : "https://www.commonsensemedia.org/movie-reviews/dirty-grandpa",
        "poster_120x171"     : "http://static-api.guidebox.com/111615/thumbnails_movies_small/134422-6324042329-7119411346-5142547209-small-120x171-alt-.jpg",
        "poster_240x342"     : "http://static-api.guidebox.com/111615/thumbnails_movies_medium/134422-151683060-177236004-8937469679-medium-240x342-alt-.jpg",
        "poster_400x570"     : "http://static-api.guidebox.com/111615/thumbnails_movies/-alt--134422-6996994163-7736085253-8175344849-large-400x570-alt-.jpg"
      }, {
        "id"                 : 117666,
        "title"              : "Spy",
        "release_year"       : 2015,
        "themoviedb"         : 238713,
        "original_title"     : "Spy",
        "alternate_titles"   : ["Spy (Extended)", "Spy Unrated", "Spy (Unrated)", "Spy (Unedited)", "Spy (Unrated/Extended)", "Spy (Unrated) + Bonus", "Susan Cooper"],
        "imdb"               : "tt3079380",
        "pre_order"          : false,
        "in_theaters"        : false,
        "release_date"       : "2015-05-06",
        "rating"             : "R",
        "rottentomatoes"     : 771361497,
        "freebase"           : "/m/0105j_71",
        "wikipedia_id"       : 42339834,
        "metacritic"         : "http://www.metacritic.com/movie/spy",
        "common_sense_media" : "https://www.commonsensemedia.org/movie-reviews/spy",
        "poster_120x171"     : "http://static-api.guidebox.com/060515/thumbnails_movies_small/117666-3877425715-5529150343-7973117544-small-120x171-alt-.jpg",
        "poster_240x342"     : "http://static-api.guidebox.com/060515/thumbnails_movies_medium/117666-3727384186-3819910232-6671525240-medium-240x342-alt-.jpg",
        "poster_400x570"     : "http://static-api.guidebox.com/060515/thumbnails_movies/-alt--117666-6035144837-9766240972-850906773-large-400x570-alt-.jpg"
      }, {
        "id"                 : 134353,
        "title"              : "The 5th Wave",
        "release_year"       : 2016,
        "themoviedb"         : 299687,
        "original_title"     : "The 5th Wave",
        "alternate_titles"   : ["5th Wave, The", "The 5th Wave + Bonus"],
        "imdb"               : "tt2304933",
        "pre_order"          : false,
        "in_theaters"        : false,
        "release_date"       : "2016-01-14",
        "rating"             : "PG-13",
        "rottentomatoes"     : 771385239,
        "freebase"           : "",
        "wikipedia_id"       : 0,
        "metacritic"         : "http://www.metacritic.com/movie/the-5th-wave",
        "common_sense_media" : null,
        "poster_120x171"     : "http://static-api.guidebox.com/111615/thumbnails_movies_small/134353-9329755920-9258294198-3501173393-small-120x171.jpg",
        "poster_240x342"     : "http://static-api.guidebox.com/111615/thumbnails_movies_medium/134353-9074129234-5936001525-635590060-medium-240x342.jpg",
        "poster_400x570"     : "http://static-api.guidebox.com/111615/thumbnails_movies/134353-7334112460-8427698165-3225199259-large-400x570.jpg"
      }, {
        "id"                 : 35899,
        "title"              : "Back to the Future",
        "release_year"       : 1985,
        "themoviedb"         : 105,
        "original_title"     : "Back to the Future",
        "alternate_titles"   : ["Back to the Future I", "Back to the Future Part I"],
        "imdb"               : "tt0088763",
        "pre_order"          : false,
        "in_theaters"        : false,
        "release_date"       : "1985-07-03",
        "rating"             : "PG",
        "rottentomatoes"     : 23532,
        "freebase"           : "/m/0bt4g",
        "wikipedia_id"       : 42993,
        "metacritic"         : "http://www.metacritic.com/movie/back-to-the-future",
        "common_sense_media" : null,
        "poster_120x171"     : "http://static-api.guidebox.com/thumbnails_movies_small/35899-6837106645-4376499262-8650679979-small-120x171.jpg",
        "poster_240x342"     : "http://static-api.guidebox.com/thumbnails_movies_medium/35899-1790661379-2837163895-8028762201-medium-240x342.jpg",
        "poster_400x570"     : "http://static-api.guidebox.com/thumbnails_movies/35899-7025719867-6648234203-7915630294-large-400x570.jpg"
      }, {
        "id"                 : 37865,
        "title"              : "The Godfather",
        "release_year"       : 1972,
        "themoviedb"         : 238,
        "original_title"     : "The Godfather",
        "alternate_titles"   : ["The Godfather Part I", "The Godfather Part 1", "Mario Puzo's The Godfather", "The Godfather: The Coppola Restoration", "The Godfather: Part I", "The Godfather 1", "Godfather, The"],
        "imdb"               : "tt0068646",
        "pre_order"          : false,
        "in_theaters"        : false,
        "release_date"       : "1972-03-15",
        "rating"             : "R",
        "rottentomatoes"     : 12911,
        "freebase"           : "/m/07g1sm",
        "wikipedia_id"       : 2466773,
        "metacritic"         : "http://www.metacritic.com/movie/the-godfather",
        "common_sense_media" : "https://www.commonsensemedia.org/movie-reviews/the-godfather",
        "poster_120x171"     : "http://static-api.guidebox.com/thumbnails_movies_small/37865-5865078331-1944293026-6345370244-small-120x171.jpg",
        "poster_240x342"     : "http://static-api.guidebox.com/thumbnails_movies_medium/37865-3200798915-7378647802-2076606378-medium-240x342.jpg",
        "poster_400x570"     : "http://static-api.guidebox.com/thumbnails_movies/37865-8597140349-9658132391-8695329404-large-400x570.jpg"
      }, {
        "id"                 : 134699,
        "title"              : "The Lobster",
        "release_year"       : 2015,
        "themoviedb"         : 254320,
        "original_title"     : "The Lobster",
        "alternate_titles"   : ["Lobster, The"],
        "imdb"               : "tt3464902",
        "pre_order"          : false,
        "in_theaters"        : true,
        "release_date"       : "2015-10-08",
        "rating"             : "R",
        "rottentomatoes"     : 771421928,
        "freebase"           : "",
        "wikipedia_id"       : 0,
        "metacritic"         : "http://www.metacritic.com/movie/the-lobster",
        "common_sense_media" : null,
        "poster_120x171"     : "http://static-api.guidebox.com/111615/thumbnails_movies_small/134699-7207021764-9769053738-2971170112-small-120x171.jpg",
        "poster_240x342"     : "http://static-api.guidebox.com/111615/thumbnails_movies_medium/134699-6804079348-4712296445-1661346732-medium-240x342.jpg",
        "poster_400x570"     : "http://static-api.guidebox.com/111615/thumbnails_movies/134699-4452404045-4400585154-9094730480-large-400x570.jpg"
      }, {
        "id"                 : 90453,
        "title"              : "Divergent",
        "release_year"       : 2014,
        "themoviedb"         : 157350,
        "original_title"     : "Divergent",
        "alternate_titles"   : ["Divergent  [HD]", "Divergent [HD]", "Divergent (Bonus Feature Edition)", "The Divergent Series: Divergent", "1. Divergent"],
        "imdb"               : "tt1840309",
        "pre_order"          : false,
        "in_theaters"        : false,
        "release_date"       : "2014-03-14",
        "rating"             : "PG-13",
        "rottentomatoes"     : 771315918,
        "freebase"           : "/m/0v93qv0",
        "wikipedia_id"       : 36483433,
        "metacritic"         : "http://www.metacritic.com/movie/divergent",
        "common_sense_media" : "https://www.commonsensemedia.org/movie-reviews/divergent",
        "poster_120x171"     : "http://static-api.guidebox.com/120214/thumbnails_movies_small/90453-4773042584-2609420736-8142288644-small-120x171.jpg",
        "poster_240x342"     : "http://static-api.guidebox.com/120214/thumbnails_movies_medium/90453-8722418346-8380928873-2572392831-medium-240x342.jpg",
        "poster_400x570"     : "http://static-api.guidebox.com/120214/thumbnails_movies/-90453-7049092292-8671725690-3540864592-large-400x570.jpg"
      }, {
        "id"                 : 15460,
        "title"              : "Star Trek",
        "release_year"       : 2009,
        "themoviedb"         : 13475,
        "original_title"     : "Star Trek",
        "alternate_titles"   : ["Star Trek Zero", "Star Trek XI", "Star Trek 11", "Star Trek 0 - The Future Begins", "Star Trek (2009)", "Star Trek - The Future Begins", "Star Trek XI: The Future Begins", "Star Trek XI The Future Begins", "Star Trek I", "Star Trek 11 - The Future Begins", "Star Trek (2009): Xbox SmartGlass", "Star Trek (2009) (plus bonus content)", "Star Trek (2009) + (Plus Bonus Content)"],
        "imdb"               : "tt0796366",
        "pre_order"          : false,
        "in_theaters"        : false,
        "release_date"       : "2009-05-06",
        "rating"             : "PG-13",
        "rottentomatoes"     : 770673029,
        "freebase"           : "/m/08phg9",
        "wikipedia_id"       : 3071743,
        "metacritic"         : null,
        "common_sense_media" : "https://www.commonsensemedia.org/movie-reviews/star-trek",
        "poster_120x171"     : "http://static-api.guidebox.com/thumbnails_movies_small/15460-1743845051-8488016487-701615266-small-120x171.jpg",
        "poster_240x342"     : "http://static-api.guidebox.com/thumbnails_movies_medium/15460-1167945522-2929909541-8695143005-medium-240x342.jpg",
        "poster_400x570"     : "http://static-api.guidebox.com/thumbnails_movies/15460-8710711235-6375054521-2671168456-large-400x570.jpg"
      }, {
        "id"                 : 129544,
        "title"              : "The Man from U.N.C.L.E.",
        "release_year"       : 2015,
        "themoviedb"         : 203801,
        "original_title"     : "The Man from U.N.C.L.E.",
        "alternate_titles"   : ["The Man from U.N.C.L.E. + Bonus", "Man from UNCLE, The (2015)", "The Man from U.N.C.L.E. 2015", "Man from U.N.C.L.E., The (2015)"],
        "imdb"               : "tt1638355",
        "pre_order"          : false,
        "in_theaters"        : false,
        "release_date"       : "2015-08-13",
        "rating"             : "PG-13",
        "rottentomatoes"     : 771258835,
        "freebase"           : "/m/0gy77jh",
        "wikipedia_id"       : 39436108,
        "metacritic"         : "http://www.metacritic.com/movie/the-man-from-uncle",
        "common_sense_media" : "https://www.commonsensemedia.org/movie-reviews/the-man-from-uncle",
        "poster_120x171"     : "http://static-api.guidebox.com/060515/thumbnails_movies_small/129544-810158826-4574887501-6611082740-small-120x171-alt-.jpg",
        "poster_240x342"     : "http://static-api.guidebox.com/060515/thumbnails_movies_medium/129544-842460520-1909849774-5408064299-medium-240x342-alt-.jpg",
        "poster_400x570"     : "http://static-api.guidebox.com/060515/thumbnails_movies/-alt--129544-2984774541-4013184891-1719303863-large-400x570-alt-.jpg"
      }, {
        "id"                 : 135386,
        "title"              : "Eddie the Eagle",
        "release_year"       : 2016,
        "themoviedb"         : 319888,
        "original_title"     : "Eddie the Eagle",
        "alternate_titles"   : ["Eddie The Eagle (Plus Bonus Features)"],
        "imdb"               : "tt1083452",
        "pre_order"          : false,
        "in_theaters"        : false,
        "release_date"       : "2016-02-26",
        "rating"             : "PG-13",
        "rottentomatoes"     : 771415235,
        "freebase"           : "/m/0gy21hq",
        "wikipedia_id"       : 0,
        "metacritic"         : "http://www.metacritic.com/movie/eddie-the-eagle",
        "common_sense_media" : null,
        "poster_120x171"     : "http://static-api.guidebox.com/111615/thumbnails_movies_small/135386-2401921680-4975699666-2603732739-small-120x171.jpg",
        "poster_240x342"     : "http://static-api.guidebox.com/111615/thumbnails_movies_medium/135386-3373279837-1788631259-8855556775-medium-240x342.jpg",
        "poster_400x570"     : "http://static-api.guidebox.com/111615/thumbnails_movies/135386-5106640463-3607123885-3895033137-large-400x570.jpg"
      }
    ]
  }, {
    'cache-control'         : 'no-cache',
    'content-type'          : 'application/json',
    date                    : 'Sun, 07 Aug 2016 20:16:57 GMT',
    responsetime            : '3.5054581165314',
    server                  : 'nginx/1.4.6 (Ubuntu)',
    'x-ratelimit-limit'     : '240',
    'x-ratelimit-remaining' : '238',
    'content-length'        : '9663',
    connection              : 'Close'
  });

nock('https://api-public.guidebox.com:443', {"encodedQueryParams" : true})
  .get('/v1.43/US/' + config.guidebox.apiKey + '/movies/all/0/25/invalid/invalid')
  .reply(500, {"error" : "You need to specify the content type (free, tv_everywhere, subscription, purchase or all) or a particular source (i.e. hbo or amazon_prime). You entered: {invalid}, which isn't a correct variable. Please see the API docs."}, {
    'cache-control'         : 'no-cache',
    'content-type'          : 'application/json',
    date                    : 'Sun, 07 Aug 2016 20:44:16 GMT',
    responsetime            : '0.040826082229614',
    server                  : 'nginx/1.4.6 (Ubuntu)',
    'x-ratelimit-limit'     : '240',
    'x-ratelimit-remaining' : '237',
    'content-length'        : '233',
    connection              : 'Close'
  });

nock('https://api-public.guidebox.com:443', {"encodedQueryParams":true})
  .get('/v1.43/US/' + config.guidebox.apiKey + '/movies/all/999999999/10/all/all')
  .reply(200, {"total_results":68951,"total_returned":0,"results":[]}, { 'cache-control': 'no-cache',
    'content-type': 'application/json',
    date: 'Sun, 07 Aug 2016 20:58:53 GMT',
    responsetime: '3.416916847229',
    server: 'nginx/1.4.6 (Ubuntu)',
    'x-ratelimit-limit': '240',
    'x-ratelimit-remaining': '237',
    'content-length': '55',
    connection: 'Close' });
// Used for recording network requests
//nock.recorder.rec();
