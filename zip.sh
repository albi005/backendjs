#!/bin/sh
set -eu
cd "$(dirname "$0")"
zip -qFSr backendjs.zip \
    index.js \
    package.json \
    package-lock.json \
    mockData.js \
    util.js \
    route \
    middleware \
    views \
    static
