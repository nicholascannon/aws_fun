const slsw = require('serverless-webpack');

module.exports = {
  entry: slsw.lib.entries, // required for individual packaging
  target: 'node',
  mode: 'production',
};
