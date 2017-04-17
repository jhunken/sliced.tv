#!/usr/bin/env bash
NODE_ENV=test ./node_modules/.bin/nyc --reporter=lcov --reporter=html --report-dir=coverage/server/unit -x 'server/**/*.spec.js' ./node_modules/.bin/_mocha -- mocha.conf.js 'server/**/*.spec.js' 'mocha.global.js'
