let path = require('path')
let webpackMerge = require('webpack-merge')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let WebPackSSRServerPlugin = require('vue-server-renderer/server-plugin')
let base = require('./webpack.base.js')

module.exports = webpackMerge(base,{
    target:'node',
    entry:{
        server:path.resolve(__dirname,'../src/server-entry.js')
    },
    output:{
        libraryTarget:'commonjs2'  //module.exports = server.entry.js
    },
    plugins:[
        // 把public目录下的index.ssr内容拷贝到dist目录
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../src/public/index.ssr.html'),
            filename:'index.ssr.html',
            excludeChunks:['server']

    }),new WebPackSSRServerPlugin()
]

})