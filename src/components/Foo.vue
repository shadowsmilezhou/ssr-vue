<template>
    <div @click="click">
        foo components
    </div>
</template>

<script>
export default {
    methods:{
        click(){
            alert(2)
        },
    },
    metaInfo:{
        title:'defaulttitle'
    }
}
</script>

