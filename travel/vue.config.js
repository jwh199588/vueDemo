const path = require('path')
/* 配置本地json */
const express = require('express')
const app = express()
var appData = require('./src/assets/mock/index.json')
var seller = appData
var apiRoutes = express.Router()
app.use('/api', apiRoutes)

function resolve (dir) {
  return path.join(__dirname, dir)
}
// 项目的主要配置文件
module.exports = {
  // webpack 配置进行更细粒度的修改  https://cli.vuejs.org/zh/config/#chainwebpack
  chainWebpack: (config) => {
    // 修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('style', resolve('src/assets/style'))
      .set('common', resolve('src/common'))
  },
  // assetsDir: 'assets', // 设置静态资源路径
  devServer: {
    before (app) {
      app.get('/api/seller', (req, res) => {
        res.json({
          errno: 0, // 这里是你的json内容
          data: seller
        })
      })
    },
    host: 'localhost',
    port: 9999, // 端口号
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器  http://172.16.1.12:7071/rest/mcdPhoneBar/
    hotOnly: true, // 热更新
    proxy: null
  }
}
