// webpack.config.js
const path = require('path');

module.exports = (env) => {
  console.log(env);
  const isProduction = env === 'production';

  return {
    mode: env,
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, './public'),
      filename: 'bundle.js',
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, './public'),
      },
      hot: true,
      port: 3000,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[hash]-[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
  };
};
