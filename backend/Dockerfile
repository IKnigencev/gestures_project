FROM ruby:3.1.1-alpine

RUN apk add --update --no-cache \
      binutils-gold \
      build-base \
      curl \
      file \
      g++ \
      gcc \
      git \
      less \
      libstdc++ \
      libffi-dev \
      libc-dev \ 
      linux-headers \
      libxml2-dev \
      libxslt-dev \
      libgcrypt-dev \
      make \
      netcat-openbsd \
      openssl \
      pkgconfig \
      postgresql-dev \
      tzdata
WORKDIR /app
COPY Gemfile /Gemfile
# COPY Gemfile.lock /Gemfile.lock
RUN gem update --system && bundle install
COPY . /

COPY docker-entrypoint.sh /


ENTRYPOINT ["/docker-entrypoint.sh"]
