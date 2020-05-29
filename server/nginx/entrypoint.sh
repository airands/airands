#!/bin/sh

export CLIENT_PROXY
export API_PROXY

envsubst '${CLIENT_PROXY} ${API_PROXY}' < /dev.airands.ca.conf.template > /etc/nginx/conf.d/dev.airands.ca.conf

exec "$@"
