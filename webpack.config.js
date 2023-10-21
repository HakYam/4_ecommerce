const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    port: 9000,
    open: true,
    liveReload: true,
    devMiddleware: {
      writeToDisk: false
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: false,
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /custom\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          },
          "css-loader", 
          "sass-loader"
        ]
      },
      {
        test: /custom\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          },
          "rtlcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        }
      },
      {
        test: /\.(eot|ttf|woff)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: './src/product.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'checkout.html',
      template: './src/checkout.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'payment.html',
      template: './src/payment.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'search.html',
      template: './src/search.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: './src/contact.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    }),
    new CssMinimizerPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:9000/'  // Assuming webpack dev server runs on port 9000
    }),

  ],
};
