const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js', // Имя бандла
    path: path.resolve('build'), // Директория для файлов сборки
    clean: true,
  },

  devtool: 'source-map',
  plugins: [ // Подключаем плагины
    new HtmlPlugin({
      template: 'public/index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
  module: {
    rules: [ // Добавляем лоадеры
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
};
