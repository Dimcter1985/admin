#!/bin/sh
VERSION=$1
yarn build &&
docker build -t snailz-admin-web:v${VERSION} . &&
docker tag snailz-admin-web:v${VERSION} registry.lunatic.cat/snailznew/admin-web:v${VERSION} &&
docker push registry.lunatic.cat/snailznew/admin-web:v${VERSION}
