var baseConfig = require("./webpack.base");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
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
    disableHostCheck: true,
  },
  resolve: {
    extensions: [".tsx", ".ts"],
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
