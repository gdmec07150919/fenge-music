require('./check-versions')()
const http = require('http')

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)
//网易云音乐
//手机登录
app.use('/login/cellphone', require('./router/loginCellphone'))

//邮箱登录
app.use('/login', require('./router/login'))
//获取评论
app.use('/comment', require('./router/comment'))

// 获取每日推荐歌曲
app.use('/recommend/songs', require('./router/recommendSongs'))
// 获取每日推荐歌单
app.use('/recommend/resource', require('./router/recommendResource'))

// 获取歌词
app.use('/lyric', require('./router/lyric'))

// 获取专辑
app.use('/album', require('./router/album'))

// 获取歌单
app.use('/user/playlist', require('./router/userPlaylist'))

// 获取歌单内列表
app.use('/playlist/detail', require('./router/playlistDetail'))

app.use('/playlist/tracks', require('./router/playlistTracks'))
// 获取音乐 url
app.use('/music/url', require('./router/musicUrl'))
// 搜歌
app.use('/search', require('.//router/search'))

app.use('/log/web', require('./router/logWeb'))

process.on('SIGHUP', () => {
  console.log('server: bye bye')
  process.exit()
})
//--------------
// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))
app.use(express.static('./router'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)
