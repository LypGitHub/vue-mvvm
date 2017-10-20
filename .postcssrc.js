// https://github.com/michael-ciniawsky/postcss-load-config

const config = process.env.TYPE === 'app'
? ["iOS >= 8", "Android >= 4"]
: ["> 1%", "last 2 versions", "not ie <= 8"]

module.exports = {
  "plugins": [
    require('autoprefixer')({
      browsers: config
    }),
    process.env.TYPE === 'app' && require('postcss-pxtorem')({
      rootValue: 100
    }),
  ]
}
