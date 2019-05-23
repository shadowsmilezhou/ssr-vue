<template>
    <div @click="click">
        Bar components
        {{$store.state.username}}
    </div>
</template>

<script>
export default {
    //写的代码，全都是异步的，所以用promise
    asyncData({store}){ //异步数据，只在服务端执行
        return store.dispatch('setUsername');
    },
    mounted(){
        this.$store.dispatch('setUsername')
    },
    methods:{
        click(){
            alert(1)
        }
    }
}
</script>

