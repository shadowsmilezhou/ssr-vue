let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let VueLoaderPlugin = require('vue-loader/lib/plugin')
let externals = require('webpack-node-externals')

module.exports = {
    mode:"development",
    externals:[externals()],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'../dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                  {  
                      loader:'babel-loader',
                       options:{
                            presets:['@babel/preset-env'],
                            plugins:['@babel/plugin-syntax-dynamic-import']
                        }
                }
            ],
            exclude:/node_modules/
            },
            
            {
                test:/\.css$/,
                use:[
                    {
                        loader:'vue-style-loader'
                    },
                    {
                        loader:'css-loader'
                    }
            ]
            },       
            {
                test:/\.vue$/,
                use:[{loader:'vue-loader'}]
                    
                
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin,
    ]
}