#!/bin/bash

if [ ! -d $(pwd)/node_modules ]; then
  npm install
fi

if [ ! -d $(pwd)/dogbeide.github.io ]; then
  git clone git@github.com:dogbeide/dogbeide.github.io.git
fi

npm run build
cd dogbeide.github.io
cp -r ../dist/* .

git add -A
git commit -m "deploy live build"
git push
