# Airand

## Setup

1. Install docker & docker-compose

```bash
cd server
docker-compose up --build

# Separate terminal
docker-compose run web bundle exec rails db:create
docker-compose run web bundle exec rails db:migrate
```
