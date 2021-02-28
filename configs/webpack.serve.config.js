var baseConfig = require("./webpack.base");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
var fs = require("fs");
var webpackMerge = require("webpack-merge");

module.exports = webpackMerge.merge(baseConfig, {
  entry: ["react-hot-loader/patch", "./src/index.tsx"],
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    publicPath: "https://localhost:448/",
    hotOnly: true,
    hot: true,
    port: 448,
    https: true,
    ///cert: fs.readFileSync(path.resolve(__dirname, "../devcerts/server.crt")),
    //key: fs.readFileSync(path.resolve(__dirname, "../devcerts/server.key")),
    compress: true,
    disableHostCheck: true,
    watchOptions: {
      aggregateTimeout: 1000,
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },

  output: {
    path: path.join(process.cwd(), "dist"),
    filename: "[name].[hash].js",
    publicPath: "",
  },
  plugins: [
    new HtmlWebpackPlugin({
      port: 3000,
      template: "./public/index.html",
    }),
  ].filter(Boolean),
});
