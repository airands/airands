<img src="https://github.com/airands/airands-assets/blob/master/1x/name-banner-green%401x.png" alt="">

## Setup

### 0. Add host or dns entries for dev servers
- Host Entry
```bash
sudo vi /etc/hosts

# /etc/hosts
127.0.0.1 localhost dev1.airands.ca dev2.airands.ca
```
- DNS Entry (dnsmasq)
Required if connecting devices other than your main workstation
```bash
sudo vi /etc/dnsmasq.conf

# /etc/dnsmasq.conf
address=/dev1.airands.ca/<HOST_IP>
address=/dev2.airands.ca/<HOST_IP>
```

### 1. Install docker & docker-compose

### 2. Set `CLIENT_PROXY` & `API_PROXY` environment variables

```bash
vi server/.env

# .env
CLIENT_PROXY=<HOST_IP>:8100 # client dev server
API_PROXY=<HOST_IP>:3000    # rails api server
```

### 3. Start nginx, rails & postgres containers

```bash
cd server
docker-compose up --build
```

### 4. **[New Terminal]** Start webpack dev server

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
