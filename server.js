let express = require('express');
let fs = require('fs')
let app = express();

let Vue = require('vue')
let VueServerRender = require('vue-server-renderer')


let vm = new Vue({
    template:'<div>hello world</div>'
})

let template = fs.readFileSync('./index.html','utf-8')

let render = VueServerRender.createRenderer({
    template
});



app.get('/',(req,res)=>{
    render.renderToString(vm,function(err,html){
        res.send(html)
    })
})

app.listen('3000')