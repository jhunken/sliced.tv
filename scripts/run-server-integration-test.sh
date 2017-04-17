#!/usr/bin/env bash
NODE_ENV=test ./node_modules/.bin/nyc --reporter=lcov --reporter=html --report-dir=coverage/server/integration -x 'server/**/*.integration.js' ./node_modules/.bin/_mocha -- mocha.conf.js 'server/**/*.integration.js' 'mocha.global.js'
