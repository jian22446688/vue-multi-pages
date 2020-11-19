/*
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2020-11-19 09:01:29
 * @FilePath: \excel-to-jsone:\work\vue-project\vue-multi-pages\vue.config.js
 */

const path = require('path')
const fs = require('fs')
const PAGEPATH = 'src/pages'
const HTML_TEMPLATE_PATH = 'public/index.html'

/**
 * 获取pages
 * 创建 src/pages**
 */
const getPages = () => {
  const basePath = path.resolve(__dirname, './')
  const isArray = obj => Object.prototype.toString.call(obj) === '[object Array]'
  const pagesDirList = fs.readdirSync(basePath + '/' + PAGEPATH)
  let pagesObj = {}
  if (!isArray(pagesDirList)) {
    throw new Error('Empty Pages')
  }
  pagesDirList.forEach(e => {
    const filePath = basePath + '/' + PAGEPATH + '/' + e + '/index.html'
    const isFile = fs.existsSync(filePath)
    let templatePath = isFile ? PAGEPATH + '/' + e + '/index.html' : HTML_TEMPLATE_PATH
    pagesObj[e] = {
      entry: PAGEPATH + '/' + e + '/index.js',
      template: templatePath,
      filename: `${e}.html`
    }
  })
  return pagesObj
}

module.exports = {
  productionSourceMap: false,
  pages: getPages(),
  devServer: {
    index: 'home.html', //默认启动serve 打开page1页面
    progress: true,
    before: () => {}
  }
}
