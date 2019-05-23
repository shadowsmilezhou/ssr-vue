let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    entry:path.resolve(__dirname,'src/app.js'),
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                  {  
                      loader:'babel-loader',
                       options:{
                            presets:['@babel/preset-env']
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
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.resolve(__dirname,'src/public/index.html')
        })
    ]
}