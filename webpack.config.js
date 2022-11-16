const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { DefinePlugin } = require("webpack");
const dotenv = require("dotenv");

module.exports = () => {
  return {
    mode: "development",
    devtool: "source-map",
    entry: {
      index: "./src/js/index.js",
      router: "./src/js/router.js",
    },
    module: {
      rules: [
        {
          test: /\.s?css$/i,
          include: path.resolve(__dirname, "src"),
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i, //png,jpg,svg,gif로 끝나는 모든 파일
          loader: "file-loader",
          // options: {
          //   name: "file-loader?name=images/[name].[ext]", // [원본 파일명].[확장자명].[해쉬값]
          // },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
        chunks: ["index"],
        minify: true,
        favicon: "./src/favicon.ico",
      }),
      new MiniCssExtractPlugin({ filename: "./css/style.css" }),
      new DefinePlugin({
        "process.env": JSON.stringify(dotenv.config().parsed),
      }),
    ],
    devServer: {
      historyApiFallback: true,
      watchFiles: ["src/**/*"],
      static: "./public",
      port: process.env.PORT || 5000,
      hot: true,
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "./js/[name].js",
      clean: true,
    },
  };
};
