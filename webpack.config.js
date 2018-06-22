const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
  publicPath: path.join(__dirname, 'assets')
}

module.exports = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'A-Frame boilerplate',
      template: `${PATHS.app}/index.html`
    }),
    new HtmlWebpackPlugin({
      title: 'Coordinates',
      myPageHeader: 'coordinates',
      template: './src/lessons/1-coordinates.html',
      inject: 'head',
      filename: 'lessons/1-coordinates.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Meters',
      myPageHeader: 'meters',
      template: './src/lessons/2-meters.html',
      inject: 'head',
      filename: 'lessons/2-meters.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Rotation',
      myPageHeader: 'rotation',
      template: './src/lessons/3-rotation.html',
      inject: 'head',
      filename: 'lessons/3-rotation.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Primitives',
      myPageHeader: 'primitives',
      template: './src/lessons/4-primitives.html',
      inject: 'head',
      filename: 'lessons/4-primitives.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Sky',
      myPageHeader: 'sky',
      template: './src/lessons/5-sky.html',
      inject: 'head',
      filename: 'lessons/5-sky.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Images',
      myPageHeader: 'images',
      template: './src/lessons/6-images.html',
      inject: 'head',
      filename: 'lessons/6-images.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Materials',
      myPageHeader: 'materials',
      template: './src/lessons/7-materials.html',
      inject: 'head',
      filename: 'lessons/7-materials.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Assets',
      myPageHeader: 'assets',
      template: './src/lessons/8-assets.html',
      inject: 'head',
      filename: 'lessons/8-assets.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Text',
      myPageHeader: 'text',
      template: './src/lessons/9-text.html',
      inject: 'head',
      filename: 'lessons/9-text.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Layout',
      myPageHeader: 'layout',
      template: './src/lessons/10-layout.html',
      inject: 'head',
      filename: 'lessons/10-layout.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Story board template',
      myPageHeader: 'story-board-template',
      template: './src/lessons/story-board-template.html',
      inject: 'head',
      filename: 'lessons/story-board-template.html'
    })
  ],
  devServer: {
    overlay: {
      errors: true,
      warnings: false
    },
    contentBase: [path.resolve(__dirname, 'src')]
  },
  performance: { hints: false },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitwarning: true
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        }
      }
    ]
  }
}
