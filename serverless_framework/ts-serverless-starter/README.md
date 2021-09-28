# Serverless AWS TypeScript Project Example

A minimal project setup for AWS lambda and typescript. I found the [aws-nodejs-typescript](https://github.com/serverless/serverless/tree/master/lib/plugins/create/templates/aws-nodejs-typescript) template to be a bit hectic and too dissimilar from regular serverless project templates. This project has `serverless-webpack` and `serverless-offline` plugins setup as well.

- `npm run local` -> run lambdas locally on port 3000
- `npm run deploy` -> deploy to AWS
- `npm run remove` -> cleanup deployed resources

## How the bundling works

`webpack` and `serverless-webpack` is used to bundle the code for the lambdas. `ts-loader` uses `tsc` to compile the files before webpack loads them. Webpack needs to be configured to use `ts-loader` for files with the `.ts` extension (see `webpack.config.js`). The webpack config also has additional config required for individually packaging the lambda code.

Only the dependencies used by the lambda functions are included in the deployment package, this is what we get for free by using `webpack`. For example, `axios` is not included in the `index` lambda deployment package as there's no import references in the code. This means we can have one `node_modules` folder locally but only have the required code in production.

NOTE: JavaScript files have to be included as well (incude `.js` in extensions in the webpack conf as well as `AllowJs` option to true in TS conf) for npm dependencies to work properly.

## Useful links

- [TypeScript Webpack setup](https://webpack.js.org/guides/typescript/)
- [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack#readme)
- [serverless-offline](https://github.com/dherault/serverless-offline)
- [aws lambda typings](https://www.npmjs.com/package/@types/aws-lambda)
