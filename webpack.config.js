const path = require("path");

module.exports = {
  entry: path.resolve(__dirname + "/src/vue-connection-listener.js"),
  output: {
    path: path.resolve(__dirname + "/dist/"),
    filename: "vue-connection-listener.js",
    library: "vue-connection-listener",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
