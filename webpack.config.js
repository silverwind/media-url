import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {fileURLToPath} from 'node:url';

export default {
  entry: {
    dark: fileURLToPath(new URL('dark.css', import.meta.url)),
    index: fileURLToPath(new URL('index.css', import.meta.url)),
  },
  output: {
    path: fileURLToPath(new URL('dist', import.meta.url)),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
}
