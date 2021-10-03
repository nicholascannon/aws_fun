const path = require("path");

module.exports = {
  entry: {
    helloWorld: "./src/helloWorld.ts",
  },
  output: {
    filename: "[name].js",
    libraryTarget: "commonjs2",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  target: "node",
  mode: "production",
};
