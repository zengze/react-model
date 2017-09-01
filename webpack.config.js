var WebPack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  //插件项
  plugins: [
    new CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin("common.css"),
    // new WebPack.DefinePlugin({
    //   "process.env": {
    //     NODE_ENV: JSON.stringify("production")
    //   }
    // })
  ],
  entry: {
    "index": "./src/entry/index.js"
  },
  output: {
    path: 'public/dist',
    filename: '[name].js'
  },
  module: {
        loaders: [
            // Load CSS files that are required in modules.
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            // Load font files for font-awesome. It uses a trailing version
            // number in the names when requiring so we have to accept them in
            // our test regex.
            {
                test: /\.(eot|svg|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
              test: /\.png$/, loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
              test: /\.gif/, loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
              test: /\.jpg/, loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
              test: /\.jpeg/, loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            // Process all JavaScript files as ECMAScript2015 along with
            // accepting the JSX syntax used by React.
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react'],
                },

            },
            {  test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }

};
