import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default ()=>{
    let store = new Vuex.Store({
        state:{
            username:'zz'
        },
        mutations:{
            setUsername(state){
                state.username = "haha"
            }
        },
        actions:{
            setUsername({commit}){
                return new Promise((resolve,rejected)=>{
                    setTimeout(()=>{
                        commit('setUsername');
                        resolve()
                    },1000)
                })
            }
        }
 
    })
    if (typeof window !== "undefined" && window.__INITIAL_STATE__){
           store.replaceState(window.__INITIAL_STATE__)

    }  
    return store
}