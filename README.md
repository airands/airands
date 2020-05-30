<img src="https://github.com/airands/airands-assets/blob/master/1x/name-banner-green%401x.png" alt="">

## Setup

#### 0. Add host entries OR DNS entries for dev servers

*DNS entries are only required if you need to connect devices other than your main workstation. In which case, you'll want to install dnsmasq on your host machine and add the host machine's IP to your external devices' DNS resolver entries*

Server | Domain
--- | ---
**Client** | [dev1.airands.ca](https://dev1.airands.ca)
**API** | [dev2.airands.ca](https://dev2.airands.ca)

###### Host Entry
```bash
sudo vi /etc/hosts

# /etc/hosts
127.0.0.1 localhost dev1.airands.ca dev2.airands.ca
```
###### DNS Entry (dnsmasq)

```bash
sudo vi /etc/dnsmasq.conf

# /etc/dnsmasq.conf
address=/dev1.airands.ca/<HOST_IP>
address=/dev2.airands.ca/<HOST_IP>
```

#### 1. Install docker & docker-compose

#### 2. Set `CLIENT_PROXY` & `API_PROXY` environment variables

```bash
vi server/.env

# .env
# client dev server
CLIENT_PROXY=<HOST_IP>:8100
# rails api server
API_PROXY=<HOST_IP>:3000
```

#### 3. Start nginx, rails & postgres containers

```bash
cd server
docker-compose up --build
```

#### 4. **[New Terminal]** Start webpack dev server

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
