const path = require("path");
const AwsSamPlugin = require("aws-sam-webpack-plugin");

const awsSamPlugin = new AwsSamPlugin();

module.exports = {
  entry: () => awsSamPlugin.entry(),
  output: {
    filename: (chunkData) => awsSamPlugin.filename(chunkData),
    libraryTarget: "commonjs2",
    path: path.resolve("."),
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  target: "node",
  mode: "production",
  plugins: [awsSamPlugin],
};
