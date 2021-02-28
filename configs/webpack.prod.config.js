var baseConfig = require("./webpack.base");
var webpackMerge = require("webpack-merge");

module.exports = webpackMerge.merge(baseConfig, {
  entry: "./src/index.tsx",
  devtool: "source-map",
  mode: "production",
});
