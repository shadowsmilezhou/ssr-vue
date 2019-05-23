import Router from 'vue-router'
import Vue from 'vue'
import VueMeta from 'vue-meta'

import Bar from './components/Bar.vue';
import Foo from './components/Foo.vue'


Vue.use(Router)
Vue.use(VueMeta)

export default ()=>{
    let router = new Router({
        mode:'history',
        routes:[
            {path:'/',component:Bar},
            {path:'/foo',component:Foo}
        ]
    })

    return router
}