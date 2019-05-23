import createApp from './app'



export default (context)=>{
    return new Promise(function(resolve,rejected){
        let { app ,router, store} = createApp();
        router.push(context.url);
     
        //为了防止路由中的异步逻辑 采用promise 等待路由加载完成后，返回vue实例，服务队才可以渲染出页面

        //需要在当前页面中找到匹配的组件，找到它的asyncdata方法让他执行
        console.log('----------------haha')
        router.onReady(()=>{
            let matchesComponents = router.getMatchedComponents()
            console.log(matchesComponents)
            Promise.all(matchesComponents.map(component=>{
                if(component.asyncData){
                    return component.asyncData({store})
                }
            })).then(()=>{
                // 把vuex 中的状态挂载到上下文中的state
                context.state = store.state
                context.meta = app.$meta()
                resolve(app)
            })
          
        })
       
    })

}