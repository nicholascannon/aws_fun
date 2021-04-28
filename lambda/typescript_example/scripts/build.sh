#!/usr/bin/env bash
set -e;

echo "Building lambda function";

# note - here we install dev deps too, in prod this build script
# would be in a CI pipeline not local so we would be able to
# run `npm i --only=production`
npm i;

npm run build;

# zip deps together
zip -r function.zip dist/index.js node_modules/;