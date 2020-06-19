const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common,{
    mode:'production',//生产环境默认使用treeshaking
    //只引用需要使用的部分而不是全部的库文件
})