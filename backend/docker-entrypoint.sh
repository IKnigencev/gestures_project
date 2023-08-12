#!/bin/sh

set -e

if [ -f tmp/pids/server.pid ]; then
  rm tmp/pids/server.pid
fi

#git config --global http.sslverify false
bundle check || bundle install


RAILS_ENV=development rails db:create
RAILS_ENV=development rails db:migrate
RAILS_ENV=development rails db:seed

RAILS_ENV=test rails db:migrate

RAILS_ENV=development rails s -b 0.0.0.0
