// 从webpack官网引入配置信息
const path = require('path');

module.exports = {
    // 打包入口文件
  entry: './src/index.js',
//   生成目录文件
  output: {
    //   通过引入path模块中的__dirname来表示相对路径  
    // publicPath为虚拟打包路径并不会真的生成 只会在端口8080生成
      publicPath: 'xuni',
    //   只是在8080端口虚拟生成
    filename: 'bundle.js'
  },
  devServer:{
    //   端口号
      port:8080,
    //   静态资源文件夹
    contentBase:'www'
  }

};