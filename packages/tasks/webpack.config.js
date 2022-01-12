const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:9003/'
  },
  mode: 'development',
  devServer: {
    static: {
        directory : path.resolve(__dirname, './dist'),
    },
    devMiddleware: {
        index: false, // specify to enable root proxying
    },
    port: 9003,
    historyApiFallback: {
        index: 'index.html'
    }
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      title: 'Task'
    }),
    new ModuleFederationPlugin({
      name: 'TaskApp',
      filename: 'remoteEntry.js',
      exposes: {
        './TaskPage': './src/Home'
      }
    })
  ]
}