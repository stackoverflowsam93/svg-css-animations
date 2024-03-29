const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
    {
        test: /\.(js|jsx)$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(gif|png|jpe?g|webm|webp)$/i,
        use: [
          {
            loader: "img-optimize-loader",
            options: {
              compress: {
                webp: {
                  quality: 75
                },
                disableOnDevelopment: true
              },
            },
            // name: "[path][name].[ext]"
          }
        ],
      },
      {
        test: /manifest.js$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "ui/[name].[hash].json"
            },          
          },
          "extract-loader"
        ]
      },
      {
        test: /\.(mp4|mov)$/,
        use: 'file-loader?name=videos/[name].[ext]',
      },
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              rule: {
                include: [
                  "src/assets/images/svg"
                ]
              }
            }
          }
        ]
        
      }
]