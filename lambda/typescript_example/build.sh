#!/usr/bin/env bash

echo "Building lambda function";

# note - here we install dev deps too, in prod this build script
# would be in a CI pipeline not local so we would be able to
# run `npm i --only=production`
npm i;

# zip deps together
zip function.zip dist/index.js node_modules/;