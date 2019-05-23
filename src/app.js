import Vue from 'vue';
import App from './App.vue'

import createRouter from './router'
import createStore from './store'

import bus from './libs/eventsBus'
// 为了兼容服务器，要把这个函数改造成服务器

export default ()=>{
    let router = createRouter()
    let store = createStore()
    let app = new Vue({
        router,
        store,
        render:(h)=>h(App)
    })
    return { app, router, store}

}
