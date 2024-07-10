const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production', // ou "development", dependendo do ambiente
  entry: './frontend/main.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            sourceMaps: true, // Isso é útil para desenvolvimento, mas pode ser desativado para produção
          },
        },
      }],
  },
  devtool: 'source-map', // Gera um source-map para facilitar a depuração
  plugins: [
    new CleanWebpackPlugin(), // Limpa o diretório de saída antes de gerar novos arquivos
  ],
};

// Certifique-se de ter as dependências instaladas:
// npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env style-loader css-loader clean-webpack-plugin
