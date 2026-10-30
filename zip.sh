#!/bin/sh
set -eu
cd "$(dirname "$0")"
zip -FSr backendjs.zip \
    index.js \
    package.json \
    package-lock.json \
    mockData.js \
    util.js \
    route \
    middleware \
    views \
    static
