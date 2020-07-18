#!/usr/bin/env sh

echo 'DB Connection'
set -x
cd backend
node server
set +x
