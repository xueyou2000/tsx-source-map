const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve("./dist"),
    filename: "js/[name].js?[fullhash:8]",
    chunkFilename: "js/[name].chunk.js?[fullhash:8]",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              // If you want to speed up compilation significantly you can set this flag.
              // However, many of the benefits you get from static type checking between different dependencies in your application will be lost.
              // It's advisable to use transpileOnly alongside the fork-ts-checker-webpack-plugin to get full type checking again.
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  devServer: {
    static: "./dist",
    hot: true,
    host: "0.0.0.0",
    port: "8080",
    client: false,
    // client: {
    //   logging: "info",
    //   overlay: {
    //     warnings: true,
    //     errors: true,
    //   },
    // },
  },
};
