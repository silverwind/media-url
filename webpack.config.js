import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {fileURLToPath} from 'node:url';

export default {
  entry: {
    "theme-arc-green": fileURLToPath(new URL('css/themes/theme-arc-green.css', import.meta.url)),
    "theme-auto": fileURLToPath(new URL('css/themes/theme-auto.css', import.meta.url)),
  },
  output: {
    path: fileURLToPath(new URL('dist', import.meta.url)),
  },
  mode: "development",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].[contenthash:8].css',
    }),
  ],
}
