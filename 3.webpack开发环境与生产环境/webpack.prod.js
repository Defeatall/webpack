const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

process.env.NODE_ENV = 'production'
// 复用loader
  const commonCssLoader = [
    { 
      loader : MiniCssExtractPlugin.loader, 
      options:{
        publicPath: '../'
      }
    },
    'css-loader',
    {
        loader: 'postcss-loader',
        ident: 'postcss',
        options: {
          postcssOptions: {
              //或者将插件引入写在单独的配置js中
              //config: './config/postcss.config.js',
              plugins: () => [
                  require('postcss-preset-env')()
              ]
          },
        } 
    }
];
module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            },
            {
              oneOf: [
                {
                  test: /\.css$/,
                  use: [...commonCssLoader]
                },
                {
                    test: /\.less$/,
                    use: [...commonCssLoader, 'less-loader']
                }, 
                {
                  test: /\.js$/,
                  exclude: /node_modules/,
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      [
                        '@babel/preset-env',
                        {
                          useBuiltIns: 'entry',
                          corejs: { 
                            version:  3
                          },
                          targets: {
                            chrome: '60',
                            firefox: '50',
                            ie: '9',
                            safari: '10',
                            edge: '17'
                          }
                        }
                      ]
                    ],
                    cacheDirectory: true
                  }
                },
              ]
            },
            
            // {
            //   test: /\.js$/,
            //   exclude: /node_modules/,
            //   loader: 'babel-loader',
            //   options: {
            //     presets: [
            //       [
            //         '@babel/preset-env',
                    
            //       ]
            //     ]
            //   }
            // },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          minify: {
            collapseWhitespace: true,
            removeComments: true
          }
        }),
        new MiniCssExtractPlugin({
          // 对输出的css文件进行重命名
          filename: 'css/built.[contenthash:10].css'
        }),
        new OptimizeCssAssetsWebpackPlugin()
    ],
})