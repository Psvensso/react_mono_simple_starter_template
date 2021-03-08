var path = require("path");

module.exports = {
  experiments: {
    asset: true,
  },
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          projectReferences: true,
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.join(process.cwd(), "dist"),
    filename: "bundle.js",
  },
};
