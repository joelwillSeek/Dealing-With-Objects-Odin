const path = require("path");
const html_webpack_plugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    bundler: path.resolve(__dirname, "src/script.js"),
  },
  output: {
    clean: true,
    assetModuleFilename: "[name][ext]",
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  plugins: [
    new html_webpack_plugin({
      template: "src/index.html",
      title: "Objects and Prototype",
      filename: "index.html",
      chunks: ["bundler"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
