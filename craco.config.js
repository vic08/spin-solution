const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: (config) => {

      config.plugins.push(new webpack.ProvidePlugin({Buffer: ['buffer', 'Buffer']}))

      return {
        ...config,
        resolve: {
          ...config.resolve,
          fallback: {
            ...config.fallback,
            buffer: require.resolve("buffer"),
          }
        }
      };
    }
  }
}