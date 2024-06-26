const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path"); // commonJS (sistema de modulos)

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public", "assets", "js"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            sourceMaps: true,
          },
        },
      },
    ],
  },
  devtool: "source-map",
  plugins: [new CleanWebpackPlugin()],
};
