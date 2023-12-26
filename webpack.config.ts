import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

type Mode = 'production' | 'development';

interface envVariables {
  mode: Mode;
  port: number;
}

export default (env: envVariables) => {
  const isDev = env.mode === 'development';

  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    // entry: path.resolve(__dirname, 'src', 'index.ts'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
      isDev && new webpack.ProgressPlugin(),
      !isDev &&
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ],
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.css$/i,
          use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev
      ? {
          port: env.port ?? 3000,
          open: true,
          historyApiFallback: true,
        }
      : undefined,
  };
  return config;
};
