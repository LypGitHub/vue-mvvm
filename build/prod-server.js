const express = require('express')
const routeFallback = require('connect-history-api-fallback')
const compression = require('compression')
const logger = require('morgan')
const config = require('../config').build
const port = config.port || process.env.PORT || 8080

const app = express()

// 日志
app.use(logger('dev'))

// 开启压缩
app.use(compression())

// 页面路由fallback
app.use(routeFallback())

// 静态资源
const oneYear = 60 * 1000 * 60 * 24 * 365
app.use(config.assetsPublicStatic, express.static(config.assetsRootStatic, {
  maxAge: oneYear
}))

// 拦截根路由下 html 文件请求，取消缓存
app.use('/', (req, res) => {
  res.sendFile(config.index, {
    cacheControl: false,
    maxAge: 0
  })
})

// 启动服务
app.listen(port, (err) => {
  if (err) {
    return console.error(err)
  }

  console.log(`服务启动，正式地址端口：${port}`)
})
