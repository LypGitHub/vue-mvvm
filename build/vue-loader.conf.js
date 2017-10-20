var utils = require('./utils')
var config = require('../config')
var isProduction = (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'testing')

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
