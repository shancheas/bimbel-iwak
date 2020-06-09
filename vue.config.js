const webpack = require('webpack');
const path = require('path');
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ],
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
        assets: path.resolve(__dirname, 'src/assets')
      }
    }
  },
  pwa: {
    name: 'Iwa K Try Out Online',
    themeColor: '#73CEEB',
    msTileColor: '#73CEEB',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#73CEEB'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
