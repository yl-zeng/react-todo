var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    "script!bootstrap/dist/js/bootstrap.min.js",
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories:[
      'node_modules',
      './app/components'
    ],
    alias: {
      applicationStyles: 'app/styles/app.css'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders:[{
      loader:'babel-loader',
      query:{
        presets:['react','es2015']
      },
      test:/\.jsx?$/,
      exclude:/(node-modules|bower_components)/
    },
    { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
    { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
    {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&minetype=application/font-woff'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader!'
        }]
  },

  devtool: 'cheap-module-eval-source-map'
};
