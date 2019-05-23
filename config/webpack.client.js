let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let webpackMerge = require('webpack-merge')
let WebpackSSRClientPlugin = require('vue-server-renderer/client-plugin')
let base = require('./webpack.base.js')

module.exports = webpackMerge(base,{
    entry:{
        client:path.resolve(__dirname,'../src/client-entry.js')
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.resolve(__dirname,'../src/public/index.html')
        }),
        new WebpackSSRClientPlugin()
    ]
})