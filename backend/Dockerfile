FROM ruby:3.1.2


RUN apt-get update && apt-get install -y -f libssl-dev libreadline-dev wget && apt-get clean
RUN apt-get update && apt-get install -y -f postgresql postgresql-contrib libpq-dev apt-transport-https ca-certificates && apt-get clean

WORKDIR /app

ADD Gemfile /app/
COPY Gemfile ./
ADD . /app


EXPOSE 3000

ENTRYPOINT ["/docker-entrypoint.sh"]

#CMD ["sh /app/docker-entrypoint.sh"]
