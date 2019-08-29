import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"

const resolve = filePath => path.resolve(__dirname, "../", filePath)

export default {
  entry: [resolve("src/index")],

  output: {
    path: resolve("dist"),
    publicPath: "/",
    filename: "js/[name].[hash].js",
    chunkFilename: "js/[name].[hash].chunk.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [resolve("src")],
        loader: "babel-loader"
      }
    ]
  },

  resolve: {
    modules: ["node_modules", resolve("src")]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("public/index.html"),
      chunksSortMode: "none"
    })
  ],

  stats: {
    modules: false,
    children: false,
    colors: true
  }
}
