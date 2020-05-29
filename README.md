<img src="https://github.com/airands/airands-assets/blob/master/1x/name-banner-green%401x.png" alt="">

## Setup

1. Install docker & docker-compose

2. Set `CLIENT_PROXY` & `API_PROXY` environment variables

```bash
vi server/.env

# .env
CLIENT_PROXY=<HOST_IP>:8100 # client dev server
API_PROXY=<HOST_IP>:3000    # rails api server
```

3. Start nginx, rails & postgres containers

```bash
cd server
docker-compose up --build
```

4. **[New Terminal]** Start webpack dev server

```bash
cd client
yarn install
yarn start
```

## Commands

#### Connect to Rails container
Needed for running rails/rake commands
```bash
docker exec -it airands_api sh
```

#### Connect to Postgres container

```bash
docker exec -it airands_db psql -U postgres airands_dev
```
