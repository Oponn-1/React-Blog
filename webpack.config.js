// webpack.config.js
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: './app-client.js',
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
    //publicPath: __dirname + '/public/'
  },
  devServer: {
    contentBase: __dirname + '/public/dist',
    compress:true,
    inline:true,
    port: 8080
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loaders: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.COSMIC_BUCKET': JSON.stringify(process.env.COSMIC_BUCKET),
      'process.env.COSMIC_READ_KEY': JSON.stringify(process.env.COSMIC_READ_KEY),
      'process.env.COSMIC_WRITE_KEY': JSON.stringify(process.env.COSMIC_WRITE_KEY)
    })
 ]
};
