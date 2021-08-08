#!/bin/bash

rm -rf ./dist

mkdir ./dist
mkdir ./dist/subapp

cp -r ./sub-react/build/ ./dist/subapp/sub-react/
cp -r ./sub-vue/dist/ ./dist/subapp/sub-vue/

cp -r ./main/dist/ ./dist/main/

# cd ./dist
# zip -r mp$(date +%Y%m%d%H%M%S).zip *
# cd ..
echo 'bundle.sh execute success.'
