#!/usr/bin/env sh

# abort on errors

set -e

yarn build
cd dist

git init
git add -A
git commit -m 'deply'

git push -f git@github.com:savander/vue-todo-app.git master:gh-pages

cd -
