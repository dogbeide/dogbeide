#!/bin/bash

if [ ! -d $(pwd)/node_modules ]; then
  yarn install
fi

if [ ! -d $(pwd)/dogbeide.github.io ]; then
  git clone git@github.com:dogbeide/dogbeide.github.io.git
fi

yarn build
cd dogbeide.github.io
cp -r ../build/* .

git add -A
git commit -m "deploy live build"
git push
