var webpack = require('webpack');
var path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || "development";




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
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor:{
        warnings:false
      }
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
      './app/components',
      './app/api'
    ],
    alias: {
      app:'app',
      applicationStyles: 'app/styles/app.css',
      todoStyles:'app/styles/components/todo.css',
      actions: 'app/actions/actions.jsx',
      reducers:  'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders:[{
      loader:'babel-loader',
      query:{
        presets:['react','es2015','stage-0']
      },
      test:/\.jsx?$/,
      exclude:/(node_modules|bower_components)/
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

  devtool: process.env.NODE_ENV==="production"? undefined:'cheap-module-eval-source-map'
};
