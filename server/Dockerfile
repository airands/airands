FROM ruby:2.7.1-alpine

RUN apk update && apk add build-base nodejs postgresql-dev postgresql-client tzdata git vim

ENV ENV="/root/.ashrc"
RUN echo "alias vi=vim" >> "$ENV"
RUN echo "alias ll='ls -l'" >> "$ENV"
RUN echo "export EDITOR='vim'" >> "$ENV"

RUN mkdir /airands
WORKDIR /airands

COPY Gemfile Gemfile.lock ./
RUN gem install bundler
RUN bundle install

COPY . .
