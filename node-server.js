let express = require('express');
let fs = require('fs')
let app = express();
let path = require('path')
let VueServerRender = require('vue-server-renderer')

let serverBundle = require('./dist/vue-ssr-server-bundle.json')
let template = fs.readFileSync('./dist/index.ssr.html','utf-8')
let clientManifest = require('./dist/vue-ssr-client-manifest.json')


let render = VueServerRender.createBundleRenderer(serverBundle,{
    template,
    clientManifest
});



app.get('/',(req,res)=>{
    let context = {url:req.url}
    render.renderToString(context,(err,html)=>{
        res.send(html)
    })
})

app.use(express.static(path.resolve(__dirname,'dist')))

app.get('*',(req,res)=>{
    let context = {url:req.url}
    console.log(context)
    render.renderToString(context,(err,html)=>{
        res.send(html)
    })
})

app.listen('4000')