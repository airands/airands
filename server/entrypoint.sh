#!/bin/sh

rake db:setup
rake db:migrate

rm ./tmp/pids/server.pid

bundle exec rails server -b 0.0.0.0
