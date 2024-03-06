// webpack.config.js
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/main.js', // Vue 项目的入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出目录
    filename: 'app.js' // 输出文件名
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // 匹配以 .vue 结尾的文件
        use: 'vue-loader' // 使用 vue-loader 加载 Vue 组件
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin() // 使用 VueLoaderPlugin
  ]
};
