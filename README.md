[![CircleCI](https://circleci.com/gh/jhunken/sliced.tv.svg?style=svg&circle-token=b8f3d32891a3cd47d8e77921057a7e3399ac2255)](https://circleci.com/gh/jhunken/sliced.tv)[![codecov](https://codecov.io/gh/jhunken/sliced.tv/branch/develop/graph/badge.svg)](https://codecov.io/gh/jhunken/sliced.tv)[![Code Climate](https://codeclimate.com/github/jhunken/sliced.tv/badges/gpa.svg)](https://codeclimate.com/github/jhunken/sliced.tv)
# sliced-tv

[![Greenkeeper badge](https://badges.greenkeeper.io/jhunken/sliced.tv.svg)](https://greenkeeper.io/)

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org)
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

3. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `gulp build` for building and `gulp serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
