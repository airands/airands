FROM ruby:2.7.1-alpine

RUN apk update && apk add build-base nodejs postgresql-dev postgresql-client tzdata git vim

ENV ENV="/root/.ashrc"
RUN echo "echo 'alias vi='vim''" > "$ENV"
RUN echo "echo 'alias ll='ls -l''" > "$ENV"
RUN echo "echo 'export EDITOR='vim''" > "$ENV"

RUN mkdir /airand
WORKDIR /airand

COPY Gemfile Gemfile.lock ./
RUN gem install bundler
RUN bundle install

COPY . .

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
