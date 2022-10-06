const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  mode: 'development',
  output: {
    path:path.resolve(__dirname, "dist"),
    publicPath: '/',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3050,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },{
        test: /\.m?js/,
        type: "javascript/auto",
      },{
        test: /\.json$/,
        loader: 'json-loader'
      },{
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },{
        test: /\.(png|jp(e*)g|gif|mp4)$/,
        use: ['file-loader'],
      },{
        test: /\.svg$/,
        use: [{
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },}],
      },{
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },{
        test: /\.(webp|webm)$/i,
        use: [
          
          'webp-loader',
          'file-loader'
        ]
      }, {
        test: /\.(ts|tsx)?$/,
        use: {
          loader: 'ts-loader'
        },
        exclude: /node_modules/
     }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
    }),
    new webpack.ProvidePlugin({
        process: 'process/browser',
    })
  ],
  resolve: {
    extensions: [ '.ts', '.js', '.tsx' ],
    fallback: {
        "stream": require.resolve("stream-browserify"),
        "buffer": require.resolve("buffer"),
        "crypto": require.resolve("crypto-browserify"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "url": require.resolve("url/"),
    }
},
}