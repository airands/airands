<img src="https://github.com/airands/airands/blob/master/assets/banner/banner.png" alt="">

## Setup

1. Install docker & docker-compose

```bash
cd server
docker-compose up --build

# Separate terminal
docker-compose run web bundle exec rake db:setup
```
