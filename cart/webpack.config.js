const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const { container } = require("webpack");
//  new container.ModuleFederationPlugin({})

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "carts",
      filename: "remoteEntry.js",
      exposes: {
        "./CartShow": "./src/index",
      },
      /**
       * If going to add "shared" please move index.js to bootstrap.js
       * and dynamically load bootstrap.js to index.js
       * so that faker module or required dependency can load asynchronously
       */
      // shared: ["faker"],
      // shared:{
      //   faker:{
      //     singleton:true
      //   }
      // }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
