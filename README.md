<img src="https://github.com/airands/airands/blob/master/assets/banner/banner.png" alt="">

## Setup

1. Install docker & docker-compose

```bash
cd server
docker-compose up --build

# Separate terminal
docker-compose run web bundle exec rake db:setup
```

## Commands

#### Get Container IDs
```bash
# Get web container id
docker ps

# Example Output
# CONTAINER ID        IMAGE                COMMAND                  CREATED             STATUS              PORTS                    NAMES
# bed34bdcf7bf        server_web           "bundle exec rails s…"   2 days ago          Up 2 days           0.0.0.0:3000->3000/tcp   server_web_1
# a89073e8b3e6        postgres:11-alpine   "docker-entrypoint.s…"   4 days ago          Up 2 days           0.0.0.0:5432->5432/tcp   server_db_1
```

#### Execute Rake/Rails commands

```bash
# Connect to interactive shell with <server_web> container id
docker exec -it bed34bdcf7bf sh
```

#### Connect to Postgres container

```bash
# Connect to postgresql with <postgres:11-alpine> container id

docker inspect a89073e8b3e6 | grep IPAddress

# Example Output
#            "SecondaryIPAddresses": null,
#            "IPAddress": "",
#                    "IPAddress": "172.21.0.2",

# Connect via 172 address
psql -U postgres -d airand_dev -h 172.21.0.2
```
