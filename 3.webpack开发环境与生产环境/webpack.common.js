const { resolve } = require('path');

module.exports = {
  entry: ['./src/js/index.js'],
  output: {
    // filename: 'js/built.[contenthash:10].js',
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        oneOf: [
            {
              // 处理图片资源
              test: /\.(jpg|png|gif)$/,
              loader: 'url-loader',
              options: {
                limit: 8 * 1024,
                name: '[hash:10].[ext]',
                // 关闭es6模块化
                esModule: false,
                outputPath: 'imgs'
              }
            },
            {
              // 处理html中img资源
              test: /\.html$/,
              loader: 'html-loader'
            },
            {
              // 处理其他资源
              exclude: /\.(html|js|css|less|jpg|png|gif)/,
              loader: 'file-loader',
              options: {
                name: '[hash:10].[ext]',
                outputPath: 'media'
              }
            }
        ]
      }

    ]
  }
};
